import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'app-detailed',
  standalone: true,
  imports: [],
  templateUrl: './detailed.component.html',
  styleUrl: './detailed.component.scss',
})
export class DetailedComponent {
  private modalService = inject(NgbModal);
  closeResult = '';
  mobFlag: boolean = false;
  images: any = '';
  selectedIdentity = 1;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _helperService: HelperService,
  ) {
    let winWidth = window.innerWidth;
    if (winWidth < 768) {
      this.mobFlag = true;
    } else {
      this.mobFlag = false;
    }
  }

  ngOnInit() {
    const currentUrl = this._router.url;
    const urlSegments = currentUrl.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];
    console.log('Book cruise URL:', lastSegment);
    this.getIdFromURL(lastSegment);
  }

  ngAfterViewInit() {
    if (this.mobFlag) {
      this.images = ['1-mob.avif', '1-mob.avif', '1-mob.avif'];
    } else {
      this.images = ['card.avif', 'card.avif', 'card.avif'];
    }
  }

  @ViewChild('scrollableDiv') scrollableDiv!: ElementRef;
  @ViewChild('scrollableNav') scrollableNav!: ElementRef;

  scrollToElement(elementId: any) {
    const element: any = document.getElementById(elementId);
    this.scrollableDiv.nativeElement.scrollTo({
      top: element.offsetTop - 120,
      behavior: 'smooth',
    });
    $('#modal-nav').children('a').removeClass('active');
    $('#' + elementId + '-anchor').addClass('active');
    let activeId: any = $('#modal-nav .active');
    let modalNav: any = $('#modal-nav');
    if (activeId[0].offsetLeft > 250) {
      modalNav[0].scrollLeft = activeId[0].offsetLeft - 50;
    }
  }

  onScroll(event: any) {
    // const highlight:any = document.getElementById('highlight');
    // const inclusions:any = document.getElementById('inclusions');
    // const needtoknow:any = document.getElementById('needtoknow');
    // const policy:any = document.getElementById('policy');
    // const reviews:any = document.getElementById('reviews');
  }

  openWhatsApp(phoneNumber: string) {
    const internationalNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    window.location.href = `https://wa.me/${internationalNumber}`;
  }

  callPhoneNumber(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`;
  }

  getIdFromURL(value: string): void {
    switch (value) {
      case 'lunch-cruise-in-goa':
        this.selectedIdentity = 1;
        break;
      case 'adventure-boat-party-in-goa':
        this.selectedIdentity = 2;
        break;
      case 'dolphin-seightseeing-in-goa':
        this.selectedIdentity = 3;
        break;
      case 'book-cruise-in-goa':
        this.selectedIdentity = 4;
        break;
      case 'book-premium-dinner-cruise-in-goa':
        this.selectedIdentity = 5;
        break;
      case 'book-family-dinner-cruise-in-goa':
        this.selectedIdentity = 6;
        break;
      case 'book-luxury-dinner-cruise-in-goa':
        this.selectedIdentity = 7;
        break;
      case 'book-sunset-cruise-in-goa':
        this.selectedIdentity = 8;
        break;
      case 'book-party-cruise-in-goa':
        this.selectedIdentity = 9;
        break;
      case 'book-nautiamigo-dinner-cruise-in-goa':
        this.selectedIdentity = 10;
        break;
      case 'book-paradise-dinner-cruise-in-goa':
        this.selectedIdentity = 11;
        break;
      case 'book-swastik-dinner-cruise-in-goa':
        this.selectedIdentity = 12;
        break;
      case 'book-vihaan-dinner-cruise-in-goa':
        this.selectedIdentity = 13;
        break;
      case 'book-ohana-dinner-cruise-in-goa':
        this.selectedIdentity = 14;
        break;
      case 'book-azulbarco-dinner-cruise-in-goa':
        this.selectedIdentity = 15;
        break;
      case 'book-aarushi-dinner-cruise-in-goa':
        this.selectedIdentity = 16;
        break;
      case 'book-river-cruise-in-goa':
        this.selectedIdentity = 17;
        break;
      default:
        this.selectedIdentity = 1;
        break;
    }
  }

  hotels: any[] = [
    {
      cruiseId: 1,
      headingOne: 'Lunch Cruise in Goa',
      HeadingThree: 'Lunch Cruise in Goa',
      ratings: '4.8',
      rated: '3867',
      amount: '1499',
      discountedamount: '999',
      imageUrl: '/assets/dinnercruise/DC1.svg',
      detailedPageImage: '/assets/images/DC1.png',
      about: [
        {
          about1:
            'Enjoy 3-Hours with friends, family, or loved ones, all while enjoying the vibrant sights and sounds of Goa',
        },
        {
          about1:
            'Enjoy breathtaking views, live entertainment, and gourmet dining on the Mandovi River.',
        },
        {
          about1:
            'Savor a selection of gourmet dishes as you glide over glistening waters for a delightful experience.',
        },
        {
          about1:
            'Enjoy fun-filled games onboard and a mesmerizing magic show with astonishing tricks.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1500',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 2,
      headingOne: 'Adventure Boat Party with water sports',
      HeadingThree: 'Adventure Boat Party with water sports',
      ratings: '4.8',
      rated: '3867',
      amount: '1499',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC18.svg',
      detailedPageImage: '/assets/images/DC2.png',
      about: [
        {
          about1:
            'Enjoy 3-Hours with friends, family, or loved ones, all while enjoying the vibrant sights and sounds of Goa',
        },
        {
          about1:
            'Enjoy breathtaking views, live entertainment, and gourmet dining on the Mandovi River.',
        },
        {
          about1:
            'Savor a selection of gourmet dishes as you glide over glistening waters for a delightful experience.',
        },
        {
          about1:
            'Enjoy fun-filled games onboard and a mesmerizing magic show with astonishing tricks.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1500',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 3,
      headingOne: 'Dolphin Seightseeing in Goa',
      HeadingThree: 'Dolphin Seightseeing in Goa',
      ratings: '4.8',
      rated: '3867',
      amount: '699',
      discountedamount: '399',
      imageUrl: '/assets/dinnercruise/DC3.svg',
      detailedPageImage: '/assets/images/DC3.png',
      about: [
        {
          about1:
            'Enjoy 3-Hours with friends, family, or loved ones, all while enjoying the vibrant sights and sounds of Goa',
        },
        {
          about1:
            'Enjoy breathtaking views, live entertainment, and gourmet dining on the Mandovi River.',
        },
        {
          about1:
            'Savor a selection of gourmet dishes as you glide over glistening waters for a delightful experience.',
        },
        {
          about1:
            'Enjoy fun-filled games onboard and a mesmerizing magic show with astonishing tricks.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1500',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 4,
      headingOne: 'Dinner Cruise in Goa',
      HeadingThree: 'Dinner Cruise in Goa',
      ratings: '4.8',
      rated: '3867',
      amount: '1199',
      discountedamount: '999',
      imageUrl: '/assets/dinnercruise/DC4.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Enjoy 3-Hours with friends, family, or loved ones, all while enjoying the vibrant sights and sounds of Goa',
        },
        {
          about1:
            'Enjoy breathtaking views, live entertainment, and gourmet dining on the Mandovi River.',
        },
        {
          about1:
            'Savor a selection of gourmet dishes as you glide over glistening waters for a delightful experience.',
        },
        {
          about1:
            'Enjoy fun-filled games onboard and a mesmerizing magic show with astonishing tricks.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1500',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 5,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Premium Dinner Cruise in Goa',
      ratings: '4.9',
      rated: '5877',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC5.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            '3-hour journey filled with music, dancing, delectable cuisine, and exhilarating entertainment',
        },
        {
          about1:
            'Unlimited Buffet Dinner – Enjoy an array of vegetarian and non-vegetarian dishes',
        },
        {
          about1:
            'Expect engaging games and entertainment for all ages, ensuring every family member enjoys the trip.',
        },
        {
          about1: 'Enjoy the incredible views, especially of the iconic Atal Setu Panjim Bridge',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 6,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Family Dinner Cruise in Goa',
      ratings: '4.9',
      rated: '6532',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC6.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1: 'Set sail on the serene Mandovi River aboard a beautifully crafted cruise boat.',
        },
        {
          about1:
            'Relish an extensive buffet featuring local Goan delicacies and live Goan folk performances.',
        },
        {
          about1:
            'Savor a selection of gourmet dishes as you glide over glistening waters for a delightful experience.',
        },
        {
          about1:
            'Be entertained by vibrant cultural performances, including folk dances and live music.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 7,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Luxury Dinner Cruise',
      ratings: '4.7',
      rated: '3980',
      amount: '2499',
      discountedamount: '1899',
      imageUrl: '/assets/dinnercruise/DC7.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1: 'An Exclusive 3-Hour Party Experience with AC-deck & sofa seating.',
        },
        {
          about1:
            'Unlimited Buffet Dinner – Enjoy an array of vegetarian and non-vegetarian dishes',
        },
        {
          about1:
            'Bollywood Dance Performances, Dance Rounds & Fun Games & Fire Show Extravaganza.',
        },
        {
          about1:
            'Air-Conditioned Lower Deck with spacious sofa seating & Open-Air Upper Deck for breathtaking views of Goa’s skyline.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 8,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Sunset Cruise in Goa',
      ratings: '4.7',
      rated: '3980',
      amount: '799',
      discountedamount: '499',
      imageUrl: '/assets/dinnercruise/DC8.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Sail past iconic landmarks like Fort Aguada, Governors Palace, and Miramar Beach.',
        },
        {
          about1: 'Enjoy vibrant Goan dance performances by local artists in traditional attire.',
        },
        {
          about1: 'Groove to live DJ music on a double-deck cruiser with a lively atmosphere.',
        },
        {
          about1: 'Relax with family and soak in stunning sunset views over the Mandovi River.',
        },
      ],
      features: [
        {
          name: 'Duration 1 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 9,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Party Cruise in Goa',
      ratings: '4.6',
      rated: '37620',
      amount: '799',
      discountedamount: '499',
      imageUrl: '/assets/dinnercruise/DC9.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Party cruise in Goa offers a unique blend of cultural entertainment, scenic beauty, and vibrant nightlife.',
        },
        {
          about1:
            'Experience traditional Goan folk dances, such as the Dekhni and Fugdi, performed by local artists on board.',
        },
        {
          about1:
            'Enjoy live bands or DJ music that set the perfect ambiance, allowing guests to dance and revel in the Goan spirit.',
        },
        {
          about1:
            'Sail along the Mandovi River, witnessing Panjim illuminated riverfront, the historic Adil Shah Palace, and the twinkling lights of Miramar.',
        },
      ],
      features: [
        {
          name: 'Duration 1 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 10,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Nauti Amigo Dinner Cruise in Goa',
      ratings: '4.9',
      rated: '15480',
      amount: '2499',
      discountedamount: '1899',
      imageUrl: '/assets/dinnercruise/DC10.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Triple-Deck Luxury Vessel: Nauti Amigo is a five-star luxury cruise spread across three decks, each designed to provide a unique experience.',
        },
        {
          about1:
            'Exclusive VVIP lounge with sofa seating, a bar counter, advanced lighting and sound systems, a DJ booth, and separate restrooms for men and women, ensuring utmost comfort and exclusivity.',
        },
        {
          about1:
            'Gourmet Dining Experience: Guests can indulge in a sumptuous buffet dinner accompanied by two complimentary drinks, with options for both alcoholic and non-alcoholic beverages.',
        },
        {
          about1:
            'The cruise offers vibrant entertainment, including Goan dance performances and DJ music, creating a lively atmosphere throughout the journey.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 11,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Paradise Dinner Cruise in Goa',
      ratings: '4.9',
      rated: '15680',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC11.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Embarking on the Paradise Dinner Cruise in Goa offers a blend of cultural immersion, entertainment, and scenic beauty.',
        },
        {
          about1:
            'Enjoy the comfort of reserved tables, ensuring a personalized dining experience as you cruise along the Mandovi River.',
        },
        {
          about1:
            'Be captivated by authentic Goan folk dances and traditional Portuguese performances, providing a glimpse into the regions rich cultural heritage.',
        },
        {
          about1:
            'Dance the night away to a mix of Bollywood and international hits spun by a live DJ, with a dedicated dance floor to showcase your moves.',
        },
      ],
      features: [
        {
          name: 'Duration 2 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 12,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Swastik Dinner Cruise in Goa',
      ratings: '4.9',
      rated: '15480',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC12.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'A Floating Wonderland on the Mandovi and with three expansive decks, Swastik Cruise offers a seamless combination of elegance and fun.',
        },
        {
          about1:
            'Culinary Delights with Stunning Views. Indulge in a lavish buffet spread featuring both vegetarian and non-vegetarian delicacies.',
        },
        {
          about1:
            'Entertainment for Everyone from foot-tapping Bollywood beats to live performances, Swastik Cruise keeps the energy alive with a variety of entertainment.',
        },
        {
          about1:
            'Three Hours of Bliss, unlike quick excursions, Swastik Cruise offers a generous three-hour journey that lets you truly relax and enjoy the experience.',
        },
      ],
      features: [
        {
          name: 'Duration 2 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 13,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Vihaan Dinner Cruise in Goa',
      ratings: '4.3',
      rated: '1290',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC13.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Step into a spacious, three-deck cruise designed to provide breathtaking views, ample seating, and an unforgettable ambiance.',
        },
        {
          about1:
            'Immerse yourself in Goa’s rich heritage with live Goan folk and Portuguese dance performances. These vibrant displays of culture create an enriching experience for every guest.',
        },
        {
          about1:
            'The cruise offers a buffet dinner with both vegetarian and non-vegetarian options, complemented by plated snacks and two complimentary drinks, ensuring a delightful culinary journey.',
        },
        {
          about1:
            'The energy aboard Vihaan Cruise is unmatched, with a live DJ playing Bollywood hits and international chart-toppers.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 14,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Ohana Dinner Cruise in Goa',
      ratings: '4.3',
      rated: '1290',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC14.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Exclusive Dinner Cruise Experience: Ohana dinner cruise is a perfect blend of luxury and culinary delight.',
        },
        {
          about1:
            'Enjoy live Goan folk dance performances, Bollywood DJ music, and fun games with spot prizes, ensuring an engaging and lively atmosphere on board.',
        },
        {
          about1:
            'The cruise offers picturesque views of Goas landmarks along the Mandovi River, allowing guests to appreciate the regions beauty from a unique vantage point.',
        },
        {
          about1:
            'Treat yourself to a buffet featuring a mix of Goan delicacies and international flavors, catering to both vegetarian and non-vegetarian preferences.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 15,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Azul Barco Dinner Cruise in Goa',
      ratings: '4.3',
      rated: '1290',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC15.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Set sail on the Azul Barco Dinner Cruise, where fine dining meets captivating views and vibrant entertainment.',
        },
        {
          about1:
            'Cruise along the serene Mandovi River and soak in panoramic views of Goas illuminated landmarks, the shimmering waters, and the enchanting night sky.',
        },
        {
          about1:
            'Indulge in a sumptuous buffet that blends Goan delicacies with international flavors. With vegetarian and non-vegetarian options.',
        },
        {
          about1:
            'Azul Barco caters to all age groups, making it an ideal choice for families. Kids and adults alike will love the engaging activities and warm, welcoming environment.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 16,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Aarushi Dinner Cruise in Goa',
      ratings: '4.3',
      rated: '1290',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC16.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Experience an unforgettable evening of elegance, culture, and scenic beauty aboard the Arushi Dinner Cruise.',
        },
        {
          about1:
            'Enjoy the spacious triple-deck design of Arushi Cruise, complete with air-conditioned comfort on all levels.',
        },
        {
          about1:
            'Immerse yourself in Goa’s rich heritage with live Goan folk dances, Portuguese performances, and a Bollywood DJ.',
        },
        {
          about1:
            'Savor a five-star buffet featuring a wide selection of vegetarian and non-vegetarian dishes, complemented by two complimentary drinks.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 17,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'River Party Cruise in Goa',
      ratings: '4.7',
      rated: '15890',
      amount: '699',
      discountedamount: '499',
      imageUrl: '/assets/dinnercruise/DC17.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Step aboard the River Party Cruise Goa for an electrifying evening filled with music, dance, and spectacular views.',
        },
        {
          about1:
            'Get the party started with a blend of live DJ sets and traditional Goan folk dance performances.',
        },
        {
          about1:
            'Cruise along the Mandovi River as the shimmering lights of Panaji city, the iconic Atal Setu Bridge, and the glowing river casinos create a dazzling backdrop for your evening.',
        },
        {
          about1:
            'Let loose on spacious open-air dance floors under the starlit sky. The cool river breeze and dynamic beats make every dance step more exhilarating.',
        },
      ],
      features: [
        {
          name: 'Duration 1 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 18,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'Kapitol Dinner Cruise in Goa',
      ratings: '4.3',
      rated: '1290',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC18.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Discover an unforgettable blend of culture, cuisine, and celebration aboard the Kapitol Dinner Cruise.',
        },
        {
          about1:
            'A Celebration of Goan Culture, immerse yourself in Goa’s vibrant heritage with live folk dance performances on board.',
        },
        {
          about1:
            'Treat your taste buds to a lavish buffet featuring an array of Goan delicacies and international favorites.',
        },
        {
          about1:
            'Cruise along the beautiful Mandovi River and enjoy spectacular views of Goa’s illuminated riverfront landmarks, including the sparkling Atal Setu Bridge and shimmering casino boats.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1000',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
    {
      cruiseId: 19,
      headingOne: 'From Goa Marina: Mandovi Cruise with Dinner & Live Entertainment',
      HeadingThree: 'River Dinner Cruise in Goa',
      ratings: '4.3',
      rated: '1290',
      amount: '1299',
      discountedamount: '1099',
      imageUrl: '/assets/dinnercruise/DC17.svg',
      detailedPageImage: '/assets/images/card-1.avif',
      about: [
        {
          about1:
            'Embark on a magical journey along the serene Mandovi River with the River Dinner Cruise Goa, where cultural charm, breathtaking views, and delectable cuisine come together for an unforgettable evening.',
        },
        {
          about1:
            'Immerse yourself in Goa’s rich heritage with live folk dances and traditional music. From the vibrant costumes to the rhythmic beats, every performance brings the spirit of Goa to life.',
        },
        {
          about1:
            'Sail along the Mandovi River and take in panoramic views of Goa’s illuminated landmarks, including the majestic Atal Setu Bridge, charming riverside villages, and the dazzling river casinos.',
        },
        {
          about1:
            'Indulge in a lavish buffet dinner featuring a perfect blend of Goan specialties and international favorites.',
        },
      ],
      features: [
        {
          name: 'Duration 3 Hours',
          image: './assets/images/svg/cancellation-ico.svg',
        },
        {
          name: 'Panjim Goa, India',
          image: './assets/images/svg/bolt-ico.svg',
        },
        { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
        { name: 'Transport', image: './assets/images/svg/transfer-ico.svg' },
        { name: 'Mandovi Trip', image: './assets/images/svg/watch-ico.svg' },
      ],
      highlights: [
        {
          highlights1:
            'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
        },
        {
          highlights1:
            'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
        },
        {
          highlights1:
            'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
        },
        {
          highlights1:
            'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
        },
      ],
      inclusions: [
        { inclusion1: '2-hour mandovi cruise' },
        { inclusion1: 'Buffet dinner' },
        { inclusion1: 'Welcome drinks' },
        { inclusion1: 'Soft drinks & water' },
        { inclusion1: 'Goan dance show' },
        { inclusion1: 'Hotel transfers (optional upgrade)' },
      ],
      exclusions: [{ exclusion1: 'Alcoholic beverages (available for purchase)' }],
      needToKnows: [
        {
          needToKnow:
            'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
        },
        {
          needToKnow:
            'Note: Seat allocation is done by the staff on a first-come, first-served basis',
        },
        {
          needToKnow:
            'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
        },
      ],
      transport: [
        {
          title: 'Without Transport',
          amt: '1500',
          kidAmt: '700',
          desc: [
            'Access to all decks',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
        {
          title: 'With Transport',
          amt: '1200',
          kidAmt: '900',
          desc: [
            'Access to lower deck',
            '2-hour cruise in Goa Marina',
            'Goan buffet dinner.',
            'Goan dance show',
          ],
        },
      ],
    },
  ];

  showInclusionClick(offerDetails: any) {
    let travellingDetails = {
      ...this._helperService.getSessionStorage('travelDetails'),
      selectedTravellingOffer: { ...offerDetails },
    };
    this._helperService.setSessionStorage('travelDetails', travellingDetails);
  }

  redirectToBooking(offerDetails: any, cruiseId: any) {
    let travellingDetails = {
      ...this._helperService.getSessionStorage('travelDetails'),
      selectedTravellingOffer: { ...offerDetails },
    };
    this._helperService.setSessionStorage('travelDetails', travellingDetails);
    this._helperService.setSessionStorage('travelDetails', travellingDetails);
    this._helperService.setSessionStorage('packageId', cruiseId);
    this._router.navigate(['/booking'], { relativeTo: this.route });
  }

  redirectToBook() {
    this._router.navigate(['/booking'], { relativeTo: this.route });
  }

  getItemById(identity: number) {
    return this.hotels.find((item) => item.cruiseId === identity);
  }
}
