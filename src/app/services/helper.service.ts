import { Injectable } from '@angular/core';
import { hotels, getTravellers, items as hotelsItems } from '../constants/hotels';
import { dinnerCruise } from '../constants/dinnerCruise';
import { yacth, items as yacthItems } from '../constants/yacth';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { scubaList, items as scubaItems } from '@constants/scuba';
import { watersports, items as watersportsItems } from '@constants/watersports';
import { adventures } from '@constants/adventures';
import { sightseeing } from '@constants/sightseeing';
import { privateParties } from '@constants/privateParties';
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
    // Extract category name after 'book-' or 'best-' prefix
    let categoryName = category;
    if (category.startsWith('book-')) {
      categoryName = category.replace('book-', '');
    } else if (category.startsWith('best-')) {
      categoryName = category.replace('best-', '');
    }

    if (categoryName === 'dinner-cruise-in-goa') {
      return hotels;
    } else if (categoryName === 'private-yachts-in-goa') {
      return yacth;
    } else if (categoryName === 'watersports-and-scuba-diving-in-goa') {
      return scubaList;
    } else if (categoryName === 'water-sports-in-goa') {
      return watersports;
    } else if (categoryName === 'adventures-in-goa') {
      return adventures;
    } else if (categoryName === 'sightseeing-in-goa') {
      return sightseeing;
    }else if (categoryName === 'private-parties') {
      return privateParties; 
    }else {
      return hotels;
    }
  }

  getFilterItems(category: string): { label: string; value: string }[] | null {
    // Extract category name after 'book-' or 'best-' prefix
    let categoryName = category;
    if (category.startsWith('book-')) {
      categoryName = category.replace('book-', '');
    } else if (category.startsWith('best-')) {
      categoryName = category.replace('best-', '');
    }

    if (categoryName === 'dinner-cruise-in-goa') {
      return hotelsItems || null;
    } else if (categoryName === 'private-yachts-in-goa') {
      return yacthItems || null;
    } else if (categoryName === 'watersports-and-scuba-diving-in-goa') {
      return scubaItems || null;
    } else if (categoryName === 'water-sports-in-goa') {
      return watersportsItems || null;
    } else if (categoryName === 'adventures-in-goa') {
      // No items exported, return null to hide dropdown
      return null;
    } else if (categoryName === 'sightseeing-in-goa') {
      // No items exported, return null to hide dropdown
      return null;
    } else if (categoryName === 'private-parties') {
      // No items exported, return null to hide dropdown
      return null;
    } else {
      // Default to dinner cruise items if available
      return hotelsItems || null;
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
    discountAmount: number;
    couponCode: string;
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
    location: '',
    discountAmount: 0,
    couponCode: '',
  };

  updateSessionStorage(updatedData: Partial<typeof this.defaultSessionPayload> = {}) {
    const storedSession = sessionStorage.getItem('checkoutSession');
    const sessionPackagePrice = sessionStorage.getItem('packagePrice');
    const { adultPrice, kidPrice } = sessionPackagePrice && JSON.parse(sessionPackagePrice);

    const currentSession = storedSession
      ? JSON.parse(storedSession)
      : sessionPackagePrice
        ? {
            ...this.defaultSessionPayload,
            travellers: getTravellers(adultPrice, kidPrice),
          }
        : { ...this.defaultSessionPayload };

    const updatedSession = { ...currentSession, ...updatedData };
    sessionStorage.setItem('checkoutSession', JSON.stringify(updatedSession));
  }
}
