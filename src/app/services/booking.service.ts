import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { APIROUTES } from '@constants/routes';
import { Observable } from 'rxjs';
import { BookingDetails, CountKey } from '@interfaces/index';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  bookingDetails: BookingDetails = {
    packageName: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    adultCount: 1,
    childCount: 0,
    infantCount: 0,
    singleAdultAmt: 0,
    singleChildAmt: 0,
    singleInfantAmt: 0,
    totalMemberCount: 0,
    totalAmountForAdult: 0,
    totalAmountForChild: 0,
    totalAmountForInfant: 0,
    totalAmount: 0,
    fTotalAmount: 0,
    discountedTotalAmount: 0,
    totalPayableAmount: 0,
    paymentType: 'fullPayment',
  };

  constructor(
    private _apiService: ApiService,
    private _helperService: HelperService,
  ) {}

  vehicleBooking(payloadData: any): Observable<any> {
    let payload = {
      payload: {
        createdBy: 'ONLINE',
        ...payloadData,
      },
    };
    return this._apiService.httpPOST(APIROUTES.WATERSPORTSBOOKING, payload);
  }
  paymentStatus(bookingId: any): Observable<any> {
    let payload = {
      payload: {
        bookingId: bookingId,
      },
    };
    return this._apiService.httpPOST(APIROUTES.PAYMENTSTATUS, payload);
  }
  updateTotalAmount(bookingDetails: BookingDetails) {
    const { adultCount, childCount, infantCount, singleAdultAmt, singleChildAmt, singleInfantAmt } =
      bookingDetails;
    bookingDetails.totalMemberCount = adultCount + childCount + infantCount;
    bookingDetails.totalAmountForAdult = adultCount * singleAdultAmt;
    bookingDetails.totalAmountForChild = childCount * singleChildAmt;
    bookingDetails.totalAmountForInfant = infantCount * singleInfantAmt;
    bookingDetails.totalPayableAmount =
      adultCount * singleAdultAmt + childCount * singleChildAmt + infantCount * singleInfantAmt;
    bookingDetails.totalAmount =
      adultCount * singleAdultAmt + childCount * singleChildAmt + infantCount * singleInfantAmt;
    if (bookingDetails.paymentType === 'partialPayment') {
      bookingDetails.totalPayableAmount = this.bookingDetails.totalAmount * 0.2;
      bookingDetails.totalAmount = this.bookingDetails.totalAmount * 0.2;
    }
  }

  updateCount(
    type: 'adult' | 'child' | 'infant',
    increment: boolean,
    bookingDetails: BookingDetails,
  ) {
    const countKey: CountKey = `${type}Count` as CountKey;
    const currentValue = bookingDetails[countKey];
    if (increment) {
      bookingDetails[countKey] = currentValue + 1;
    } else if (currentValue > 0) {
      bookingDetails[countKey] = currentValue - 1;
    }
    this.updateTotalAmount(bookingDetails);
    this._helperService.setSessionStorage('travellersDetails', bookingDetails);
  }
}
