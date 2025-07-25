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
import { hotels, getTravellers, Traveller } from '../../constants/hotels';
import { HelperService } from '@services/helper.service';
import { FormsModule } from '@angular/forms';
import { FeatureSectionComponent } from '../shared/components/feature-section/feature-section.component';
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
  locations: string[] = ['Calangute', 'Candolim', 'Baga', 'Arpora'];
  showLocationModal = false;
  selectedLocation: string | null = null;
  category: string = '';
  public showProceedButton = false;

  ngOnInit() {
    this.generateDates(new Date());
    const category = this.route.snapshot.paramMap.get('category');
    if (!category) return;
    this.category = category;
    this.showProceedButton = window.innerWidth > 768;
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) return;
      this.hotelDetails = this.HelperService.getHotelByID(id, this.hotelList);
      this.features = this.HelperService.getFeatureList(this.hotelDetails);
      this.sessionData = {
        ...this.HelperService.defaultSessionPayload,
        cruiseId: this.hotelDetails.cruiseId,
        selectedTransport: this.hotelDetails.transport[1],
        subtotal: this.hotelDetails.transport[0].discountedamt,
        travellers: getTravellers(
          Number(this.hotelDetails.transport[1].discountedamt),
          Number(this.hotelDetails.transport[1].kidAmt),
        ),
      };
      this.HelperService.updateSessionStorage(this.sessionData);
    });
    this.travellers = getTravellers(this.sessionData.selectedTransport?.discountedamt,this.sessionData.selectedTransport?.kidAmt);
    this.hotelList = this.HelperService.renderPackageData(category);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  increaseCount(traveller: any) {
    traveller.count++;
    this.HelperService.updateSessionStorage({
      travellers: this.sessionData.travellers,
    });
  }

  decreaseCount(traveller: any) {
    const isAdult = traveller.label === 'Adult';
    const minCount = isAdult ? 1 : 0;

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
      return this.sessionData.selectedTransport?.discountedamt || 0;
    } else if (traveller.label === 'Child (4-10 year old)') {
      return this.sessionData.selectedTransport?.kidAmt || 0;
    } else {
      return 0;
    }
  }

  getSubtotal(): number {
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

  openSidePanel(event: Event) {
    event.stopPropagation();
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  toggleSelection(index: number) {
    if (index === 1) {
      this.sessionData.pickupLocation = '';
      this.selectedLocation = '';
    }
    this.hotelDetails.transport.forEach((pkg: any, i: number) => {
      pkg.isSelected = i !== index ? !pkg.isSelected : false;
    });

    const selectedTransport = this.hotelDetails.transport.find((pkg: any) => pkg.isSelected);
    this.sessionData.travellers;
    this.sessionData.selectedTransport = selectedTransport;
    this.HelperService.updateSessionStorage({
      selectedTransport: selectedTransport || null,
      cruiseId: this.hotelDetails.cruiseId,
    });

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
      this.dates.push({
        day: date.getDate().toString(),
        label: formatDate(date, 'MMM dd', 'en'),
        dateFormat: formatDate(date, 'yyyy-MM-dd', 'en'),
        selected: i === 0,
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
    this.dates.forEach((d) => (d.selected = false));
    date.selected = true;
    this.HelperService.updateSessionStorage({ selectedDate: date });
  }

  onDateSelected(event: any) {
    const selectedDate = event.value;
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

  goBack() {
    this.router.navigate(['/']);
  }
  navigateToPaymentPage(id: string) {
    this.router.navigate([`/${this.category}/details/${id}/checkout`]);
  }
  openLocationModal(event: MouseEvent) {
    // prevent card click
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
}
