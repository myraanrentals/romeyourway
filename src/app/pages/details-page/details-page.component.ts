import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common'; // Import NgClass and NgIf
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { OverviewModalComponent } from '../overview-modal/overview-modal.component';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { hotels, cancellationPolicy } from '../../constants/hotels';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [NgClass, NgIf, MatIconModule, MatExpansionModule, CommonModule, MatCardModule], // Add NgClass and NgIf here
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent {
  hotelList = hotels;
  cancellationPolicy = cancellationPolicy;
  features: any;
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private HelperService: HelperService,
  ) {}
  activeTab: string = 'mustKnow';
  selectedIdentity = 1;
  hotelDetails: any;
  ngOnInit() {
    const lastSegment = this._router.url.split('/').pop() || '';
    this.selectedIdentity = this.HelperService.getIdFromURL(lastSegment);
    this.hotelDetails = this.HelperService.getHotelByIndex(this.selectedIdentity, this.hotelList);

    this.features = this.HelperService.getFeatureList(this.hotelDetails);
  }
  topFeatures = [
    {
      icon: 'event_available',
      title: 'Instant Confirmation',
      description: 'Get your tickets mailed right away',
    },
    {
      icon: 'free_cancellation',
      title: 'Free Cancellation',
      description: 'Up to 15 days before the experience starts',
    },
    {
      icon: 'local_activity',
      title: 'Mobile Tickets',
      description: 'Get tickets delivered to your Inbox',
    },
  ];

  navigateToCheckout(id: string) {
    this._router.navigate([`/${id}/check-availability`]);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(OverviewModalComponent, {
      width: '600px',
      data: {
        overviewDesc: this.hotelDetails.overviewDesc,
        overview: this.hotelDetails.overview,
      },
    });
  }
  showTab(tabId: string) {
    this.activeTab = tabId;
  }
  openWhatsApp(phoneNumber: string) {
    const internationalNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    window.location.href = `https://wa.me/${internationalNumber}`;
  }
  navigateToPage() {
    window.location.href = '/book-dinner-cruise-in-goa';
  }
}
