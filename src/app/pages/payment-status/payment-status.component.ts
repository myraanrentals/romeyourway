import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '@services/booking.service';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss'],
})
export class PaymentStatusComponent implements OnInit {
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private _bookingService: BookingService,
  ) {}

  ngOnInit(): void {
    const paymentId = this.route.snapshot.paramMap.get('paymentId');
    const previousBookingID = sessionStorage.getItem('paymentResponse');
    console.log({ paymentId, previousBookingID });
    if (!paymentId || !previousBookingID || previousBookingID !== paymentId) {
      this.error = 'Missing payment ID';
      this.isLoading = false;
      return;
    }

    this._bookingService.paymentStatus(paymentId).subscribe({
      next: (res) => {
        if (res?.responseCode === 200 && res?.responseMessage === 'SUCCESS') {
          this.isLoading = false;
          switch (res.payload.state.toLowerCase()) {
            case 'completed':
              sessionStorage.setItem('paymentStatusResponse', JSON.stringify(res?.payload));

              this.router.navigate(['/payment-success']);
              break;
            case 'failed':
              sessionStorage.setItem('paymentStatusResponse', JSON.stringify(res?.payload));
              this.router.navigate(['/payment-failure']);
              break;
            case 'pending':
              this.error = 'Payment is still pending ';
              this.router.navigate([`/payment-status/${previousBookingID}`]);
              break;
            default:
              this.error = 'Unknown status';
          }
        }
      },
      error: () => {
        this.error = 'Failed to check payment status';
        this.isLoading = false;
      },
    });
  }
}
