import { Injectable } from '@angular/core';
import { hotels, getTravellers } from '../constants/hotels';
import { dinnerCruise } from '../constants/dinnerCruise';
import { yacth } from '../constants/yacth';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router) {}

  setSessionStorage(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionStorage(key: string) {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } else {
      console.warn('sessionStorage is not available in this environment.');
      return null;
    }
  }
  renderPackageData(category: string) {
    if (category === 'book-dinner-cruise-in-goa') {
      return hotels;
    } else if (category === 'private-yachts-in-goa') {
      return yacth;
    } else if (category === 'best-dinner-cruise-in-goa') {
      return dinnerCruise;
    } else {
      return hotels;
    }
  }
  deleteSessionStorage(key: string) {
    sessionStorage.removeItem(key);
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }
  getHotelByID(id: string, hotelList: any[]) {
    const matchedHotel = hotelList.find((hotel) => hotel.routingUrl === id);
    return matchedHotel || hotelList[0];
  }
  getFeatureList(hotelDetails?: { rating?: number }): any[] {
    if (!hotelDetails) return [];

    return [
      {
        icon: '/assets/detailsPage/ballon_icon.avif',
        title: '10 Million+',
        text: 'Happy customers from 65+ countries all around.',
      },
      {
        icon: '/assets/detailsPage/heart_icon.avif',
        title: `${hotelDetails.rating} / 5.0`,
        text: 'Cumulative ratings of our trips across platforms.',
      },
      {
        icon: '/assets/detailsPage/message_icon.avif',
        title: 'Curated with love',
        text: 'Expert-guided trips with meticulous planning.',
      },
      {
        icon: '/assets/detailsPage/phone_icon.avif',
        title: '24*7 Support',
        text: 'We are always there to help you pre, post, and on the trip.',
      },
    ];
  }
  defaultSessionPayload: {
    selectedDate: any | null;
    travellers: { label: string; price: number; count: number }[];
    selectedTransport: any | null;
    cruiseId: any | null;
    subtotal: number;
    selectedTime: any;
    payableAmount: number;
    paymentType: string;
    pickupLocation: string;
    amountWithGST: number;
    location: string;
  } = {
    selectedDate: {
      day: formatDate(new Date(), 'dd', 'en'),
      label: formatDate(new Date(), 'MMM dd', 'en'),
      dateFormat: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      selected: true,
    },
    travellers: [],
    selectedTransport: null,
    cruiseId: null,
    subtotal: 550,
    payableAmount: 0,
    selectedTime: '6pm',
    paymentType: 'full',
    pickupLocation: '',
    amountWithGST: 0,
    location: 'Calangute',
  };
  updateSessionStorage(updatedData: Partial<typeof this.defaultSessionPayload> = {}) {
    const storedSession = sessionStorage.getItem('checkoutSession');
    const sessionPackagePrice = sessionStorage.getItem('packagePrice');

    const currentSession = storedSession
      ? JSON.parse(storedSession)
      : sessionPackagePrice
        ? {
            ...this.defaultSessionPayload,
            travellers: getTravellers(JSON.parse(sessionPackagePrice)),
          }
        : { ...this.defaultSessionPayload };

    const updatedSession = { ...currentSession, ...updatedData };
    sessionStorage.setItem('checkoutSession', JSON.stringify(updatedSession));
  }
}
