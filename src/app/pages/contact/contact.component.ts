import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  email: string = 'sales@romeyourway.com';
  isSuccess = false;

  success() {
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 5000);
  }
}
