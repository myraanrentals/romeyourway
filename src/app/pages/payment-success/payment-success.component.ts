import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BookingService } from '@services/booking.service';
declare global {
  interface Window {
    dataLayer: any[];
  }
}
@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss',
})
export class PaymentSuccessComponent implements OnInit, AfterViewInit {
  public bookingDetails: any;
  public paymentDetails: {
    orderId?: string;
    paymentCurrency?: string;
    paymentAmount?: string;
    cashfreePaymentId?: string;
    paymentCompletionTime?: string;
    bankReference?: string;
    paymentGroup?: string;
    bookingId?: string;
  } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _bookingService: BookingService,
  ) { }
  public amount?: string;
  public name?: string;
  public email?: string;
  public phone?: string;


  get shouldShowGstInvoiceDetails(): boolean {
    return true;
  }

  private toNumber(value: any): number {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  get bookingCharges(): number {
    const quantity = this.toNumber(this.bookingDetails?.quantity);
    const companyRate = this.toNumber(this.bookingDetails?.companyRate);
    const vendorRate = this.toNumber(this.bookingDetails?.vendorRate);
    const kidQuantity = this.toNumber(this.bookingDetails?.kidQuantity);
    const companyRateForKids = this.toNumber(this.bookingDetails?.companyRateForKids);
    const vendorRateForKids = this.toNumber(this.bookingDetails?.vendorRateForKids);

    return (quantity * (companyRate - vendorRate)) + (kidQuantity * (companyRateForKids - vendorRateForKids));
  }

  get cgstAmount(): number {
    return Math.floor(this.bookingCharges * 0.09);
  }

  get sgstAmount(): number {
    return Math.floor(this.bookingCharges * 0.09);
  }

  get amountReceived(): number {
    return this.bookingCharges + this.cgstAmount + this.sgstAmount;
  }

  get receiptNumber(): string {
    const id = this.bookingDetails?.id || this.paymentDetails?.bookingId || 'NA';
    const year = new Date().getFullYear();
    return `RYW${year}${id}`;
  }

  private formatISTDateTime(istTime?: string): string | undefined {
    if (!istTime) return undefined;
  
    try {
      const date = new Date(istTime);
  
      return date.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    } catch (error) {
      console.error("Invalid date:", error);
      return istTime;
    }
  }

  ngOnInit(): void {
    const paymentStatusResponse = sessionStorage.getItem('paymentStatusResponse');
    const travellerDetails = sessionStorage.getItem('travellerDetails');
    if (travellerDetails) {
      const data = JSON.parse(travellerDetails);
      this.name = data?.fullName;
      this.email = data?.email;
      this.phone = data?.countryCode + data?.phone;
    }
    if (!(paymentStatusResponse)) return;

    try {
      const data = JSON.parse(paymentStatusResponse);

      const orderId = data?.orderId;
      const paymentCurrency = data?.paymentCurrency
      const paymentAmount = data?.paymentAmount
      const cashfreePaymentId = data?.cashfreePaymentId
      const paymentCompletionTime = this.formatISTDateTime(data?.paymentCompletionTime)
      const bankReference = data?.bankReference
      const paymentGroup = data?.paymentGroup
      const bookingId = data?.bookingId

      this.paymentDetails = {
        orderId,
        paymentCurrency,
        paymentAmount,
        cashfreePaymentId,
        paymentCompletionTime,
        bankReference,
        paymentGroup,
        bookingId,
      };
    this.getBookingDetails();
    } catch (error) {
      console.error('Error parsing payment status response:', error);
    }
  }
  getBookingDetails(): void {
    const bookingId = this.paymentDetails?.bookingId;
    if (!bookingId) return;
    this._bookingService.getBookingDetails(bookingId).subscribe({
      next: (res) => {
        console.log({res:res?.listPayload[0]})
        this.bookingDetails = res?.listPayload[0];
        this.name = this.bookingDetails?.customeName;
        this.email = this.bookingDetails?.customerEmailId;
        this.phone = this.bookingDetails?.countryDialCode + this.bookingDetails?.customerMobile;
      },
    });
  }
  downloadReceipt(): void {
    const balanceAmount = Number(this.bookingDetails?.balanceAmount || 0);
    if (!(balanceAmount > 0)) {
      this.downloadInvoiceForZeroBookingAmount();
      return;
    }

    const element = document.getElementById('receipt');
  
    if (!element) return;
  
    html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false
    }).then(canvas => {
  
      const imgData = canvas.toDataURL('image/png');
  
      const pdf = new jsPDF('p', 'mm', 'a4');
  
      const pageWidth = pdf.internal.pageSize.getWidth();
  
      const imgWidth = pageWidth;
  
      const imgHeight =
        canvas.height * imgWidth / canvas.width;
  
      pdf.addImage(
        imgData,
        'PNG',
        0,
        0,
        imgWidth,
        imgHeight
      );
  
      const orderId =
        this.paymentDetails.orderId || 'receipt';
  
      pdf.save(`Receipt_${orderId}.pdf`);
  
    });
  
  }

  private downloadInvoiceForZeroBookingAmount(): void {
    console.log('first')
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-IN');
    const invoiceHtml = this.buildZeroBookingInvoiceHtml(dateStr);

    const tempWrapper = document.createElement('div');
    tempWrapper.style.position = 'fixed';
    tempWrapper.style.left = '-10000px';
    tempWrapper.style.top = '0';
    tempWrapper.style.width = '920px';
    tempWrapper.innerHTML = invoiceHtml;
    document.body.appendChild(tempWrapper);

    html2canvas(tempWrapper, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Invoice_${this.receiptNumber}.pdf`);
    }).finally(() => {
      document.body.removeChild(tempWrapper);
    });
  }

  private buildZeroBookingInvoiceHtml(dateStr: string): string {
    const adults = this.toNumber(this.bookingDetails?.quantity);
    const kids = this.toNumber(this.bookingDetails?.kidQuantity);
    const infants = this.toNumber(this.bookingDetails?.infantQuantity);
    const adultPrice = this.toNumber(this.bookingDetails?.companyRate);
    const kidPrice = this.toNumber(this.bookingDetails?.companyRateForKids);
    const discountAmount = this.toNumber(this.bookingDetails?.discount);
    const amountWithoutGst = (adults*adultPrice + kids*kidPrice) - discountAmount;
    const totalAmount = this.toNumber(this.bookingDetails?.gstAmount);
    const advanceAmount = this.toNumber(this.bookingDetails?.actualAmount);
    const balanceAmount = this.toNumber(this.bookingDetails?.balanceAmountWithGst);
    const status = this.bookingDetails?.status || 'PAID';
    const pickupDateTime = this.bookingDetails?.pickupDateTime || this.paymentDetails?.paymentCompletionTime || 'N/A';
    const pickupLocation = this.bookingDetails?.pickupHub || this.bookingDetails?.pickupPoint || 'N/A';
    const dropLocation = this.bookingDetails?.dropHub || this.bookingDetails?.dropPoint || '';
    const serviceName = this.bookingDetails?.category || 'Booking Charges';
    const termsLink = '/terms-and-condition';
    const businessName = 'Rome Your Way';

    const taxHeaders = this.shouldShowGstInvoiceDetails
      ? '<th>CGST 9%</th><th>SGST 9%</th>'
      : '';
    const taxValues = this.shouldShowGstInvoiceDetails
      ? `<td>Rs.${Math.floor(amountWithoutGst * 0.09)}</td><td>Rs.${Math.floor(amountWithoutGst * 0.09)}</td>`
      : '';

    return `
<style>
body{font-family:Inter,Arial,Helvetica,sans-serif;background:#f4f6fb;margin:0;padding:22px;color:#1f2937;font-size:12px;line-height:1.45}
.container{max-width:920px;margin:auto;background:#fff;border-radius:10px;box-shadow:0 8px 25px rgba(0,0,0,0.08);overflow:hidden}
.header{background:#0f172a;color:#fff;padding:22px 24px;display:flex;justify-content:space-between;align-items:flex-start;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.brand h1{margin:0;font-size:18px}
.brand p{margin:6px 0 0;font-size:11px;color:#cbd5f5;line-height:1.55}
.meta{text-align:right;font-size:11px;line-height:1.75}
.section{padding:18px 24px;padding-bottom:0}
.section-title{font-size:14px;font-weight:600;margin-bottom:10px;border-bottom:1px solid #e5e7eb;padding-bottom:5px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.card{background:#f9fafc;border:1px solid #e5e7eb;border-radius:6px;padding:10px 12px;font-size:11px}
.table{width:100%;border-collapse:collapse;margin-top:8px;table-layout:fixed}
.table th,.table td{border:1px solid #e5e7eb;padding:6px 5px;font-size:10px;word-wrap:break-word;vertical-align:top}
.table th{background:#f1f5f9;text-align:left;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.table.charges-line th,.table.charges-line td{font-size:9px;padding:5px 4px;text-align:center}
.badge{display:inline-block;background:#e0f2fe;color:#0369a1;padding:3px 8px;border-radius:10px;font-size:10px;margin-left:4px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.footer{padding:18px 24px;border-top:1px solid #e5e7eb;font-size:11px;color:#6b7280;text-align:center}
</style>
<div class="container">
<div class="header">
<div class="brand">
<h1>MYRAAN RENTALS AND ADVENTURES PVT. LTD.</h1>
<p>
Company ID : U52291GA2024OPC016682<br>
Address : Unit No. 71/195/A, Sattari, Ward No. 7, Hathwada, Near Marathi School,<br> Valpoi, North Goa, Goa - 403506<br>
TAX ID : AASCM2597H<br>
Phone : +91 88283 75421 | Email : sales@myraanrentals.com<br>
GSTIN : 30AASCM2597H1Z5<br>
</p>
</div>
<div class="meta">
<div><strong>Invoice No:</strong> ${this.receiptNumber}</div>
<div><strong>Invoice Date:</strong> ${dateStr}</div>
<div><strong>Payment Terms:</strong> PIA</div>
<div><strong>Due Date:</strong> ${dateStr}</div>
<div><strong>Place of Supply: </strong> GOA</div>
<div><strong>Status:</strong> ${status} <span class="badge">${status}</span></div>
</div>
</div>
<div class="section">
<div class="section-title">Billing Information</div>
<div class="grid">
<div class="card"><strong>Customer Name</strong><br>${this.name || 'N/A'}</div>
<div class="card"><strong>Phone</strong><br>${this.phone || 'N/A'}</div>
<div class="card"><strong>Company Name &amp; GSTIN</strong><br>${this.bookingDetails?.customerCompanyName || ''} ${this.bookingDetails?.customerCompanyGST || ''}</div>
<div class="card"><strong>Address &amp; Pincode</strong><br>${this.bookingDetails?.customerCompanyAddress || ''} ${this.bookingDetails?.pincode || ''}</div>
</div>
</div>
<div class="section">
<div class="section-title">Schedule Details</div>
<table class="table">
<tr><th>Activity Date &amp; Time</th><th>Boarding Location</th><th>Total Pax</th></tr>
<tr>
<td>${pickupDateTime}</td>
<td>${pickupLocation} ${dropLocation}</td>
<td>Adult: ${adults} | Kid: ${kids} | Infant: ${infants}</td>
</tr>
</table>
</div>
<div class="section">
<div class="section-title">Charges Breakdown</div>
<table class="table charges-line">
<tr>
<th>Description</th>
<th>Adults</th>
<th>Kids</th>
<th>Discount</th>
${taxHeaders}
<th>Total</th>
<th>Advance Paid</th>
<th>Balance Due</th>
</tr>
<tr>
<td>${serviceName}</td>
<td>${adults} X ${adultPrice.toFixed(2)}</td>
<td>${kids} X ${kidPrice.toFixed(2)}</td>
<td>Rs.${discountAmount.toFixed(2)}</td>
${taxValues}
<td>Rs.${totalAmount.toFixed(2)}</td>
<td>Rs.${advanceAmount.toFixed(2)}</td>
<td>Rs.${balanceAmount.toFixed(2)}</td>
</tr>
</table>
</div>
<div class="section">
<div class="section-title">Terms &amp; Conditions</div>
<p style="font-size:11px;line-height:1.65;margin:0">
• Standard Rental Timings: 09:00 AM - 09:00 AM<br>
• Valid driving license &amp; one original ID required for renting<br>
• Vehicle cannot be used for interstate travel<br>
• Fuel Policy: Reserved To Reserved<br>
• Total amount is exclusive of any toll &amp; parking charges<br>
• ‼️ PLEASE CARRY CASH FOR BALANCE PAYMENT 🙏 🚫 NO UPI / 🚫 NO CARD<br>
• Check additional T&amp;Cs here <a href="${termsLink}" target="_blank" rel="noopener noreferrer">terms-and-condition</a>
</p>
</div>
<div class="footer">
This is a computer generated invoice and does not require a signature.<br>
Thank you for choosing ${businessName}.
</div>
</div>`;
  }

  ngAfterViewInit(): void {
    // Push to GA/GTM ONLY after details are set.
    // If data can arrive later (async), call this again after you set paymentDetails.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      value: this.paymentDetails.paymentAmount ?? 0, // GA4 expects number
      transaction_id: this.paymentDetails.cashfreePaymentId ?? '',
      currency: this.paymentDetails.paymentCurrency ?? 'INR',
      name: this.name ?? '',
      email: this.email ?? '',
      phone: this.phone ?? '',

    });
  }
}
