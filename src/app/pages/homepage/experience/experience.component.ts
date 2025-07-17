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
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '@services/helper.service';
import $ from 'jquery';
import { hotels } from '../../../constants/hotels';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  providers: [HelperService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() experienceData: any;
  private modalService = inject(NgbModal);
  closeResult = '';
  mobFlag: boolean = false;
  images: any = '';
  selectedIdentity = 1;
  hotels: any = hotels;
  href: string = '';

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _helperService: HelperService
  ) {
    let winWidth = window.innerWidth;
    if (winWidth < 768) {
      this.mobFlag = true;
    } else {
      this.mobFlag = false;
    }
  }

  ngAfterViewInit() {
    this.href = this._router.url;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['experienceData'] && this.experienceData) {
      this.hotels = this.experienceData;
    }
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
        }
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
        }
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
    if (
      this.href === '/private-yachts-in-goa' ||
      this.href === '/best-dinner-cruise-in-goa'
    ) {
      window.location.href = 'tel:+917715959917';
    } else {
      this._router.navigate([link]);
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
    return this.hotels.find((item: any) => item.cruiseId === identity);
  }
}
