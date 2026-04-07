import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from '../pages/terms/terms.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { RefundCancellationComponent } from '../pages/refund-cancellation/refund-cancellation.component';
import { ListingComponent } from '../pages/listing/listing.component';
import { PaymentSuccessComponent } from '../pages/payment-success/payment-success.component';
import { PaymentFailureComponent } from '../pages/payment-failure/payment-failure.component';
import { CheckoutPageComponent } from '../pages/checkout-page/checkout-page.component';
import { OrderCheckoutComponent } from '../pages/order-checkout/order-checkout.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { DetailsPageComponent } from '../pages/details-page/details-page.component';
import { ProtectRouteGuard } from './auth/protect-route.guard';
import { PaymentStatusComponent } from '../pages/payment-status/payment-status.component';
import { BookingReceiptByIdComponent } from '../pages/booking-receipt-by-id/booking-receipt-by-id.component';
import { BookingEstimateByIdComponent } from '../pages/booking-estimate-by-id/booking-estimate-by-id.component';
import { BoardingPassByIdComponent } from '../pages/boarding-pass-by-id/boarding-pass-by-id.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full' },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms-and-condition', component: TermsComponent },
      { path: 'refund-cancellation', component: RefundCancellationComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'payment-status/:paymentId', component: PaymentStatusComponent },
      {
        path: 'payment-success',
        component: PaymentSuccessComponent,
        // canActivate: [ProtectRouteGuard],
      },
      {
        path: 'payment-failure',
        component: PaymentFailureComponent,
        // canActivate: [ProtectRouteGuard],
      },
      {
        path: 'r/:bookingID',
        component: BookingReceiptByIdComponent,
      },
      {
        path: 'estimate/:bookingId',
        component: BookingEstimateByIdComponent,
      },
      {
        path: 'pass/:bookingId',
        component: BoardingPassByIdComponent,
      },

      {
        path: ':category/details/:id/check-availability',
        component: CheckoutPageComponent,
        canActivate: [ProtectRouteGuard],
      },
      {
        path: ':category/details/:id/checkout',
        component: OrderCheckoutComponent,
        canActivate: [ProtectRouteGuard],
      },
      { path: ':category/details/:id', component: DetailsPageComponent },
      { path: ':category', component: ListingComponent },
      { path: ':category/enquire', component: ListingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
