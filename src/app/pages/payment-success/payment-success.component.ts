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
  getRazorPayId: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log("{first}")
    this.route.queryParamMap.subscribe(params => {
      params.keys.forEach(key => {
        this.paymentDetails[key] = params.get(key);
      });
      if (this.paymentDetails?.razorpay_payment_link_status !== "paid") {
        this.router.navigate(['/book-dinner-cruise-in-goa']);
      }
    });
  }
  // ngOnInit() {
  //   const sessionData = sessionStorage.getItem('paymentResponse');
  //   if (sessionData) {
  //     this.getRazorPayId = JSON.parse(sessionData);
  //     sessionStorage.removeItem('paymentResponse');
  //   } else {
  //     this.router.navigate(['/payment-failure']);
  //   }
  // }  
}
