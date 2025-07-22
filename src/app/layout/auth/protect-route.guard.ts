import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProtectRouteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isValidSession = sessionStorage.getItem('packagePrice') !== null;

    if (!isValidSession) {
      this.router.navigate(['/']); // redirect to home or error
      return false;
    }
    return true;
  }
}
