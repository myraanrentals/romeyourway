import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookingService } from '@services/booking.service';
import { BoardingPassDocumentService } from '@services/boarding-pass-document.service';

type LoadState = 'loading' | 'error' | 'done';

@Component({
  selector: 'app-boarding-pass-by-id',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './boarding-pass-by-id.component.html',
  styleUrl: './boarding-pass-by-id.component.scss',
})
export class BoardingPassByIdComponent implements OnInit {
  loadState: LoadState = 'loading';

  constructor(
    private route: ActivatedRoute,
    private _bookingService: BookingService,
    private _boardingPassDoc: BoardingPassDocumentService,
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
        void this._boardingPassDoc.generateBoardingPassPdf(row).then((ok) => {
          this.loadState = ok ? 'done' : 'error';
        });
      },
      error: () => {
        this.loadState = 'error';
      },
    });
  }
}
