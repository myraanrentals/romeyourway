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
import { firstValueFrom } from 'rxjs';

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
  confirmPaymentLoading = false;
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
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    needGstInvoice: false,
    customerCompanyName: '',
    customerCompanyAddress: '',
    customerCompanyGST: '',
  };
  errors: {
    [key: string]: { hasError: boolean; message: string };
  } = {};
  showErrors = false;
  isLoading = true;
  iscouponLoading = false;
  category: string = '';
  couponCode: string = '';
  couponMessage: string = '';
  showCouponModal: boolean = false;
  availableCoupons = [
    {
      title: 'Get ₹500 off',
      code: 'RYWVDS500',
      description: 'Applicable on full payment. Max ₹500 off.',
    },
    // {
    //   title: 'Up to ₹100 Cashback',
    //   code: 'PHONEPERUPAYCC',
    //   description: 'Valid on PhonePe with Rupay Credit Cards.',
    // },
    // {
    //   title: 'Flat ₹200 Cashback',
    //   code: 'PAYTMUPI',
    //   description: 'Valid on Paytm UPI above ₹150.',
    // },
  ];

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
  clearCouponMessage() {
    this.couponMessage = '';
  }
  findProfit() {
    const { travellers,selectedTransport } = this.sessionData;
    const adult_count = travellers[0]?.count;
    const adult_price = selectedTransport?.adultPrice;
    const kid_count = travellers[1]?.count;
    const kid_price = selectedTransport?.kidPrice;
    const adult_report_price = selectedTransport?.adultReportPrice;
    const kid_report_price = selectedTransport?.kidReportPrice;
    const profit = adult_count * (adult_price - adult_report_price) + kid_count * (kid_price - kid_report_price);
    return profit;
  }
  async applyCoupon(couponCode: string) {
    if (this.sessionData?.couponCode === couponCode) {
      this.couponMessage = `Coupon "${couponCode}" is already applied.`;
      return;
    }
  
    this.iscouponLoading = true;
  
    try {
      const result = await this.validateCoupon(couponCode);
  
      if (!result) {
        this.couponMessage = 'Invalid or expired coupon code.';
        return;
      }
  
      // Check if discount exceeds profit
      const profit = this.findProfit();
      if (result.couponDiscount > profit) {
        this.couponMessage = `This coupon cannot be applied.`;
        return;
      }
  
      // Apply coupon
      const updatedSubtotal = this.sessionData.subtotal - result.couponDiscount;
      const updatedAmountWithGST = this.calculateAfterTaxDiscount(
        this.sessionData.amountWithGST,
        18,
        result.couponDiscount
      ).finalTotal;
      this.couponCode = result.couponCode;
      this.couponMessage = `Coupon applied! You saved ₹${result.couponDiscount}`;
  
      this.HelperService.updateSessionStorage({
        couponCode: result.couponCode,
        discountAmount: result.couponDiscount,
        subtotal: updatedSubtotal,
        amountWithGST: updatedAmountWithGST,
      });
  
      this.sessionData = {
        ...this.sessionData,
        couponCode: result.couponCode,
        discountAmount: result.couponDiscount,
        subtotal: updatedSubtotal,
        amountWithGST: updatedAmountWithGST,
      };
  
      this.showCouponModal = false;
    } catch (error) {
      this.couponMessage = 'Something went wrong. Please try again.';
      console.error(error);
    } finally {
      this.iscouponLoading = false;
    }
  }
  
  calculateAfterTaxDiscount(
    totalWithTax: number,
    taxRate: number,
    discount: number,
  ): {
    basePrice: number;
    discountedBase: number;
    taxAmount: number;
    finalTotal: number;
  } {
    // Step 1: Calculate base price (before tax)
    const basePrice = totalWithTax / (1 + taxRate / 100);

    // Step 2: Deduct discount from base price
    const discountedBase = Math.max(basePrice - discount, 0);

    // Step 3: Recalculate tax on discounted base
    const taxAmount = discountedBase * (taxRate / 100);
    const finalTotal = discountedBase + taxAmount;

    return {
      basePrice: parseFloat(basePrice.toFixed(2)),
      discountedBase: parseFloat(discountedBase.toFixed(2)),
      taxAmount: Math.floor(parseFloat(taxAmount.toFixed(2))),
      finalTotal: Math.floor(parseFloat(finalTotal.toFixed(2))),
    };
  }

  onCouponSelect(event: Event) {
    const selectedCode = (event.target as HTMLSelectElement).value;
    this.couponCode = selectedCode;
    this.clearCouponMessage();
  }
  openCouponModal() {
    this.showCouponModal = true;
  }

  closeCouponModal() {
    this.showCouponModal = false;
  }

  selectPayment(option: 'full' | 'partial') {
    this.showCouponModal = false;
    this.couponCode = '';
    this.HelperService.updateSessionStorage({
      couponCode: '',
      discountAmount: 0,
      subtotal: this.sessionData.subtotal + this.sessionData.discountAmount,
    });
    this.sessionData = {
      ...this.sessionData,
      couponCode: '',
      discountAmount: 0,
      subtotal: this.sessionData.subtotal + this.sessionData.discountAmount,
    };
    this.selectedPaymentOption = option;
    const subtotal = this.sessionData.subtotal;
    const reportPrice = this.hotelDetails.reportPrice;
    const reportPriceWithTransport = this.hotelDetails.reportPriceWithTransport    
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
      const isYacht = this.category === 'book-private-yachts-in-goa';
      const { travellers, selectedTransport } = this.sessionData;
      const nonYachtSubtotal = travellers[0]?.count * selectedTransport?.adultReportPrice + travellers[1]?.count * selectedTransport?.kidReportPrice;

      const finalReportPrice = isYacht
        ? this.calculatePrice()
        : nonYachtSubtotal

      const partial= travellers[0]?.count * (Number(selectedTransport?.adultPrice)-Number(selectedTransport?.adultReportPrice)) + travellers[1]?.count *(Number(selectedTransport?.kidPrice) - Number(selectedTransport?.kidReportPrice))

      const partialGST =this.travellerDetails.needGstInvoice ? Math.floor(+( subtotal * gstRate)) : +(partial * gstRate).toFixed(2);
      const amountWithGST = +(partial + partialGST).toFixed(2);
      this.HelperService.updateSessionStorage({
        payableAmount:+partial.toFixed(2),
        paymentType: option,
        amountWithGST,
      });
    }

    this.setSession();
  }
  calculatePrice(): number {
    const { travellers, selectedTransport } = this.sessionData;

    const priceMap: Record<string, number> = {
      Cruising: selectedTransport?.cruisingReportPrice || 0,
      Anchoring: selectedTransport?.anchoringReportPrice || 0,
    };

    const total = travellers.reduce(
      (sum: number, traveller: { displayLabel: string | number; count: number }) => {
        const pricePerUnit = priceMap[traveller.displayLabel] || 0;
        return sum + traveller.count * pricePerUnit;
      },
      0,
    );

    return total;
  }

  openBookingSummary() {
    this.bottomSheet.open(AppBookingSummaryComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        totalAmount: Math.floor(this.sessionData.payableAmount),
        discountAmount: this.couponCode ? Math.floor(this.sessionData.discountAmount) : 0,
        needGstInvoice: this.travellerDetails.needGstInvoice,
        subtotal: Math.floor(this.sessionData.subtotal),
      },
    });
  }
  updateTravellerDetails() {
    this.showErrors = false;
    this.errors = {};
    sessionStorage.setItem('travellerDetails', JSON.stringify(this.travellerDetails));
    this.selectPayment(this.selectedPaymentOption);
  }
  validateAndSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{6,15}$/;
    const gstRegex = /^[0-9A-Z]{15}$/;

    this.errors = {
      fullName: {
        hasError: !this.travellerDetails.fullName,
        message: 'Full Name is required',
      },
      emailRequired: {
        hasError: !this.travellerDetails.email,
        message: 'Email is required',
      },
      emailInvalid: {
        hasError: !!this.travellerDetails.email && !emailRegex.test(this.travellerDetails.email),
        message: 'Email format is invalid',
      },
      countryCode: {
        hasError: !this.travellerDetails.countryCode,
        message: 'Country code is required',
      },
      phoneRequired: {
        hasError: !this.travellerDetails.phone,
        message: 'Phone Number is required',
      },
      phoneInvalid: {
        hasError: !!this.travellerDetails.phone && !phoneRegex.test(this.travellerDetails.phone),
        message: 'Phone Number is invalid',
      },
      customerCompanyName: {
        hasError: this.travellerDetails.needGstInvoice && !this.travellerDetails.customerCompanyName?.trim(),
        message: 'Company Name is required',
      },
      customerCompanyAddress: {
        hasError: this.travellerDetails.needGstInvoice && !this.travellerDetails.customerCompanyAddress?.trim(),
        message: 'Company Address is required',
      },
      customerCompanyGST: {
        hasError:
          this.travellerDetails.needGstInvoice &&
          (!this.travellerDetails.customerCompanyGST?.trim() ||
            !gstRegex.test(this.travellerDetails.customerCompanyGST.trim().toUpperCase())),
        message: 'Enter a valid 15-character GST number',
      },
    };

    this.showErrors = Object.values(this.errors).some((e) => e.hasError);

    if (!this.showErrors) {
      this.initiatePayment();
    }
  }
  convertToUTC(dateStr: string, timeStr: string): string {
    const [year, month, day] = dateStr.split('-').map(Number);

  const match = timeStr.toLowerCase().match(/(\d+)(am|pm)/);
  if (!match) throw new Error('Invalid time format');

  let hour = Number(match[1]);
  const period = match[2];

  if (period === 'pm' && hour !== 12) hour += 12;
  if (period === 'am' && hour === 12) hour = 0;

  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, 0, 0));

  return utcDate.toISOString().slice(0, 19);
  }
  
  initiatePayment() {
    const {
      fullName,
      countryCode,
      phone,
      email,
      needGstInvoice,
      customerCompanyName,
      customerCompanyAddress,
      customerCompanyGST,
    } = this.travellerDetails;
    const {
      payableAmount,
      selectedDate,
      travellers,
      subtotal,
      paymentType,
      selectedTransport,
      amountWithGST,
      pickupLocation,
      selectedTime
    } = this.sessionData;
    const {superCategory, title } = this.hotelDetails;
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
      customerName: fullName,
      email,
      totalAmount: amountWithGST,
      discountedTotalAmount: subtotal,
      totalPayableAmount: subtotal,
      balanceAmount: subtotal - payableAmount,
      paymentType,
      selectedPackage: selectedTransport,
      location,
    };
    const adultPrice = Number(selectedTransport?.adultPrice)
    const kidPrice = Number(selectedTransport?.kidPrice)
    const adultReportPrice = Number(selectedTransport?.adultReportPrice)
    const kidReportPrice = Number(selectedTransport?.kidReportPrice)
    const kidCount = travellers[1]?.count || 0;
    const isTransportIncluded = !!location;
    const reportPrice = isTransportIncluded
      ? this.hotelDetails?.reportPriceWithTransport
      : this.hotelDetails?.reportPrice || 0;

    const adultCount = travellers[0]?.count || 0;
    const childCount = travellers[1]?.count || 0;
    const infantCount = travellers[2]?.count || 0;
    const totalAmount = adultCount*adultPrice + kidCount * kidPrice
    const totalAmountWithGst = Math.floor(totalAmount + totalAmount * 0.18)
    const totalBalanceAmount =  adultCount*adultReportPrice + kidCount * kidReportPrice
    //Patrial Logics
    const partialAmount = adultCount*(adultPrice-adultReportPrice) + kidCount * (kidPrice-kidReportPrice)
    const partialAmountWithGst = Math.floor(partialAmount + partialAmount * 0.18)
    const partialBalanceAmount =  totalAmount - partialAmount
    
    
    // full payment
    
    const finalBalanceAmount = paymentType==='full'?totalAmountWithGst-totalAmountWithGst:partialBalanceAmount
    const finalBookingAmount = paymentType==='full'?partialAmount-this.sessionData?.discountAmount:partialAmount
    //partial payment
    const payToVendor = paymentType==='full'? totalBalanceAmount:0
    const finalTotalAmount =  paymentType==='full'?amountWithGST:partialAmountWithGst+partialBalanceAmount
    
    const secondPayloadData = {
      companyName: title,
      enquirySource: 'ROME_YOUR_WAY',
      superCategory: superCategory,

      // Transport & Location
      pickDropHub: pickupLocation,
      pickupHub: pickupLocation,
      pickupPoint: pickupLocation,
      dropHub: pickupLocation,
      dropPoint: null,
      activityLocation: null,
      selfPdType :pickupLocation?'pandd':'self',
      // Package Info
      categoryId: 1,
      category: title,

      // Timing
      pickupDateTime: this.convertToUTC(selectedDate?.dateFormat, selectedTime) || null,
      dropDateTime: this.convertToUTC(selectedDate?.dateFormat, selectedTime) || null,

      // Customer Info
      customeName: fullName,
      countryDialCode: countryCode,
      customerMobile: phone,
      customerEmailId: email,
      subCategory:'Activity',

      // People Info
      quantity: adultCount,
      kidQuantity: childCount || 0,
      infantQuantity: infantCount || 0,
      startTime: selectedTime,

      // Pricing Info
      vendorRate: selectedTransport?.adultReportPrice || 0,
      vendorRateForKids: selectedTransport?.kidReportPrice || 0,
      payToVendor: payToVendor,
      companyRate: travellers[0]?.price || 0,
      companyRateForKids: travellers[1]?.price || 0,
      payToCompany: 0,
      bookingAmount: finalBookingAmount,
      balanceAmount: finalBalanceAmount,
      totalAmount: finalTotalAmount,
      securityAmount: 0,
      actualAmount:amountWithGST,
      gstAmount:finalTotalAmount,
      bookingAmountWithGst:finalBookingAmount,
      balanceAmountWithGst:finalBalanceAmount,

      // Discounts & Status
      discountType: 'FLAT',
      discount: this.sessionData?.discountAmount || 0,
      status: 'ENQUIRY',

      // Source
      leadOrigine: 'WEBSITE',
      leadType: 'New',
      createdBy: '7715959917',
      superadminId: '1234567890',
      loginId: '7715959917',
      notes: '',
      otherPickLocation:'N/A',
      otherDropLocation:'N/A',
      categoryTypeName:this.HelperService.categoryTypeNameParser(this.category),
      needGstInvoice: needGstInvoice,
      customerCompanyName: needGstInvoice ? customerCompanyName?.trim() : "",
      customerCompanyAddress: needGstInvoice ? customerCompanyAddress?.trim() : "",
      customerCompanyGST: needGstInvoice ? customerCompanyGST?.trim().toUpperCase() : "",
    };
    this.handlePaymentResponse('response', secondPayloadData);
  }

  handlePaymentResponse(response: any, payloadData: any) {
    this.confirmPaymentLoading = true;
    this._bookingService.vehicleBooking(payloadData).subscribe({
      next: (res: any) => {
        if (res?.responseCode === 200 && res?.responseMessage === 'SUCCESS') {
          const payLink = res?.payload?.paymentUrl;
          sessionStorage.setItem('paymentResponse', res?.payload?.bookingId);
          this.bookingPay(payLink);
        } else {
          this.confirmPaymentLoading = false;
        }
      },
      error: (err: any) => {
        console.error('Booking failed', err);
        this.confirmPaymentLoading = false;
      },
      complete: () => {
        this.confirmPaymentLoading = false;
      }
    });
  }
  bookingPay(paymentLink: string) {
    window.location.href = paymentLink;
    this.confirmPaymentLoading = false;
  }
  async validateCoupon(
    coupon: string,
  ): Promise<{ couponDiscount: number; couponCode: string } | false> {
    try {
      const res: any = await firstValueFrom(this._bookingService.validateCouponDetails(coupon));
      if (res?.responseCode === 200 && res?.responseMessage === 'SUCCESS') {
        if (res.payload?.respCode === 200) {
          return { couponDiscount: res.payload.couponAmount, couponCode: res.payload.coupon };
        }
      }
      return false;
    } catch (error) {
      console.error('Coupon validation failed', error);
      return false;
    }
  }
}
