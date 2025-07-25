import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProtectRouteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isPaymentRoute = state.url.includes('payment-success');

    if (isPaymentRoute) {
      if (!this.isPaymentSuccessFull()) {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      const isValidSession = sessionStorage.getItem('packagePrice') !== null;
      if (!isValidSession) {
        this.router.navigate(['/']);
        return false;
      }
    }

    return true;
  }

  private isPaymentSuccessFull(): boolean {
    const paymentStatusResponse = sessionStorage.getItem('paymentStatusResponse');
    if (!paymentStatusResponse) return false;
    try {
      const parsedData = JSON.parse(paymentStatusResponse);
      return parsedData.orderId && parsedData.state === 'COMPLETED';
    } catch (e) {
      return false;
    }
  }
}
