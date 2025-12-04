import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '@services/helper.service';
import $ from 'jquery';
import { hotels } from '../../../constants/hotels';
import { Subscription } from 'rxjs';
import { FaqComponent } from '../../faq/faq.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FaqComponent, MatIconModule, FormsModule],
  providers: [HelperService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnChanges {
  @Input() experienceData: any;
  @ViewChildren('carouselRefs') carouselRefs!: QueryList<ElementRef>;

  private modalService = inject(NgbModal);
  private routerSub!: Subscription;
  closeResult = '';
  mobFlag: boolean = false;
  images: any = '';
  selectedIdentity = 1;
  href: string = '';
  isEnquire: boolean = false;
  isPrivateParty: boolean = false;
  flippedButtons: Map<number, boolean> = new Map();
  bsCarouselList: any[] = [];
  activeSlideIndex: number[] = [];
  selectedFilter = 'all';
  filteredData: any[] = [];
  items: { label: string; value: string }[] | null = null;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _helperService: HelperService,
  ) {
    this.setMobileFlag();
  }
  ngOnInit(): void {
    this.href = this._router.url;
    this.filteredData = this.experienceData; 
    const category = this.route.snapshot.paramMap.get('category');
    
    // Get filter items based on category
    if (category) {
      this.items = this._helperService.getFilterItems(category);
    } else {
      // No category, no items
      this.items = null;
    }
    
    if (this.href.includes('/enquire')) {
      this.isEnquire = true;
    } else if (category && category.startsWith('best-')) {
      this.isEnquire = true;
    } else if (category && category.startsWith('private-parties')) {
      this.isPrivateParty = true;
    }
    this.routerSub = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.href = event.urlAfterRedirects;
        const currentCategory = this.route.snapshot.paramMap.get('category');
        
        // Update filter items when route changes
        if (currentCategory) {
          this.items = this._helperService.getFilterItems(currentCategory);
        } else {
          this.items = null;
        }
        
        if (this.href.includes('/enquire')) {
          this.isEnquire = true;
        } else if (currentCategory && currentCategory.startsWith('best-')) {
          this.isEnquire = true;
        } else {
          this.isEnquire = false;
        }
        // Reset filter to 'all' when route changes
        this.selectedFilter = 'all';
        // filteredData will be updated in ngOnChanges when experienceData changes
      }
    });
    window.addEventListener('resize', this.setMobileFlag.bind(this));

  }

  ngOnChanges(changes: SimpleChanges): void {
    // When experienceData changes (e.g., route change updates the input), reset filter
    if (changes['experienceData'] && this.experienceData) {
      this.selectedFilter = 'all';
      this.filteredData = this.experienceData;
    }
  }
  ngAfterViewInit() {
    this.href = this._router.url;

    this.carouselRefs.forEach((carouselRef, idx) => {

      this.activeSlideIndex[idx] = 0;

      const instance = new bootstrap.Carousel(carouselRef.nativeElement, {
        interval: true,
        ride: false,
        pause: true,
        touch: true,
        wrap: true,
      });

      this.bsCarouselList[idx] = instance;

      carouselRef.nativeElement.addEventListener("slide.bs.carousel", (event: any) => {
        this.activeSlideIndex[idx] = event.to;
      });
    });
  }

  goToSlide(cardIndex: number, slideIndex: number) {
    this.bsCarouselList[cardIndex].to(slideIndex);
  }


  ngOnDestroy() {
    window.removeEventListener('resize', this.setMobileFlag.bind(this));
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
  setMobileFlag() {
    let winWidth = window.innerWidth;
    this.mobFlag = winWidth < 800;
  }
  filterPackages() {
    if (this.selectedFilter === 'all') {
      this.filteredData = this.experienceData;
      return;
    }
  
    this.filteredData = this.experienceData
      .filter(
        (x: any) => x.type.includes(this.selectedFilter) || x.type.includes('others')
      )
      .sort((a: any, b: any) => {
        if (a.type.includes(this.selectedFilter) && b.type.includes('others')) return -1;
        if (a.type.includes('others') && b.type.includes(this.selectedFilter)) return 1;
        return 0;
      });
  }
  
  openFullScreen(content: TemplateRef<any>, offer: any) {
    this.selectedIdentity = offer.cruiseId;

    this.modalService
      .open(content, { fullscreen: true, ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
  }

  openLarge(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
  goToService(link: string) {
    const category = this.route.snapshot.paramMap.get('category');
    this._router.navigate([`/${category}/details/${link}`]);

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

  onScroll(event: any) {}

  openWhatsApp(phoneNumber: string, msg: string) {
    const infoType = this.isEnquire ? 'enquire' : 'know more';
    const message = `Hello, I would like to ${infoType} about ${msg} in Goa!`;
    const internationalNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${internationalNumber}?text=${encodedMessage}`;
  }

  callPhoneNumber(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`;
  }

  handleEnquireClick(offer: any, phoneNumber: string = '+917715959917') {
    if (this.mobFlag) {
      // Mobile: directly call
      this.callPhoneNumber(phoneNumber);
    } else {
      // Web: flip to show phone number
      const offerId = offer?.cruiseId || 0;
      const isFlipped = this.flippedButtons.get(offerId) || false;
      this.flippedButtons.set(offerId, !isFlipped);
    }
  }

  isButtonFlipped(offer: any): boolean {
    const offerId = offer?.cruiseId || 0;
    return this.flippedButtons.get(offerId) || false;
  }

  formatPhoneNumber(phoneNumber: string): string {
    // Format: +91 77159 59917
    if (phoneNumber.startsWith('+91')) {
      return `+91 ${phoneNumber.slice(3, 8)} ${phoneNumber.slice(8)}`;
    }
    return phoneNumber;
  }

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
    return this.experienceData.find((item: any) => item.cruiseId === identity);
  }

  calculateDiscount(oldPrice: number | string, currentPrice: number | string): number {
    const oldP = Number(String(oldPrice).replace(/,/g, ''));
    const currP = Number(String(currentPrice).replace(/,/g, ''));

    if (!oldP || !currP || oldP <= currP) {
      return 0;
    }

    const discount = ((oldP - currP) / oldP) * 100;
    return Math.round(discount);
  }

}
