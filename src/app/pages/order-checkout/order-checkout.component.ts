import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatIcon } from '@angular/material/icon';
import { AppBookingSummaryComponent } from '../app-booking-summary/app-booking-summary.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '@services/helper.service';
import { hotels, razorpay_key, key_secret } from '../../constants/hotels';
import { BookingService } from '@services/booking.service';
import { FeatureSectionComponent } from '../shared/components/feature-section/feature-section.component';

@Component({
  selector: 'app-order-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon, FeatureSectionComponent],
  templateUrl: './order-checkout.component.html',
  styleUrl: './order-checkout.component.scss',
})
export class OrderCheckoutComponent implements OnInit, AfterViewInit {
  @ViewChild('contactDetails') contactDetails!: ElementRef;
  constructor(
    private bottomSheet: MatBottomSheet,
    private route: ActivatedRoute,
    private HelperService: HelperService,
    private _bookingService: BookingService,
  ) {}

  selectedPaymentOption: 'partial' | 'full' = 'full';

  contact = {
    firstName: 'Arshad',
    lastName: 'M',
    email: 'marshadansari10@gmail.com',
    phone: '7845273233',
    countryCode: '+91',
  };
  features: any;
  minutes: number = 20;
  seconds: number = 14;
  razorpay_key = razorpay_key;
  sessionData: any;
  hotelList = hotels;
  hotelDetails: any;
  travellerDetails = {
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
  };
  showErrors = false;
  isLoading = true;
  category: string = '';

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    if (!category) return;
    this.category = category;
    this.hotelList = this.HelperService.renderPackageData(category);
    this.startCountdown();
    this.setSession();
    this.features = this.HelperService.getFeatureList(this.hotelDetails);
    setTimeout(() => {
      this.isLoading = false;
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contactDetails?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  }
  setSession() {
    const storedSession = sessionStorage.getItem('checkoutSession');
    const storedDetails = sessionStorage.getItem('travellerDetails');
    if (storedDetails) {
      this.travellerDetails = JSON.parse(storedDetails);
    }
    const id = this.route.snapshot.paramMap.get('id');
    if (storedSession && id) {
      this.sessionData = JSON.parse(storedSession);
      this.hotelDetails = this.HelperService.getHotelByID(id, this.hotelList);
    }
  }
  startCountdown() {
    setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        }
      }
    }, 1000);
  }
  selectPayment(option: 'full' | 'partial') {
    this.selectedPaymentOption = option;
    const subtotal = this.sessionData.subtotal;
    const reportPrice = this.hotelDetails.reportPrice;
    const gstRate = 0.18;

    if (option === 'full') {
      const gstAmount = +(subtotal * gstRate).toFixed(2);
      const amountWithGST = +(subtotal + gstAmount).toFixed(2);

      this.HelperService.updateSessionStorage({
        payableAmount: +subtotal.toFixed(2),
        paymentType: option,
        amountWithGST,
      });
    } else {
      const { travellers, selectedTransport } = this.sessionData;
      const vehicleQuantity = travellers[0]?.count + travellers[1]?.count;
      console.log({ vehicleQuantity });
      const finalReportPrice =
        selectedTransport?.title === 'With Transport'
          ? subtotal - vehicleQuantity * (reportPrice + 200)
          : subtotal - vehicleQuantity * reportPrice;
      const partialSubtotal = finalReportPrice;
      const partialGST = +(partialSubtotal * gstRate).toFixed(2);
      const amountWithGST = +(partialSubtotal + partialGST).toFixed(2);

      this.HelperService.updateSessionStorage({
        payableAmount: +partialSubtotal.toFixed(2),
        paymentType: option,
        amountWithGST,
      });
    }

    this.setSession();
  }

  openBookingSummary() {
    this.bottomSheet.open(AppBookingSummaryComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        totalAmount: this.sessionData.payableAmount,
        discountAmount: 500,
      },
    });
  }
  updateTravellerDetails() {
    sessionStorage.setItem('travellerDetails', JSON.stringify(this.travellerDetails));
  }
  validateAndSubmit() {
    this.showErrors = !(
      this.travellerDetails.firstName &&
      this.travellerDetails.lastName &&
      this.travellerDetails.email &&
      this.travellerDetails.countryCode &&
      this.travellerDetails.phone
    );

    if (!this.showErrors) {
      this.initiatePayment();
    }
  }

  initiatePayment() {
    const { firstName, lastName, countryCode, phone, email } = this.travellerDetails;
    const {
      payableAmount,
      selectedDate,
      travellers,
      subtotal,
      paymentType,
      selectedTransport,
      amountWithGST,
      location,
    } = this.sessionData;
    const { title } = this.hotelDetails;
    const payloadData = {
      vehicleType: 'WATERSPORTS',
      vehicleName: title,
      transportType: selectedTransport?.title || 'N/A',
      vehicleQuantity: travellers[0]?.count + travellers[1]?.count + travellers[2]?.count,
      countryCode: countryCode,
      customerMobile: phone,
      fromDate: selectedDate?.dateFormat,
      noOfAdult: travellers[0]?.count || 0,
      noOfChild: travellers[1]?.count || 0,
      noOfInfant: travellers[2]?.count || 0,
      totalMemberCount: travellers[0]?.count + travellers[1]?.count + travellers[2]?.count,
      amountForAdult: travellers[0]?.price,
      amountForChild: travellers[1]?.price,
      amountForInfant: travellers[2]?.price,
      totalAmountForAdult: travellers[0]?.price * travellers[0]?.count,
      totalAmountForChild: travellers[1]?.price * travellers[1]?.count,
      totalAmountForInfant: travellers[2]?.price * travellers[2]?.count,
      toDate: selectedDate?.dateFormat,
      customerName: `${firstName} ${lastName}`,
      email,
      totalAmount: amountWithGST,
      discountedTotalAmount: subtotal,
      totalPayableAmount: subtotal,
      balanceAmount: subtotal - payableAmount,
      paymentType,
      selectedPackage: selectedTransport,
      location,
    };
    this.handlePaymentResponse('response', payloadData);
    const options = {
      key: razorpay_key,
      amount: 1,
      currency: 'INR',
      expire_by: 1750346930,
      reference_id: phone,
      name: 'Myraan Adventures',
      description: 'Booking Payment',
      handler: (response: any) => {
        this.handlePaymentResponse(response, payloadData);
      },
      prefill: { name: `${firstName} ${lastName}`, email, contact: phone },
      theme: { color: '#3399cc' },
    };
  }

  handlePaymentResponse(response: any, payloadData: any) {
    this._bookingService.vehicleBooking(payloadData).subscribe({
      next: (res: any) => {
        if (res?.responseCode === 200 && res?.responseMessage === 'SUCCESS') {
          const payLink = res?.payload?.paymentLink;
          console.log({ res });
          sessionStorage.setItem('paymentResponse', res?.payload?.bookingId);
          this.bookingPay(payLink);
        } else {
        }
      },
      error: (err: any) => {
        console.error('Booking failed', err);
      },
    });
  }
  bookingPay(paymentLink: string) {
    // Implement payment logic here
    window.location.href = paymentLink;
  }
}
