import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookingService } from '@services/booking.service';
import { HelperService } from '@services/helper.service';
import { CommonModule } from '@angular/common';
import { BookingDetails, CountKey } from '@interfaces/index';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [HelperService],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  showPromoCode: boolean = false;
  travelDetails: any;
  formSubmitted = false;
  bookingDetails!: BookingDetails;
  widthWin: any = '';
  packageNameOne: any;
  packageTempId: any;

  constructor(
    private _helperService: HelperService,
    public _bookingService: BookingService,
  ) {
    this.bookingDetails = this._bookingService.bookingDetails;
    this.widthWin = window.innerWidth;
  }

  ngOnInit() {
    (async () => {
      this.travelDetails = '';
      this.travelDetails = this._helperService.getSessionStorage('travelDetails');
      this.packageTempId = this._helperService.getSessionStorage('packageId');

      this.packageNameOne = this.packageTempId.HeadingThree;
      this.initializeBookingDetails();
    })();
  }

  initializeBookingDetails() {
    let travellersDetails = this._helperService.getSessionStorage('travellersDetails');
    let travelDetails = this._helperService.getSessionStorage('travelDetails');
    this.bookingDetails = {
      packageName: this.packageNameOne,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      adultCount: travellersDetails?.adultCount || 1,
      childCount: travellersDetails?.childCount || 0,
      infantCount: travellersDetails?.infantCount || 0,
      singleAdultAmt: Number(travelDetails?.selectedPackage?.amt) || 0,
      singleChildAmt: Number(travelDetails?.selectedPackage?.kidAmt) || 0,
      singleInfantAmt: 0,
      totalMemberCount: 1,
      totalAmountForAdult: 0,
      totalAmountForChild: 0,
      totalAmountForInfant: 0,
      totalAmount: Number(travelDetails?.selectedPackage?.amt) || 0,
      fTotalAmount: Number(travelDetails?.selectedPackage?.amt) || 0,
      discountedTotalAmount: Number(travelDetails?.selectedPackage?.amt) || 0,
      totalPayableAmount: 0,
      paymentType: this.bookingDetails.paymentType,
    };
    this._bookingService.updateTotalAmount.call(this.bookingDetails, this.bookingDetails);
  }

  initializePaymentType() {
    let travellersDetails = this._helperService.getSessionStorage('travellersDetails');
    let travelDetails = this._helperService.getSessionStorage('travelDetails');
    this.bookingDetails = {
      packageName: this.packageNameOne,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      adultCount: travellersDetails?.adultCount,
      childCount: travellersDetails?.childCount,
      infantCount: travellersDetails?.infantCount,
      singleAdultAmt: Number(travelDetails?.selectedPackage?.amt),
      singleChildAmt: Number(travelDetails?.selectedPackage?.kidAmt),
      singleInfantAmt: 0,
      totalMemberCount: 1,
      totalAmountForAdult: 0,
      totalAmountForChild: 0,
      totalAmountForInfant: 0,
      totalAmount: Number(travelDetails?.selectedPackage?.amt),
      fTotalAmount: Number(travelDetails?.selectedPackage?.amt),
      discountedTotalAmount: Number(travelDetails?.selectedPackage?.amt),
      totalPayableAmount: 0,
      paymentType: this.bookingDetails.paymentType,
    };
    this._bookingService.updateTotalAmount.call(this.bookingDetails, this.bookingDetails);
  }

  onSubmit(checkoutForm: NgForm) {
    this.formSubmitted = true;
    if (checkoutForm.valid) {
      this.bookingConfirmation();
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(checkoutForm.controls).forEach((key) => {
        const control = checkoutForm.controls[key];
        control.markAsTouched();
      });
    }
  }

  bookingConfirmation() {
    const payloadData = {
      ...this.bookingDetails,
      vehicleType: 'WATERSPORTS',
      vehicleDetailsType: this.travelDetails.heading, // Scuba & Water Sports Goa
      vehicleBrand: this.travelDetails.name, // Scuba & Water Sports Combo
      vehicleName: this.travelDetails.name,
      selectedPackage: { ...this.travelDetails.selectedPackage },
    };

    this._bookingService.vehicleBooking(payloadData).subscribe({
      next: (res: any) => {
        if (res?.responseCode === 200 && res?.responseMessage === 'SUCCESS') {
          const payLink = res?.payload?.paymentLink;
          this.bookingPay(payLink);
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
