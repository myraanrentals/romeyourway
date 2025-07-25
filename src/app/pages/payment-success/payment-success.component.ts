import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss',
})
export class PaymentSuccessComponent implements OnInit {
  public paymentDetails: {
    transactionId?: string;
    paymentMode?: string;
    name?: string;
    mobileNo?: string;
    orderId?: string;
    bookingId?: string;
  } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const paymentStatusResponse = sessionStorage.getItem('paymentStatusResponse');
    const paymentResponse = sessionStorage.getItem('paymentResponse');
    if (!(paymentStatusResponse && paymentResponse)) return;

    try {
      const data = JSON.parse(paymentStatusResponse);
      const orderId = data?.orderId;
      const paymentDetail = data?.paymentDetails?.[0];
      const metaInfo = data?.metaInfo;

      this.paymentDetails = {
        transactionId: paymentDetail?.transactionId,
        paymentMode: paymentDetail?.paymentMode,
        name: metaInfo?.udf1,
        mobileNo: metaInfo?.udf2,
        orderId: orderId,
        bookingId: paymentResponse,
      };
    } catch (error) {
      console.error('Error parsing payment status response:', error);
    }
  }
}
