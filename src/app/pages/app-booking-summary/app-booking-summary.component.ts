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

  constructor(
    private bottomSheetRef: MatBottomSheetRef<AppBookingSummaryComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  ) {
    this.totalAmount = data.totalAmount;
    this.discountAmount = data.discountAmount;
  }
  ngOnInit(): void {
    const data = sessionStorage.getItem('checkoutSession');
    if (data) {
      const parsedData = JSON.parse(data);
      this.bookingDetails = parsedData?.travellers;

      console.log({ test: this.bookingDetails });
    } else {
      this.bookingDetails = null;
    }
  }
  close() {
    this.bottomSheetRef.dismiss();
  }
}
