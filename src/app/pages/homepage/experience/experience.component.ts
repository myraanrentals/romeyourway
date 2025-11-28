import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  Input,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '@services/helper.service';
import $ from 'jquery';
import { hotels } from '../../../constants/hotels';
import { Subscription } from 'rxjs';
import { FaqComponent } from '../../faq/faq.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FaqComponent],
  providers: [HelperService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() experienceData: any;
  private modalService = inject(NgbModal);
  private routerSub!: Subscription;
  closeResult = '';
  mobFlag: boolean = false;
  images: any = '';
  selectedIdentity = 1;
  href: string = '';
  isEnquire: boolean = false;
  isPrivateParty: boolean = false;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _helperService: HelperService,
  ) {
    this.setMobileFlag();
  }
  ngOnInit(): void {
    this.href = this._router.url;
    const category = this.route.snapshot.paramMap.get('category');
    if (this.href.includes('/enquire')) {
      console.log('URL contains /enquire:', this.href);
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
        if (this.href.includes('/enquire')) {
          console.log('URL contains /enquire:', this.href);
          this.isEnquire = true;
        } else if (currentCategory && currentCategory.startsWith('best-')) {
          this.isEnquire = true;
        } else {
          this.isEnquire = false;
        }
      }
    });
    window.addEventListener('resize', this.setMobileFlag.bind(this));

  }
  ngAfterViewInit() {
    this.href = this._router.url;
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
    if (category === 'book-private-yachts-in-goa' || category === 'best-dinner-cruise-in-goa') {
      window.location.href = 'tel:+917715959917';
    } else {
      this._router.navigate([`/${category}/details/${link}`]);
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

  onScroll(event: any) {}

  openWhatsApp(phoneNumber: string, msg: string) {
    // Ensure the phone number is in international format (with country code)
    const internationalNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    const encodedMessage = encodeURIComponent(msg);
    // Open WhatsApp with the provided number
    window.location.href = `https://wa.me/${internationalNumber}?text=${encodedMessage}`;
  }

  callPhoneNumber(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`;
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
