import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  ) {}

  ngOnInit(): void {
    const paymentId = this.route.snapshot.paramMap.get('paymentId');
    if (!paymentId) {
      this.error = 'Missing payment ID';
      this.isLoading = false;
      return;
    }

    this.http.get<{ status: string }>(`/api/payment-status/${paymentId}`).subscribe({
      next: (res) => {
        this.isLoading = false;
        switch (res.status.toLowerCase()) {
          case 'success':
            this.router.navigate(['/payment-success']);
            break;
          case 'failed':
            this.router.navigate(['/payment-failure']);
            break;
          case 'pending':
            this.router.navigate(['/payment-pending']);
            break;
          default:
            this.error = 'Unknown status';
        }
      },
      error: () => {
        this.error = 'Failed to check payment status';
        this.isLoading = false;
      },
    });
  }
}
