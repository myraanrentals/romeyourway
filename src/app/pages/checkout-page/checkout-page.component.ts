import { CommonModule, formatDate } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CalendarModule } from 'primeng/calendar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PackageCardComponent } from '../package-card/package-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { hotels, getTravellers, Traveller, getTravellersForYacth } from '../../constants/hotels';
import { HelperService } from '@services/helper.service';
import { FormsModule } from '@angular/forms';
import { FeatureSectionComponent } from '../shared/components/feature-section/feature-section.component';

interface SelectedTransport {
  anchoring?: number;
  cruising?: number;
}

interface SessionData {
  travellers: Traveller[];
  selectedTransport: SelectedTransport;
}
@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    CalendarModule,
    MatNativeDateModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    PackageCardComponent,
    FeatureSectionComponent,
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
})
export class CheckoutPageComponent implements OnInit {
  @ViewChild('timeSlotContainer') timeSlotContainer!: ElementRef;
  @ViewChild('datePickerInput') datePickerInput!: ElementRef<HTMLInputElement>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private HelperService: HelperService,
  ) {}
  dates: any[] = [];
  hotelList = hotels;
  travellers: Traveller[] = [];
  minDate: Date = new Date();
  selectedDate: Date | null = null;
  count: number = 1;
  selectedTime = '6pm';
  isSelected = false;
  isSidebarOpen = false;
  isMobile = window.innerWidth <= 768;
  selectedIdentity = 1;
  hotelDetails: any;
  features: any;
  sessionData: any = {};
  locations: string[] = ['Arpora', 'Baga', 'Calangute', 'Candolim'];
  showLocationModal = false;
  selectedLocation: string | null = null;
  category: string = '';
  public showProceedButton = false;
  showSpecialDateModal = false;
  selectedSpecialEvent: { date: string; title: string; navigateTo: string } | null = null;

  ngOnInit() {
    this.generateDates(new Date());
    const category = this.route.snapshot.paramMap.get('category');
    if (!category) return;
    this.category = category;
    this.showProceedButton = window.innerWidth > 768;
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) return;
      this.hotelList = this.HelperService.renderPackageData(category);
      this.hotelDetails = this.HelperService.getHotelByID(id, this.hotelList);
      this.features = this.HelperService.getFeatureList(this.hotelDetails);
      if (this.hotelDetails?.transport && this.hotelDetails.transport.length > 0) {
        this.hotelDetails.transport.forEach((t: any, index: number) => {
          t.isSelected = index === 0;
        });
      }
      this.generateDates(new Date());
      this.sessionData = {
        ...this.HelperService.defaultSessionPayload,
        selectedTime:
          category !== 'book-private-yachts-in-goa'
            ? this.selectedTime
            : this.hotelDetails.transport[0].timeSlots[0],
        cruiseId: this.hotelDetails.cruiseId,
        selectedTransport: this.hotelDetails.transport[0],
        subtotal: this.hotelDetails.transport[0].adultPrice,
        travellers:
          this.category !== 'book-private-yachts-in-goa'
            ? getTravellers(
                Number(this.hotelDetails.transport[0].adultPrice),
                Number(this.hotelDetails.transport[0].kidPrice),
              )
            : getTravellersForYacth(
                Number(this.hotelDetails.transport[0].actualPaxCount),
                Number(this.hotelDetails.transport[0].cruising),
                Number(this.hotelDetails.transport[0].anchoring),
              ),
      };
      this.HelperService.updateSessionStorage(this.sessionData);
    });
    this.travellers = getTravellers(
      this.sessionData.selectedTransport?.adultPrice,
      this.sessionData.selectedTransport?.kidPrice,
    );
    this.selectedTime =
      category !== 'book-private-yachts-in-goa'
        ? this.selectedTime
        : this.sessionData.selectedTransport.timeSlots[0];
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  increaseCount(traveller: any): void {
    
    const isActualPaxCount = traveller.label === 'Actual Pax Count';
    const isYacht = this.category === 'book-private-yachts-in-goa';

    const maxCount = isYacht ? (isActualPaxCount ? traveller.price : Infinity) : Infinity;

    if (traveller.count < maxCount) {
      traveller.count++;
      this.HelperService.updateSessionStorage({
        travellers: this.sessionData.travellers,
      });
    }
  }

  decreaseCount(traveller: any) {
    const isAdult = traveller.label === 'Adult';
    const isYacth = this.category === 'book-private-yachts-in-goa';
    const minCount = isAdult || isYacth ? 1 : 0;

    if (traveller.count > minCount) {
      traveller.count--;
      this.HelperService.updateSessionStorage({
        travellers: this.sessionData.travellers,
      });
    }
  }
  scrollToTimeSlot() {
    this.timeSlotContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.showProceedButton = true;
  }
  getTravellerPrice(traveller: any): number {
    // same logic as template
    if (traveller.label === 'Adult') {
      return this.sessionData.selectedTransport?.adultPrice || 0;
    } else if (traveller.label === 'Child (4-10 year old)') {
      return this.sessionData.selectedTransport?.kidPrice || 0;
    } else {
      return 0;
    }
  }

  getSubtotal(): number {
    const isYacth = this.category === 'book-private-yachts-in-goa';
    if (isYacth) return 0;
    const subtotal = this.sessionData.travellers.reduce(
      (total: number, traveller: any) =>
        total + traveller.count * this.getTravellerPrice(traveller),
      0,
    );
    const gstRate = 0.18;
    const gstAmount = +(subtotal * gstRate).toFixed(2);
    const amountWithGST = +(subtotal + gstAmount).toFixed(2);

    this.HelperService.updateSessionStorage({
      subtotal: +subtotal.toFixed(2),
      payableAmount: +subtotal.toFixed(2),
      amountWithGST,
    });

    return +subtotal.toFixed(2);
  }

  getSubtotalForYacth(): number {
    const { travellers, selectedTransport }: SessionData = this.sessionData;

    const priceMap: Record<string, number> = {
      Anchoring: selectedTransport?.anchoring ?? 0,
      Cruising: selectedTransport?.cruising ?? 0,
    };

    const subtotal = travellers.reduce((total: number, traveller: Traveller) => {
      const unitPrice = priceMap[traveller.displayLabel] ?? 0;
      return total + traveller.count * unitPrice;
    }, 0);
    const gstRate = 0.18;
    const gstAmount = +(subtotal * gstRate).toFixed(2);
    const amountWithGST = +(subtotal + gstAmount).toFixed(2);

    this.HelperService.updateSessionStorage({
      subtotal: +subtotal.toFixed(2),
      payableAmount: +subtotal.toFixed(2),
      amountWithGST,
    });

    return +subtotal.toFixed(2);
  }

  openSidePanel(event: Event) {
    event.stopPropagation();
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  toggleSelection(index: number) {
    this.showLocationModal = true;
    if (index === 1) {
      this.sessionData.pickupLocation = '';
      this.selectedLocation = '';
    }
    this.hotelDetails.transport.forEach((pkg: any, i: number) => {
      pkg.isSelected = i === index ? true : false;
    });

    const selectedTransport = this.hotelDetails.transport.find((pkg: any) => pkg.isSelected);
    this.showLocationModal = selectedTransport.title === 'With Transport' ? true : false;

    this.sessionData.travellers;
    this.sessionData.selectedTransport = selectedTransport;
    const slectedTravellers  = getTravellers(
      Number(selectedTransport.adultPrice),
      Number(selectedTransport.kidPrice),
    )
    const updateData = {
      selectedTransport: selectedTransport || null,
      cruiseId: this.hotelDetails.cruiseId,
      travellers: slectedTravellers,
    };
    this.sessionData = { ...this.sessionData, ...updateData };
    this.HelperService.updateSessionStorage(updateData);
    
    this.selectedTime =
      this.category !== 'book-private-yachts-in-goa'
        ? this.selectedTime
        : this.sessionData.selectedTransport.timeSlots[0];
    this.updateTime(this.selectedTime);

    setTimeout(() => {
      if (selectedTransport && this.timeSlotContainer) {
        const element = this.timeSlotContainer.nativeElement;
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }, 100);
  }

  generateDates(startDate: Date) {
    this.dates = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dateFormat = formatDate(date, 'yyyy-MM-dd', 'en');
      const specialEvent = this.hotelDetails?.specialEvents && 
                          Array.isArray(this.hotelDetails.specialEvents) && 
                          this.hotelDetails.specialEvents.length > 0
                          ? this.hotelDetails.specialEvents.find((event: any) => event.date === dateFormat)
                          : null;
      const isDisabled = !!specialEvent;
      
      this.dates.push({
        day: date.getDate().toString(),
        label: formatDate(date, 'MMM dd', 'en'),
        dateFormat: dateFormat,
        selected: i === 0 && !isDisabled,
        disabled: isDisabled,
        specialEvent: specialEvent,
      });
    }
  }
  updateTime(time: string) {
    this.sessionData.selectedTime = time;
    this.HelperService.updateSessionStorage({
      selectedTime: this.sessionData.selectedTime,
    });
  }

  selectDate(date: any) {
    if (date.disabled && date.specialEvent) {
      this.selectedSpecialEvent = date.specialEvent;
      this.showSpecialDateModal = true;
      return;
    }
    this.dates.forEach((d) => (d.selected = false));
    date.selected = true;
    this.HelperService.updateSessionStorage({ selectedDate: date });
  }

  onDateSelected(event: any) {
    const selectedDate = event.value;
    if (!selectedDate) {
      return;
    }
    
    const dateFormat = formatDate(selectedDate, 'yyyy-MM-dd', 'en');
    const specialEvent = this.hotelDetails?.specialEvents && 
                        Array.isArray(this.hotelDetails.specialEvents) && 
                        this.hotelDetails.specialEvents.length > 0
                        ? this.hotelDetails.specialEvents.find((event: any) => event.date === dateFormat)
                        : null;
    
    if (specialEvent) {
      this.selectedSpecialEvent = specialEvent;
      this.showSpecialDateModal = true;
      setTimeout(() => {
        if (this.datePickerInput?.nativeElement) {
          this.datePickerInput.nativeElement.value = '';
        }
      }, 0);
      return;
    }
    
    if (selectedDate >= this.minDate) {
      this.generateDates(selectedDate);
    }
    this.HelperService.updateSessionStorage({
      selectedDate: {
        day: selectedDate.getDate().toString(),
        label: formatDate(selectedDate, 'MMM dd', 'en'),
        dateFormat: formatDate(selectedDate, 'yyyy-MM-dd', 'en'),
        selected: true,
      },
    });
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return false;
    }
    
    if (this.hotelDetails?.specialEvents && Array.isArray(this.hotelDetails.specialEvents) && this.hotelDetails.specialEvents.length > 0) {
      const dateString = formatDate(date, 'yyyy-MM-dd', 'en');
      const specialEvent = this.hotelDetails.specialEvents.find((event: any) => event.date === dateString);
      return !specialEvent;
    }
    
    return true;
  };

  goBack() {
    this.router.navigate(['/']);
  }
  navigateToPaymentPage(id: string) {
    this.router.navigate([`/${this.category}/details/${id}/checkout`]);
  }
  openLocationModal(event: MouseEvent) {
    event.stopPropagation();
    this.showLocationModal = true;
  }

  closeLocationModal() {
    this.showLocationModal = false;
  }

  selectLocation(loc: string) {
    this.selectedLocation = loc;
  }

  confirmLocation() {
    this.sessionData.pickupLocation = this.selectedLocation;
    if (this.selectedLocation) {
      this.HelperService.updateSessionStorage({
        pickupLocation: this.selectedLocation,
      });
      this.showLocationModal = false;
    }
  }

  closeSpecialDateModal() {
    this.showSpecialDateModal = false;
    this.selectedSpecialEvent = null;
  }

  callSupport() {
    window.location.href = 'tel:+917715959917';
  }

  enquireNow() {
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent(`Hi, I would like to enquire about ${this.selectedSpecialEvent?.title || 'special event'} bookings.`);
    window.open(`https://wa.me/917715959917?text=${message}`, '_blank');
  }

  navigateToDetails() {
    if (this.selectedSpecialEvent?.navigateTo) {
      // Check if it's a full URL or a route path
      const url = this.selectedSpecialEvent.navigateTo.startsWith('http://') || 
                  this.selectedSpecialEvent.navigateTo.startsWith('https://')
        ? this.selectedSpecialEvent.navigateTo
        : `${window.location.origin}${this.selectedSpecialEvent.navigateTo.startsWith('/') ? '' : '/'}${this.selectedSpecialEvent.navigateTo}`;
      window.open(url, '_blank');
      this.closeSpecialDateModal();
    }
  }
}
