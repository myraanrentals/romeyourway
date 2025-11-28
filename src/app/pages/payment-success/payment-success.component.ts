import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare global {
  interface Window {
    dataLayer: any[];
  }
}
@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss',
})
export class PaymentSuccessComponent implements OnInit, AfterViewInit {
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
  public amount?: string;
  ngOnInit(): void {
    const paymentStatusResponse = sessionStorage.getItem('paymentStatusResponse');
    const checkoutSession = sessionStorage.getItem('checkoutSession');
    const amount = checkoutSession && JSON?.parse(checkoutSession)?.amountWithGST;
    this.amount = amount;

    const paymentResponse = sessionStorage.getItem('paymentResponse');
    if (!(paymentStatusResponse && paymentResponse)) return;

    try {
      const data = JSON.parse(paymentStatusResponse);
      const orderId = data?.bookingId;
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
  ngAfterViewInit(): void {
    // Push to GA/GTM ONLY after details are set.
    // If data can arrive later (async), call this again after you set paymentDetails.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      value: typeof this.amount === 'number' ? this.amount : 0, // GA4 expects number
      transaction_id: this.paymentDetails.orderId ?? this.paymentDetails.transactionId ?? '',
      currency: '₹',
    });
  }
}
