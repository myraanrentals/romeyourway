import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
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
import { yacth } from '@constants/yacth';
import { favChoiceListOne } from '@constants/favChoiceListOne';
import { favChoiceListTwo } from '@constants/favChoiceListTwo';
import { scubaList } from '@constants/scuba';
import { privateParties } from '@constants/privateParties';
declare var $: any; // Declare jQuery globally

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
export class HomepageComponent implements OnInit, AfterViewInit {
  // @ViewChild('heroVideo') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('carousel', { static: false }) carouselElement!: ElementRef;

  hotelList = hotels;
  favListOne = favChoiceListOne;
  favListTwo = favChoiceListTwo;
  scubaList = scubaList;
  yatchlList = yacth;
  
  allowedCruises = [

    "Swastik Dinner Cruise",
    "Nirwana Dinner Cruise",
    'Vihaan Dinner Cruise',
    'Nauti Amigo Luxury Cruise'
  ];

  allowedYatch = [
    'Manta Ray : Sail Into Unforgettable Adventures',
    'Orca : Luxury on Water',
    'Shantam Catamaran : Indulge in Oceanic Luxury',
    'Ralston-1 : Explore the Seas',
  ];




  
  get filteredHotelList() {
    return this.hotelList.filter(offer => this.allowedCruises.includes(offer.title));
  }

  get filteredYatchList() {
    return this.yatchlList.filter(offer => this.allowedYatch.includes(offer.title));
  }
  
 travelFavChoice = [
    {
      name: 'Luxury Dinner Cruise [UNLIMITED]',
      description: 'Experience luxury dining on water',
      image: '/assets/icons/01.avif',
    },
    {
      name: 'Scuba, Watersports & Island Trip Combi',
      description: 'Adventure combo with scuba and watersports',
      image: '/assets/icons/02.avif',
    },
    {
      name: 'Dudhsagar Waterfall Trip',
      description: 'Scenic trip to the famous waterfall',
      image: '/assets/icons/03.avif',
    },
    {
      name: 'Sunset & Party Cruise',
      description: 'Enjoy a sunset view with onboard party vibes',
      image: '/assets/icons/04.avif',
    },
    {
      name: 'Flyboarding',
      description: 'Thrilling flyboarding experience in Goa',
      image: '/assets/icons/05.avif',
    },
    {
      name: 'Bungee Jumping',
      description: 'Adrenaline-pumping jump from great heights',
      image: '/assets/icons/06.avif',
    },
  ]

  ScubaCombos = [
    {
      name: 'Scuba, Watersports',
      description: 'Experience luxury dining on water',
      image: '/assets/icons/01.avif',
    },
    {
      name: 'Grand Island Scuba Combo',
      description: 'Adventure combo with scuba and watersports',
      image: '/assets/icons/02.avif',
    },
    {
      name: 'Fort Island Scuba Combo',
      description: 'Scenic trip to the famous waterfall',
      image: '/assets/icons/03.avif',
    },
    {
      name: 'Amboli Ghat Scuba Combo',
      description: 'Enjoy a sunset view with onboard party vibes',
      image: '/assets/icons/04.avif',
    },
  ]

  MostPopularWatersports
 = [
    {
      name: 'Parasailing & Speed Boat Ride',
      description: 'Experience luxury dining on water',
      image: '/assets/icons/01.avif',
    },
    {
      name: '5 Watersports Combo',
      description: 'Adventure combo with scuba and watersports',
      image: '/assets/icons/02.avif',
    },
    {
      name: 'Advance Watersports Combo',
      description: 'Scenic trip to the famous waterfall',
      image: '/assets/icons/03.avif',
    },
    {
      name: 'Kayaking at Baga Beach',
      description: 'Enjoy a sunset view with onboard party vibes',
      image: '/assets/icons/04.avif',
    },
    {
      name: 'Kayaking at Baga Beach',
      description: 'Enjoy a sunset view with onboard party vibes',
      image: '/assets/icons/04.avif',
    }
  ]
  
  cardDataList = [
    {
      title: 'Famous Activities in Goa',
      places: [
        {
          name: 'Baga Beach Nightlife',
          description: 'Lively beach parties',
          image: '/assets/detailimages/NOR2.webp',
        },
        {
          name: 'Dudhsagar Waterfalls',
          description: 'Majestic jungle falls',
          image: '/assets/detailimages/DUD.webp',
        },
        {
          name: 'Spice Plantation Tour',
          description: 'Fragrant nature walk',
          image: '/assets/detailimages/DUD1.webp',
        },
      ],
    },
    {
      title: 'Top things to do in North Goa',
      places: [
        {
          name: 'Calangute Beach',
          description: 'Sun, sand, and surf',
          image: '/assets/detailimages/NOR4.webp',
        },
        {
          name: 'Fort Aguada',
          description: 'Historic sea-facing fort',
          image: '/assets/detailimages/NOR.webp',
        },
        {
          name: 'Anjuna Flea Market',
          description: 'Boho shopping paradise',
          image: '/assets/detailimages/NOR1.webp',
        },
      ],
    },
    {
      title: 'Top things to do in South Goa',
      places: [
        {
          name: 'Palolem Beach',
          description: 'Scenic crescent beach',
          image: '/assets/detailimages/SOU4.webp',
        },
        {
          name: 'Colva Beach',
          description: 'Popular sunset spot',
          image: '/assets/detailimages/NOR2.webp',
        },
        {
          name: 'Cabo de Rama Fort',
          description: 'Clifftop ocean views',
          image: '/assets/detailimages/NOR3.webp',
        },
      ],
    },
  ];

  features: any[] = [
    {
      icon: '/assets/icons/Cruise icon png.png',
      title: 'Cruises',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
      redirect: 'book-dinner-cruise-in-goa'
    },
    {
      icon: '/assets/icons/watersport.png',
      title: 'Yacht',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
      redirect: 'book-private-yachts-in-goa'
    },
    {
      icon: '/assets/icons/Scuba ic.png',
      title: 'Scuba',
      text: 'Discover Goas underwater wonders with exhilarating scuba diving! Explore vibrant reefs and exotic marine life. Perfect for beginners and pros. Dive into adventure.',
      redirect: 'book-dinner-cruise-in-goa'
    },
    {
      icon: '/assets/icons/Cruise icon png.png',
      title: 'Watersports',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
      redirect: 'book-dinner-cruise-in-goa'
    },
    {
      icon: '/assets/icons/watersport.png',
      title: 'Adventures',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
      redirect: 'book-dinner-cruise-in-goa'
    },
    {
      icon: '/assets/icons/Scuba ic.png',
      title: 'Sightseeing',
      text: 'Discover Goas underwater wonders with exhilarating scuba diving! Explore vibrant reefs and exotic marine life. Perfect for beginners and pros. Dive into adventure.',
      redirect: 'book-dinner-cruise-in-goa'
    },
    
  ];
  mobFeatures: any[] = [
    {
      icon: '/assets/icons/Cruise icon png.png',
      title: 'Cruises',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
      redirect: 'book-dinner-cruise-in-goa'
    },
    {
      icon: '/assets/icons/watersport.png',
      title: 'Yacht',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
      redirect: 'book-private-yachts-in-goa'
    },
    {
      icon: '/assets/icons/Scuba ic.png',
      title: 'Scuba',
      text: 'Discover Goas underwater wonders with exhilarating scuba diving! Explore vibrant reefs and exotic marine life. Perfect for beginners and pros. Dive into adventure.',
      redirect: 'book-watersports-and-scuba-diving-in-goa'
    },
    {
      icon: '/assets/icons/Cruise icon png.png',
      title: 'Watersports',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
      redirect: 'book-water-sports-in-goa'
    },
    {
      icon: '/assets/icons/watersport.png',
      title: 'Adventures',
      text: 'Dive into adventure with thrilling watersports in Goa! From scuba diving and jet-skiing to parasailing and kayaking, experience adrenaline-pumping fun on pristine beache.',
      redirect: 'book-adventures-in-goa'
    },
    {
      icon: '/assets/icons/Scuba ic.png',
      title: 'Sightseeing',
      text: 'Discover Goas underwater wonders with exhilarating scuba diving! Explore vibrant reefs and exotic marine life. Perfect for beginners and pros. Dive into adventure.',
      redirect: 'book-sightseeing-in-goa'
    },
  ];
  offers = [
    {
      image: '/assets/homepageImages/offerForYou2.png',
      title: '15% OFF ON KLOOK',
    },
    {
      image: '/assets/homepageImages/offerForYou1.png',
      title: 'Bundle and Save',
    },
  ];
  // privateParties = [
  //   {
  //     image: '/assets/privateBoookings/NautiAmigo.png',
  //     title: 'Nauti Amigo Luxury Cruise',
  //     description: 'Enjoy these cool staycation promotions in Goa',
  //   },
  //   {
  //     image: '/assets/privateBoookings/Raii.png',
  //     title: 'Raii Dinner Cruise',
  //     description: "Don't forget to check out these activities while you're here",
  //   },
  //   {
  //     image: '/assets/privateBoookings/Leomar.png',
  //     title: 'Leomar Dinner Cruise',
  //     description: 'Enjoy these cool staycation promotions in Goa',
  //   },
  //   {
  //     image: '/assets/privateBoookings/Calma.png',
  //     title: 'Calma Dinner Cruise',
  //     description: "Don't forget to check out these activities while you're here",
  //   },{
  //     image: '/assets/privateBoookings/fisherman.png',
  //     title: 'Fisherman Dinner Cruise',
  //     description: 'Enjoy these cool staycation promotions in Goa',
  //   },
  //   {
  //     image: '/assets/privateBoookings/Lovely.png',
  //     title: 'Lovely Dinner Cruise',
  //     description: "Don't forget to check out these activities while you're here",
  //   },{
  //     image: '/assets/privateBoookings/OmSai.png',
  //     title: 'Om Sai Dinner Cruise',
  //     description: 'Enjoy these cool staycation promotions in Goa',
  //   },{
  //     image: '/assets/privateBoookings/Vihan.png',
  //     title: 'Vihaan Dinner Cruise',
  //     description: 'Enjoy these cool staycation promotions in Goa',
  //   },
  // ];
  privateParties = privateParties;
  category: string = '';
  
  // Typing effect properties
  activeSlideIndex: number = 0;
  carouselTexts: string[] = [
    'Thrill. Dive. Sail. Repeat.',//scuba
    '3… 2… 1… JUMP INTO LEGEND',//bungee jumping
    'Private Decks & The Only Thing We Share is the View',//private yachts
    
  ];
  displayedTexts: string[] = ['', ''];
  typingSpeed: number = 100; // milliseconds per character
  typingTimeouts: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _helperService: HelperService,
  ) {}

  ngOnInit() {
    this.yatchlList = this._helperService.renderPackageData("book-private-yachts-in-goa");    
    sessionStorage.clear();
    (async () => {
      if (this._helperService.getSessionStorage('travelDetails') !== null) {
        this._helperService.deleteSessionStorage('travelDetails');
      }
      if (this._helperService.getSessionStorage('travellersDetails') !== null) {
        this._helperService.deleteSessionStorage('travellersDetails');
      }
    })();
    
    // Start typing effect for first slide
    setTimeout(() => {
      this.startTypingEffect(0);
    }, 500);
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
  ngAfterViewInit() {
    // Setup carousel event listener for typing effect
    const carouselEl = document.getElementById('carouselExampleSlidesOnly');
    if (carouselEl) {
      carouselEl.addEventListener('slide.bs.carousel', (event: any) => {
        const toIndex = event.to;
        this.activeSlideIndex = toIndex;
        this.displayedTexts[toIndex] = '';
        
        // Clear existing timeouts
        this.typingTimeouts.forEach(timeout => clearTimeout(timeout));
        this.typingTimeouts = [];
        
        // Start typing effect for new slide
        setTimeout(() => {
          this.startTypingEffect(toIndex);
        }, 300);
      });
      
      carouselEl.addEventListener('slid.bs.carousel', (event: any) => {
        // Ensure typing effect starts after slide transition completes
        const activeIndex = event.to;
        if (!this.displayedTexts[activeIndex]) {
          setTimeout(() => {
            this.startTypingEffect(activeIndex);
          }, 100);
        }
      });
    }
    
    // const v = this.videoRef.nativeElement;

    // ensure attributes are set before play
    // v.muted = true;                     // critical for autoplay
    // (v as any).playsInline = true;      // iOS Safari property
    // v.setAttribute('playsinline', '');  // attribute for good measure

    // // force play on mount
    // v.play().catch(err => {
    //   console.warn('Autoplay prevented:', err);
    // });


    $('.offers-wrappers').slick({
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
    $('#private-parties-slider').slick({
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

    $('#slick-slider, #slick-slider-yachts, #slick-slider-dinner').slick({
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 765,  
          settings: "unslick",  
        },
      ]
    });
    
    // Add padding-bottom to slick-list elements
    $('#slick-slider .slick-list, #slick-slider-yachts .slick-list, #slick-slider-dinner .slick-list').css('padding-bottom', '12px');
    

    $('#slick-slider').on('afterChange', (event: any, slick: any, currentSlide: number) => {
      // Remove the highlighted class from all slides
      $('.slick-slide').removeClass('highlighted');

      // Add the highlighted class to the center (active) slide
      const activeSlide = $(slick.$slides[currentSlide]);
      activeSlide.addClass('highlighted');
    });

    $(window).on('resize', function () {
      $('#slick-slider').slick('setPosition');
      // Reapply padding-bottom after resize
      $('#slick-slider .slick-list, #slick-slider-yachts .slick-list, #slick-slider-dinner .slick-list').css('padding-bottom', '12px');
    });
  }

  goToService(link: string) {
    const category = this.route.snapshot.paramMap.get('category');
    this.router.navigate([`/book-dinner-cruise-in-goa/details/${link}`]);
  }
  goToServiceYath(link: string) {
    const category = this.route.snapshot.paramMap.get('category');
    this.router.navigate([`/book-private-yachts-in-goa/details/${link}`]);
  }
  navigateTo(route: string) {
    console.log(route,"route");
    
    this.router.navigate([`/${route}`]);
  }
  
  navigateToPrivateParty(routingUrl: string) {
    this.router.navigate([`/private-parties/details/${routingUrl}`]);
  }
  
  startTypingEffect(slideIndex: number) {
    const fullText = this.carouselTexts[slideIndex];
    this.displayedTexts[slideIndex] = '';
    
    for (let i = 0; i <= fullText.length; i++) {
      const timeout = setTimeout(() => {
        this.displayedTexts[slideIndex] = fullText.substring(0, i);
      }, i * this.typingSpeed);
      this.typingTimeouts.push(timeout);
    }
  }
  
  getTypingText(slideIndex: number): string {
    return this.displayedTexts[slideIndex] || '';
  }
  
}
