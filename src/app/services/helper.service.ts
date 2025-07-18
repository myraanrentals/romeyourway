import { Injectable } from '@angular/core';
import { hotels, travellers } from '../constants/hotels';
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
  renderPackageData() {
    const href = this.router.url;
    if (href === '/book-dinner-cruise-in-goa') {
      return hotels;
    } else if (href === '/private-yachts-in-goa') {
      return yacth;
    } else if (href === '/best-dinner-cruise-in-goa') {
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
  private urlMap: { [key: string]: number } = {
    'lunch-cruise-in-goa': 1,
    'adventure-boat-party-in-goa': 2,
    'dolphin-sightseeing-in-goa': 3,
    'book-cruise-in-goa': 4,
    'book-premium-dinner-cruise-in-goa': 5,
    'book-family-dinner-cruise-in-goa': 6,
    'book-luxury-dinner-cruise-in-goa': 7,
    'book-sunset-cruise-in-goa': 8,
    'book-party-cruise-in-goa': 9,
    'book-nautiamigo-dinner-cruise-in-goa': 10,
    'book-paradise-dinner-cruise-in-goa': 11,
    'book-swastik-dinner-cruise-in-goa': 12,
    'book-vihaan-dinner-cruise-in-goa': 13,
    'book-ohana-dinner-cruise-in-goa': 14,
    'book-azulbarco-dinner-cruise-in-goa': 15,
    'book-aarushi-dinner-cruise-in-goa': 16,
    'book-river-cruise-in-goa': 17,
    'candle-light-dinner-cruise-in-goa': 18,
  };
  getIdFromURL(value: string): number {
    return this.urlMap[value] || 1;
  }
  getHotelByIndex(index: number, hotelList: any[]) {
    const matchedHotel = hotelList.find((hotel) => hotel.cruiseId === index);
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
  } = {
    selectedDate: {
      day: formatDate(new Date(), 'dd', 'en'),
      label: formatDate(new Date(), 'MMM dd', 'en'),
      selected: true,
    },
    travellers: travellers,
    selectedTransport: null,
    cruiseId: null,
    subtotal: 550,
    payableAmount: 0,
    selectedTime: '6pm',
    paymentType: 'full',
    pickupLocation: '',
  };
  updateSessionStorage(updatedData: Partial<typeof this.defaultSessionPayload> = {}) {
    const storedSession = sessionStorage.getItem('checkoutSession');
    const currentSession = storedSession
      ? JSON.parse(storedSession)
      : { ...this.defaultSessionPayload };

    const updatedSession = { ...currentSession, ...updatedData };
    sessionStorage.setItem('checkoutSession', JSON.stringify(updatedSession));
  }
}
