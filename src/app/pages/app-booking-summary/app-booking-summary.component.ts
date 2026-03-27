import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-app-booking-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-booking-summary.component.html',
  styleUrl: './app-booking-summary.component.scss',
})
export class AppBookingSummaryComponent {
  totalAmount: number;
  discountAmount: number;
  bookingDetails: any;
  selectedTransport: any;
  gstRate = 0.18;
  gstAmount = 0;
  finalAmount = 0;
  discountedAmount = 0;
  paymentType: string = '';
  needGstInvoice: boolean = false;
  finalPayableAmount: number = 0;
  amountWithGst: number = 0;
  subtotal: number = 0;
  constructor(
    private bottomSheetRef: MatBottomSheetRef<AppBookingSummaryComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  ) {
    this.totalAmount = data.totalAmount;
    this.discountAmount = data.discountAmount;
    this.discountedAmount = this.totalAmount - this.discountAmount;
    this.gstAmount = +(this.totalAmount * this.gstRate).toFixed(2);
    this.finalAmount = +(this.totalAmount + this.gstAmount).toFixed(2);
    this.needGstInvoice = data.needGstInvoice;
    this.subtotal = data.subtotal;
    this.finalPayableAmount = this.needGstInvoice ? this.subtotal : this.discountedAmount;
  }
  ngOnInit(): void {
    const data = sessionStorage.getItem('checkoutSession');
    if (data) {
      const parsedData = JSON.parse(data);
      this.bookingDetails = parsedData?.travellers;
      this.selectedTransport = parsedData?.selectedTransport;
      this.paymentType = parsedData.paymentType;

    } else {
      this.bookingDetails = null;
    }
  }
  close() {
    this.bottomSheetRef.dismiss();
  }
  get filteredBookingDetails() {
    return this.bookingDetails.filter(
      (item: { displayLabel: string }) => item.displayLabel !== 'Full Capacity',
    );
  }
}
