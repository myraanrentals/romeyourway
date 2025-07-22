import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { VideoWrapperComponent } from './video-wrapper/video-wrapper.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '@services/helper.service';
import { MatCardModule } from '@angular/material/card';
import { FaqComponent } from '../faq/faq.component';
import { hotels } from '../../constants/hotels';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatCardModule,
    BannerComponent,
    ExperienceComponent,
    VideoWrapperComponent,
    FaqComponent,
  ],
  providers: [HelperService],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  hotelList = hotels;
  navigateToPage() {
    window.location.href = '/book-dinner-cruise-in-goa';
  }

  cardDataList = [
    {
      title: 'Famous Activities in Goa',
      places: [
        {
          name: 'Baga Beach Nightlife',
          description: 'Lively beach parties',
          image: '/assets/icons/01.avif',
        },
        {
          name: 'Dudhsagar Waterfalls',
          description: 'Majestic jungle falls',
          image: '/assets/icons/02.avif',
        },
        {
          name: 'Spice Plantation Tour',
          description: 'Fragrant nature walk',
          image: '/assets/icons/03.avif',
        },
      ],
    },
    {
      title: 'Top things to do in North Goa',
      places: [
        {
          name: 'Calangute Beach',
          description: 'Sun, sand, and surf',
          image: '/assets/icons/04.avif',
        },
        {
          name: 'Fort Aguada',
          description: 'Historic sea-facing fort',
          image: '/assets/icons/05.avif',
        },
        {
          name: 'Anjuna Flea Market',
          description: 'Boho shopping paradise',
          image: '/assets/icons/06.avif',
        },
      ],
    },
    {
      title: 'Top things to do in South Goa',
      places: [
        {
          name: 'Palolem Beach',
          description: 'Scenic crescent beach',
          image: '/assets/icons/07.avif',
        },
        {
          name: 'Colva Beach',
          description: 'Popular sunset spot',
          image: '/assets/icons/08.avif',
        },
        {
          name: 'Cabo de Rama Fort',
          description: 'Clifftop ocean views',
          image: '/assets/icons/09.avif',
        },
      ],
    },
  ];

  features: any[] = [
    {
      icon: '/assets/icons/Cruise icon png.png',
      title: 'Cruise',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
    },
    {
      icon: '/assets/icons/watersport.png',
      title: 'Sports',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
    },
    {
      icon: '/assets/icons/Adventure icon.png',
      title: 'Adventures',
      text: 'Unleash your inner adventurer in Goa! From bungee jumping and Dudhsagar trips to paramotoring and zip-lining, experience thrilling escapades amidst nature.',
    },
    {
      icon: '/assets/icons/Scuba ic.png',
      title: 'Scuba',
      text: 'Discover Goas underwater wonders with exhilarating scuba diving! Explore vibrant reefs and exotic marine life. Perfect for beginners and pros. Dive into adventure.',
    },
  ];
  mobFeatures: any[] = [
    {
      icon: '/assets/icons/Cruise icon png.png',
      title: 'Cruise',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
    },
    {
      icon: '/assets/icons/watersport.png',
      title: 'Yacht',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
    },
    {
      icon: '/assets/icons/Scuba ic.png',
      title: 'Scuba',
      text: 'Discover Goas underwater wonders with exhilarating scuba diving! Explore vibrant reefs and exotic marine life. Perfect for beginners and pros. Dive into adventure.',
    },
  ];
  offers = [
    {
      image: '/assets/homepageImages/offerForYou1.png',
      title: 'Colors of Wanderlust',
    },
    {
      image: '/assets/homepageImages/offerForYou2.png',
      title: '15% OFF ON KLOOK',
    },
    {
      image: '/assets/homepageImages/offerForYou1.png',
      title: 'Bundle and Save',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _helperService: HelperService,
  ) {}

  ngOnInit() {
    sessionStorage.clear();
    (async () => {
      if (this._helperService.getSessionStorage('travelDetails') !== null) {
        this._helperService.deleteSessionStorage('travelDetails');
      }
      if (this._helperService.getSessionStorage('travellersDetails') !== null) {
        this._helperService.deleteSessionStorage('travellersDetails');
      }
    })();
  }

  callPhoneNumber(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`;
  }

  openWhatsApp(phoneNumber: string) {
    const internationalNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    window.location.href = `https://wa.me/${internationalNumber}`;
  }

  goToDetailedPage(hotelDetails: any, offer: any) {
    let travelDetails = {
      ...this._helperService.getSessionStorage('travelDetails'),
      ...hotelDetails,
      heading: offer.heading,
      description: offer.description,
    };
    this._helperService.setSessionStorage('travelDetails', travelDetails);
    this.router.navigate([hotelDetails.pageUrl], { relativeTo: this.route });
  }

  goToService(link: string) {
    this.router.navigate([link], { relativeTo: this.route });
  }
}
