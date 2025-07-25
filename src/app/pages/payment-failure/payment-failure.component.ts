import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-failure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-failure.component.html',
  styleUrl: './payment-failure.component.scss',
})
export class PaymentFailureComponent implements OnInit {
  public failureDetails: {
    orderId?: string;
    name?: string;
    mobileNo?: string;
    bookingId?: string;
  } = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    const paymentStatusResponse = sessionStorage.getItem('paymentStatusResponse');
    const paymentResponse = sessionStorage.getItem('paymentResponse');

    if (!(paymentStatusResponse && paymentResponse)) return;
    try {
      const data = JSON.parse(paymentStatusResponse);
      this.failureDetails = {
        orderId: data?.orderId,
        name: data?.metaInfo?.udf1,
        mobileNo: data?.metaInfo?.udf2,
        bookingId: paymentResponse,
      };
    } catch (error) {
      console.error('Invalid payment response:', error);
    }
  }
}
