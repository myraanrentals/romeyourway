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
declare var $: any; // Declare jQuery globally

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
  isPrivateParty: boolean = false;
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
    if (category === 'private-parties') {
      this.isPrivateParty = true;
    }
    const routeId = this.route.snapshot.paramMap.get('id');
    if (!routeId) return;
    this.hotelList = this.HelperService.renderPackageData(category);
    this.hotelDetails = this.HelperService.getHotelByID(routeId, this.hotelList);

    const hotelPackage = {
      adultPrice: this.hotelDetails.transport[0].adultPrice,
      kidPrice: this.hotelDetails.transport[0].kidPrice,
    };

    sessionStorage.setItem('packagePrice', JSON.stringify(hotelPackage));
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
      description: 'Up to 48 hours before the experience starts',
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

  requestAssistance() {
    const phoneNumber = '+917715959917';
    const message = `Hi, I'm interested in ${this.hotelDetails?.title || 'this private party'}. Can you please provide more details?`;
    const internationalNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${internationalNumber}?text=${encodedMessage}`;
  }

  requestCallback() {
    window.location.href = 'tel:+917715959917';
  }
  ngAfterViewInit() {
    $('.banner-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      customPaging: function() {
        return '<span class="slick-line"></span>';
      },
      centerMode: false,
      infinite: false,
      draggable: true, 
      swipe: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
}
