import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatIcon } from '@angular/material/icon';
import { AppBookingSummaryComponent } from '../app-booking-summary/app-booking-summary.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '@services/helper.service';
import { hotels, razorpay_key, key_secret } from '../../constants/hotels';
import { BookingService } from '@services/booking.service';

@Component({
  selector: 'app-order-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon],
  templateUrl: './order-checkout.component.html',
  styleUrl: './order-checkout.component.scss',
})
export class OrderCheckoutComponent implements OnInit {
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
    countryCode: '',
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
  setSession() {
    const storedSession = sessionStorage.getItem('checkoutSession');
    const storedDetails = sessionStorage.getItem('travellerDetails');
    if (storedDetails) {
      this.travellerDetails = JSON.parse(storedDetails);
    }
    if (storedSession) {
      this.sessionData = JSON.parse(storedSession);
      this.hotelDetails = this.HelperService.getHotelByID(
        this.sessionData.routingUrl,
        this.hotelList,
      );
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
    option === 'full'
      ? this.HelperService.updateSessionStorage({
          payableAmount: this.sessionData.subtotal,
          paymentType: option,
        })
      : this.HelperService.updateSessionStorage({
          payableAmount: this.sessionData.subtotal / 2,
          paymentType: option,
        });
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

  // bookingConfirmation() {
  //   const payloadData = {
  //     packageName: this.hotelDetails.title,
  //     customerName: `${this.travellerDetails.firstName} ${this.travellerDetails.lastName}`,
  //     customerEmail: this.travellerDetails.email,
  //     customerPhone: this.travellerDetails.phone,
  //     adultCount: 1,
  //     childCount: 0,
  //     infantCount: 0,
  //     singleAdultAmt: 1500,
  //     singleChildAmt: 700,
  //     singleInfantAmt: 0,
  //     totalMemberCount: 1,
  //     totalAmountForAdult: 1500,
  //     totalAmountForChild: 0,
  //     totalAmountForInfant: 0,
  //     totalAmount: 1500,
  //     fTotalAmount: 1500,
  //     discountedTotalAmount: 1500,
  //     totalPayableAmount: 1500,
  //     paymentType: 'fullPayment',
  //     vehicleType: 'WATERSPORTS',
  //     selectedPackage: {
  //       title: 'Without Transport',
  //       amt: '1500',
  //       kidAmt: '700',
  //       desc: [
  //         'Access to all decks',
  //         '2-hour cruise in Goa Marina',
  //         'Goan buffet dinner.',
  //         'Goan dance show',
  //       ],
  //       selected: true,
  //     },
  //   };
  // }
  // initiatePayment() {
  //   const options = {
  //     key: razorpay_key,
  //     key_secret: key_secret,
  //     amount: this.sessionData.payableAmount * 100,
  //     currency: 'INR',
  //     expire_by: 1750346930,
  //     reference_id: this.travellerDetails.phone,
  //     name: 'Myraan Adventures',
  //     description: 'Booking Payment',

  //     handler: (response: any) => {
  //       sessionStorage.setItem('paymentResponse', JSON.stringify(response));
  //       const payloadData = {
  //         name: `${this.travellerDetails.firstName} ${this.travellerDetails.lastName}`,
  //         number: this.travellerDetails.phone,
  //         email: this.travellerDetails.email,
  //         dateOfActivity: this.sessionData.selectedDate.label,
  //         packageName: this.hotelDetails.title,
  //         noOfAdults: this.sessionData.travellers[0].count,
  //         noOfChild: this.sessionData.travellers[1].count,
  //         noOfInfants: this.sessionData.travellers[2].count,
  //         totalAmount: this.sessionData.subtotal,
  //         paidAmount: this.sessionData.payableAmount,
  //         paymentType: this.sessionData.paymentType,
  //         transportType: this.sessionData.selectedTransport.title,
  //       };
  //       this._bookingService.vehicleBooking(payloadData).subscribe({
  //         next: (res: any) => {
  //           console.log('Booking successful', res);
  //           if (
  //             response.razorpay_payment_id &&
  //             res?.responseCode === 200 &&
  //             res?.responseMessage === 'SUCCESS'
  //           ) {
  //             this.router.navigate(['/payment-success']);
  //           } else {
  //             this.router.navigate(['/payment-failure']);
  //           }
  //         },
  //         error: (err: any) => {
  //           console.error('Booking failed', err);
  //         },
  //       });
  //     },
  //     prefill: {
  //       name: `${this.travellerDetails.firstName} ${this.travellerDetails.lastName}`,
  //       email: this.travellerDetails.email,
  //       contact: this.travellerDetails.phone,
  //     },
  //     theme: {
  //       color: '#3399cc',
  //     },
  //   };

  //   const rzp = new Razorpay(options);
  //   rzp.open();
  // }
  initiatePayment() {
    const { firstName, lastName, countryCode, phone, email } = this.travellerDetails;
    const { payableAmount, selectedDate, travellers, subtotal, paymentType, selectedTransport } =
      this.sessionData;
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
      totalAmount: payableAmount,
      discountedTotalAmount: subtotal,
      totalPayableAmount: subtotal,
      paymentType,
      selectedPackage: selectedTransport,
    };
    this.handlePaymentResponse('response', payloadData);
    const options = {
      key: razorpay_key,
      amount: 1 * 100,
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
        console.log('Booking successful', res);
        if (res?.responseCode === 200 && res?.responseMessage === 'SUCCESS') {
          const payLink = res?.payload?.paymentLink;
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
