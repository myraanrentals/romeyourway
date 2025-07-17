export interface BookingDetails {
  packageName:string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  adultCount: number;
  childCount: number;
  infantCount: number;
  singleAdultAmt: number;
  singleChildAmt: number;
  singleInfantAmt: number;
  totalAmountForAdult: number;
  totalAmountForChild: number;
  totalAmountForInfant: number;
  totalMemberCount: number;
  totalAmount: number;
  discountedTotalAmount: number;
  totalPayableAmount: number;
  fTotalAmount: number;
  paymentType: string;
}

export type CountKey = 'adultCount' | 'childCount' | 'infantCount';