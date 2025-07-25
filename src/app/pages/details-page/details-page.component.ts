import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common'; // Import NgClass and NgIf
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { OverviewModalComponent } from '../overview-modal/overview-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { hotels, cancellationPolicy } from '../../constants/hotels';
import { HelperService } from '../../services/helper.service';
import { FeatureSectionComponent } from '../shared/components/feature-section/feature-section.component';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    MatIconModule,
    MatExpansionModule,
    CommonModule,
    MatCardModule,
    FeatureSectionComponent,
  ], // Add NgClass and NgIf here
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent {
  hotelList = hotels;
  cancellationPolicy = cancellationPolicy;
  features: any;
  category: string = '';

  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private route: ActivatedRoute,
    private HelperService: HelperService,
  ) {}
  activeTab: string = 'mustKnow';
  selectedIdentity = 1;
  hotelDetails: any;
  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    if (!category) return;
    this.category = category;
    const routeId = this.route.snapshot.paramMap.get('id');
    if (!routeId) return;
    this.hotelDetails = this.HelperService.getHotelByID(routeId, this.hotelList);

    const hotelPackage = {
      adultPrice: this.hotelDetails.transport[0].discountedamt,
      kidPrice: this.hotelDetails.transport[0].kidAmt,
    };

    sessionStorage.setItem('packagePrice', JSON.stringify(hotelPackage));
    this.features = this.HelperService.getFeatureList(this.hotelDetails);
    this.hotelList = this.HelperService.renderPackageData(category);
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
    const routeId = this.route.snapshot.paramMap.get('id');
    this._router.navigate([`/${this.category}/details/${routeId}/check-availability`]);
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
}
