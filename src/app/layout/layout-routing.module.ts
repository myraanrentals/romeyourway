import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { BookingSelectionComponent } from '../pages/booking-selection/booking-selection.component';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
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

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full' },
      { path: 'book-cruise-in-goa', component: DetailsPageComponent },
      {
        path: 'book-premium-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      {
        path: 'book-family-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      {
        path: 'book-luxury-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      { path: 'book-sunset-cruise-in-goa', component: DetailsPageComponent },
      { path: 'book-party-cruise-in-goa', component: DetailsPageComponent },
      {
        path: 'book-nautiamigo-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      {
        path: 'book-paradise-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      {
        path: 'book-swastik-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      {
        path: 'book-vihaan-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      {
        path: 'book-ohana-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      {
        path: 'book-azulbarco-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      {
        path: 'book-aarushi-dinner-cruise-in-goa',
        component: DetailsPageComponent,
      },
      { path: 'book-river-cruise-in-goa', component: DetailsPageComponent },
      { path: 'lunch-cruise-in-goa', component: DetailsPageComponent },
      { path: 'adventure-boat-party-in-goa', component: DetailsPageComponent },
      { path: 'dolphin-sightseeing-in-goa', component: DetailsPageComponent }, // Fixed Typo
      { path: 'goa-adventure-offers', component: ListingComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'book-dinner-cruise-in-goa', component: ListingComponent },
      { path: 'private-yachts-in-goa', component: ListingComponent },
      { path: 'best-dinner-cruise-in-goa', component: ListingComponent },
      { path: 'book-personal-goa', component: ListingComponent },
      { path: ':id/check-availability', component: CheckoutPageComponent },
      { path: ':id/checkout', component: OrderCheckoutComponent },
      { path: 'booking', component: BookingSelectionComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms-and-condition', component: TermsComponent },
      { path: 'refund-cancellation', component: RefundCancellationComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'payment-success', component: PaymentSuccessComponent },
      { path: 'payment-failure', component: PaymentFailureComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
