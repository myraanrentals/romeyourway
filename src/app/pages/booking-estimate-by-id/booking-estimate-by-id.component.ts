import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookingService } from '@services/booking.service';
import { BookingEstimateDocumentService } from '@services/booking-estimate-document.service';

type LoadState = 'loading' | 'error' | 'done';

@Component({
  selector: 'app-booking-estimate-by-id',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './booking-estimate-by-id.component.html',
  styleUrl: './booking-estimate-by-id.component.scss',
})
export class BookingEstimateByIdComponent implements OnInit {
  loadState: LoadState = 'loading';

  constructor(
    private route: ActivatedRoute,
    private _bookingService: BookingService,
    private _estimateDoc: BookingEstimateDocumentService,
  ) {}

  ngOnInit(): void {
    const bookingId = this.route.snapshot.paramMap.get('bookingId');
    if (!bookingId) {
      this.loadState = 'error';
      return;
    }
    this._bookingService.getBookingDetails(bookingId).subscribe({
      next: (res) => {
        const row = res?.listPayload?.[0];
        if (!row) {
          this.loadState = 'error';
          return;
        }
        void this._estimateDoc.generateEstimatePdf(row).then((ok) => {
          this.loadState = ok ? 'done' : 'error';
        });
      },
      error: () => {
        this.loadState = 'error';
      },
    });
  }
}
