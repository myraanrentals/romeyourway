import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import $ from 'jquery';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HelperService } from '@services/helper.service';
import { BookingDetails } from '@interfaces/index';
import { BookingService } from '@services/booking.service';
@Component({
  selector: 'app-booking-selection',
  standalone: true,
  imports: [FormsModule, CalendarModule, CommonModule],
  providers: [HelperService],
  templateUrl: './booking-selection.component.html',
  styleUrl: './booking-selection.component.scss',
})
export class BookingSelectionComponent {
  date: Date[] | undefined;
  months: number = 2;
  selectedDay: any = 'Sun';
  number: number = 0;
  selectedDateDetails: any;
  selectedPackage: any;
  packages: any[] = [];
  upcoming_days: any = [];
  widthWin: any = '';
  popup: boolean = false;
  bookingDetails!: BookingDetails;
  travelDetails: any;
  packageTempId: any;
  @ViewChild('datepicker') datepicker!: ElementRef;
  packageNameOne: any;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _helperService: HelperService,
    public _bookingService: BookingService,
  ) {
    this.widthWin = window.innerWidth;
    this.bookingDetails = this._bookingService.bookingDetails;
  }

  ngOnInit() {
    this.getNextWeekDays();
    this.travelDetails = this._helperService.getSessionStorage('travelDetails');
    this.packageTempId = this._helperService.getSessionStorage('packageId');
    this.packages = this.packageTempId.transport;
    this.packageNameOne = this.packageTempId.HeadingThree;
    this.initializeBookingDetails();
  }

  private initializeBookingDetails() {
    let travellersDetails = this._helperService.getSessionStorage('travellersDetails');

    this.bookingDetails = {
      packageName: this.packageNameOne,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      adultCount: travellersDetails?.adultCount || 1,
      childCount: travellersDetails?.childCount || 0,
      infantCount: travellersDetails?.infantCount || 0,
      singleAdultAmt: 0,
      singleChildAmt: 700,
      singleInfantAmt: 300,
      totalMemberCount: 1,
      totalAmountForAdult: 0,
      totalAmountForChild: 0,
      totalAmountForInfant: 0,
      totalAmount: 0,
      fTotalAmount: 0,
      discountedTotalAmount: 0,
      totalPayableAmount: 0,
      paymentType: 'fullPayment',
    };
    this._bookingService.updateTotalAmount(this.bookingDetails);
  }

  getNextWeekDays() {
    const today = new Date();
    let length: any;
    if (this.widthWin >= 768) {
      length = 8;
      this.months = 2;
    } else {
      length = 5;
      this.months = 1;
    }
    for (let i = 1; i < length; i++) {
      let cdate: any;
      let obj: any;
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      let seats = 180;
      cdate = nextDay.toString();
      cdate = cdate.split(' ');
      this.upcoming_days.push({
        day: cdate[0],
        date: cdate[2],
        seats: seats,
      });
    }
  }

  datepickerOpen() {
    $('.p-inputwrapper').find('input').click();
  }

  onSelect(event: any) {
    this.resetDays(event);
  }

  onSelectDay(day: any) {
    this.selectedDay = day.day;
    this.selectedDateDetails = {
      day: day.day,
      date: day.date,
      month: day.month,
      year: day.year,
    };
  }

  resetDays(date: any) {
    let cdate;
    this.upcoming_days = [];
    const selected_date = new Date(date);
    let length: any;
    if (this.widthWin >= 768) {
      length = 5;
      this.months = 2;
    } else {
      length = 2;
      this.months = 1;
    }
    for (let i = -2; i < length; i++) {
      let date: any = new Date(selected_date);
      //if(i<0){
      date.setDate(selected_date.getDate() + i);
      //}
      let seats = 180;
      cdate = date.toString();
      cdate = cdate.split(' ');
      this.upcoming_days.push({
        day: cdate[0],
        date: cdate[2],
        seats: seats,
      });
    }

    let sdate: any = new Date(date);
    sdate = sdate.toString();
    sdate = sdate.split(' ');
    let day = { day: sdate[0] };
    this.onSelectDay(day);
  }

  onSelectPackage(data: any) {
    for (let item of this.packages) {
      item.selected = false;
    }
    let selectedPackage: any = this.packages.filter((x) => x.title === data.title);
    selectedPackage[0].selected = true;
    this.selectedPackage = data;
    let travellersDetails = this._helperService.getSessionStorage('travellersDetails');
    this.bookingDetails = {
      packageName: this.packageNameOne,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      adultCount: travellersDetails?.adultCount || 1,
      childCount: travellersDetails?.childCount || 0,
      infantCount: travellersDetails?.infantCount || 0,
      singleAdultAmt: this.selectedPackage.amt || 0,
      singleChildAmt: this.selectedPackage.kidAmt || 0,
      singleInfantAmt: 0,
      totalMemberCount: 1,
      totalAmountForAdult: 0,
      totalAmountForChild: 0,
      totalAmountForInfant: 0,
      totalAmount: 0,
      fTotalAmount: 0,
      discountedTotalAmount: 0,
      totalPayableAmount: 0,
      paymentType: 'fullPayment',
    };
    this._bookingService.updateTotalAmount(this.bookingDetails);
  }

  onNextClick() {
    if (this.widthWin <= 769) {
      // if mobile
      this.popup = true;
    } else {
      // routing
      this.onNextRoute();
    }
  }

  onSubmit(travellerForm: NgForm) {
    let travellersDetails = {
      adultCount: this.bookingDetails?.adultCount || 1,
      childCount: this.bookingDetails?.childCount || 0,
      infantCount: this.bookingDetails?.infantCount || 0,
    };
    this._helperService.setSessionStorage('travellersDetails', travellersDetails);
    this.onNextRoute();
  }

  closePopup() {
    this.popup = false;
  }

  onNextRoute() {
    let travelDetails = {
      ...this._helperService.getSessionStorage('travelDetails'),
      selectedDateDetails: this.selectedDateDetails,
      selectedPackage: this.selectedPackage,
      bookingDetails: this.bookingDetails,
    };
    this._helperService.setSessionStorage('travelDetails', travelDetails);
    this._router.navigate(['/checkout'], { relativeTo: this.route });
  }
}
