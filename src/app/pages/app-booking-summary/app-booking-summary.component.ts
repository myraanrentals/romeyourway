import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-app-booking-summary',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './app-booking-summary.component.html',
  styleUrl: './app-booking-summary.component.scss'
})
export class AppBookingSummaryComponent {
  totalAmount = 550; 
  discountAmount = 950;

  constructor(private bottomSheetRef: MatBottomSheetRef<AppBookingSummaryComponent>) {}

  close() {
    this.bottomSheetRef.dismiss();
  }
}
