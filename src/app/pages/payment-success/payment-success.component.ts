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
  public paymentDetails: any = {};
  orderId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const paymentStatusResponse = sessionStorage.getItem('paymentStatusResponse');
    if (!paymentStatusResponse) return;
    const { orderId } = JSON.parse(paymentStatusResponse);
    this.orderId = orderId;
  }
}
