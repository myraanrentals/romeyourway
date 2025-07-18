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
import { hotels, travellers } from '../../constants/hotels';
import { HelperService } from '@services/helper.service';
import { FormsModule } from '@angular/forms';
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
  travellers = travellers;
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

  ngOnInit() {
    this.generateDates(new Date());

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) return;

      this.selectedIdentity = this.HelperService.getIdFromURL(id);
      this.hotelDetails = this.HelperService.getHotelByIndex(this.selectedIdentity, this.hotelList);
      this.features = this.HelperService.getFeatureList(this.hotelDetails);
      this.sessionData = {
        ...this.HelperService.defaultSessionPayload,
        cruiseId: this.hotelDetails.cruiseId,
        selectedTransport: this.hotelDetails.transport[1],
      };
      this.HelperService.updateSessionStorage(this.sessionData);
    });
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

  getSubtotal() {
    const subtotal = this.sessionData.travellers.reduce(
      (total: number, traveller: any) => total + traveller.count * traveller.price,
      0,
    );
    this.HelperService.updateSessionStorage({
      subtotal,
      payableAmount: subtotal,
    });
    return subtotal;
  }

  openSidePanel(event: Event) {
    event.stopPropagation();
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  toggleSelection(index: number) {
    this.hotelDetails.transport.forEach((pkg: any, i: number) => {
      pkg.isSelected = i === index ? !pkg.isSelected : false;
    });

    const selectedTransport = this.hotelDetails.transport.find((pkg: any) => pkg.isSelected);

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
    this.router.navigate([`/${id}/checkout`]);
  }
}
