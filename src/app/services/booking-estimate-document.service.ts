import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export type BookingEstimateRow = { [key: string]: any };

@Injectable({
  providedIn: 'root',
})
export class BookingEstimateDocumentService {
  private getBookingEstimateHtmlTemplate(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estimate</title>
<style>
body{font-family:Inter,Arial,Helvetica,sans-serif;background:#f4f6fb;margin:0;padding:22px;color:#1f2937;font-size:12px;line-height:1.45}
.container{max-width:920px;margin:auto;background:#fff;border-radius:10px;box-shadow:0 8px 25px rgba(0,0,0,0.08);overflow:hidden}
.header{background:#ff5722;color:#fff;padding:22px 24px;display:flex;justify-content:space-between;align-items:flex-start;-webkit-print-color-adjust:exact;print-color-adjust:exact}
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
@media print{.header,.badge,.table th,.card{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style>
</head>
<body>
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
                <div><strong>Estimate No:</strong> {{INVOICE_ID}}</div>
                <div><strong>Estimate Date:</strong> {{INVOICE_DATE}}</div>
                <div><strong>Payment Terms:</strong> PIA</div>
                <div><strong>Due Date:</strong> {{DUE_DATE}}</div>
                <div><strong>Place of Supply: </strong> GOA</div>
                <div><strong>Status:</strong> {{STATUS}} <span class="badge">{{STATUS_BADGE}}</span></div>
            </div>
        </div>
<div class="section">
<div class="section-title">Billing Information</div>
<div class="grid">
<div class="card"><strong>Customer Name</strong>{{CUSTOMER_NAME}}</div>
<div class="card"><strong>Phone</strong>{{CUSTOMER_PHONE}}</div>
{{GST_BILLING_EXTRA_CARDS}}
</div>
</div>
<div class="section">
<div class="section-title">Schedule Details</div>
<table class="table">
<tr>
<th>Activity Date &amp; Time</th>
<th>Boarding Location</th>
<th>Total Pax</th>
</tr>
<tr>
<td>{{PICKUP_SCHEDULE}}</td>
<td>{{SCHEDULE_ACTIVITY_LOCATION}}</td>
<td>Adult: {{ADULTS}} | Kid: {{KIDS}} | Infant: {{INFANTS}}</td>
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
{{TAX_COL_HEADERS}}
<th>Total</th>
</tr>
<tr>
<td>{{SERVICE_NAME}}</td>
<td>{{ADULTS}} X {{ADULT_PRICE}}</td>
<td>{{KIDS}} X {{KID_PRICE}}</td>
<td>₹{{DISCOUNT_AMOUNT}}</td>
{{TAX_COL_VALUES}}
<td>₹{{TOTAL_AMOUNT}}</td>
</tr>
</table>
</div>
<div class="section">
<div class="section-title">Payment Segregation &amp; Account Details</div>
Total Amount: ₹{{TOTAL_AMOUNT}}<br>
<strong>Advance Token: ₹{{BOOKING_AMOUNT}}</strong><br>
Balance Amount: ₹{{BALANCE_AMOUNT}}<br>
<br>
<p style="font-size:11px;line-height:1.65;margin:0">
-UPI ID: myraan7718@idfcbank<br>
-Payment Link: <br>
-Bank Holder: MYRAAN RENTALS AND ADVENTURES GOA PRIVATE LIMITED<br>
-Account Number: 10232609571<br>
-IFSC Code: IDFB0042406<br>
-Branch: VASCO BRANCH<br>
-Bank name: IDFC FIRST<br>
-A/C Type: Current<br>
-SWIFT Code(*International Money Transfers*): IDFBINBBMUM<br>
<br>• Check additional T&amp;Cs here <a href="{{TERMS_LINK_URL}}" target="_blank" rel="noopener noreferrer">terms-and-condition</a>
</p>
</div>
<div class="footer">
This is a computer generated invoice and does not require a signature.<br>
Thank you for choosing {{BUSINESS_NAME}}.
</div>
</div>
</body>
</html>`;
  }

  private getBookingEstimateVehicleHtmlTemplate(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estimate</title>
<style>
body{font-family:Inter,Arial,Helvetica,sans-serif;background:#f4f6fb;margin:0;padding:22px;color:#1f2937;font-size:12px;line-height:1.45}
.container{max-width:920px;margin:auto;background:#fff;border-radius:10px;box-shadow:0 8px 25px rgba(0,0,0,0.08);overflow:hidden}
.header{background:#0f172a;color:#fff;padding:10px 24px;display:flex;justify-content:space-between;align-items:flex-start;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.brand h1{margin:0;font-size:18px}
.brand p{margin:6px 0 0;font-size:11px;color:#cbd5f5;line-height:1.55}
.meta{text-align:right;font-size:11px;line-height:1.75}
.section{padding:12px 24px;padding-bottom:0px;}
.section-title{font-size:14px;font-weight:600;margin-bottom:10px;border-bottom:1px solid #e5e7eb;padding-bottom:5px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.card{background:#f9fafc;border:1px solid #e5e7eb;border-radius:6px;padding:10px 12px;font-size:11px}
.table{width:100%;border-collapse:collapse;margin-top:8px;table-layout:fixed}
.table th,.table td{border:1px solid #e5e7eb;padding:6px 5px;font-size:10px;word-wrap:break-word;vertical-align:top}
.table th{background:#f1f5f9;text-align:left;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.table.charges-line th,.table.charges-line td{font-size:9px;padding:5px 4px;text-align:center}
.totals{margin-top:12px;width:100%;max-width:380px;margin-left:auto;border-collapse:collapse}
.totals td{padding:6px 8px;font-size:11px}
.totals tr.discount td{color:#16a34a;font-weight:600}
.totals tr.total td{font-weight:700;border-top:2px solid #111827}
.badge{display:inline-block;background:#e0f2fe;color:#0369a1;padding:3px 8px;border-radius:10px;font-size:10px;margin-left:4px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.footer{padding:18px 24px;border-top:1px solid #e5e7eb;font-size:11px;color:#6b7280;text-align:center}
@media print{.header,.badge,.table th,.card{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style>
</head>
<body>
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
                <div><strong>Estimate No:</strong> {{INVOICE_ID}}</div>
                <div><strong>Estimate Date:</strong> {{INVOICE_DATE}}</div>
                <div><strong>Payment Terms:</strong> PIA</div>
                <div><strong>Due Date:</strong> {{DUE_DATE}}</div>
                <div><strong>Place of Supply: </strong> GOA</div>
                <div><strong>Status:</strong> {{STATUS}} <span class="badge">{{STATUS_BADGE}}</span></div>
            </div>
        </div>
<div class="section">
<div class="section-title">Billing Information</div>
<div class="grid">
<div class="card"><strong>Customer Name</strong>{{CUSTOMER_NAME}}</div>
<div class="card"><strong>Phone</strong>{{CUSTOMER_PHONE}}</div>
{{GST_BILLING_EXTRA_CARDS}}
</div>
</div>


<div class="section">
<div class="section-title">Schedule Details</div>
<table class="table">
                <tr>
                    <th>Pickup Scheduled</th>
                    <th>Drop Scheduled</th>
                </tr>
                <tr>
                    <td>{{PICKUP_SCHEDULE}} | {{SCHEDULE_PICKUP_LOCATION}}</td>
                    <td>{{DROP_SCHEDULE}} | {{SCHEDULE_DROP_LOCATION}}</td>
                </tr>
            </table>
</div>
<div class="section">
<div class="section-title">Charges Breakdown</div>
<table class="table charges-line">
<tr>
<th>Description</th>
<th>Qty</th>
<th>Duration</th>
<th>Per day rent</th>
<th>Pick &amp; drop</th>
<th>Discount</th>
{{TAX_COL_HEADERS}}
<th>Total</th>

</tr>
<tr>
<td>{{ITEM_1_DESC_HTML}}</td>
<td>{{ITEM_1_QTY}}</td>
<td>{{RENTAL_DURATION}}</td>
<td>₹{{ITEM_1_PRICE}}</td>
<td>₹{{PICK_DROP_AMT}}</td>
<td>₹{{DISCOUNT_AMOUNT}}</td>
{{TAX_COL_VALUES}}
<td>₹{{TOTAL_AMOUNT}}</td>

</tr>
</table>
</div>

<div class="section">
<div class="section-title">Payment Segregation &amp; Account Details</div>
Total Amount: ₹{{TOTAL_AMOUNT}}<br>
<strong>Advance Token: ₹{{BOOKING_AMOUNT}}</strong><br>
Balance Amount: ₹{{BALANCE_AMOUNT}}<br>
<br>
 Refundable Security Deposit: ₹{{SECURITY_DEPOSIT}}<br>
<br>
<p style="font-size:11px;line-height:1.65;margin:0">
-UPI ID: myraan7718@idfcbank<br>
-Payment Link: <br>
-Bank Holder: MYRAAN RENTALS AND ADVENTURES GOA PRIVATE LIMITED<br>
-Account Number: 10232609571<br>
-IFSC Code: IDFB0042406<br>
-Branch: VASCO BRANCH<br>
-Bank name: IDFC FIRST<br>
-A/C Type: Current<br>
-SWIFT Code(*International Money Transfers*): IDFBINBBMUM<br>
<br>• Check additional T&amp;Cs here <a href="{{TERMS_LINK_URL}}" target="_blank" rel="noopener noreferrer">terms-and-condition</a>
</p>
</div>
<div class="footer">
This is a computer generated invoice and does not require a signature.<br>
Thank you for choosing {{BUSINESS_NAME}}.
</div>
</div>
</body>
</html>`;
  }

  private toNumber(value: any): number {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  private formatPickupSchedule(value?: string | number | null): string {
    if (value === undefined || value === null || value === '') return 'N/A';
    try {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return String(value);
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).formatToParts(date);
      const get = (type: Intl.DateTimeFormatPartTypes) =>
        parts.find((p) => p.type === type)?.value ?? '';
      return `${get('day')}-${get('month')}-${get('year')} ${get('hour')}:${get('minute')}`;
    } catch {
      return String(value);
    }
  }

  private parseRentalDurationDays(pd: any): number {
    const d = pd?.rentalDuration ?? pd?.durationDays;
    if (typeof d === 'number' && d > 0) return Math.floor(d);
    if (typeof d === 'string' && d.trim()) {
      const m = d.match(/(\d+)/);
      if (m) return Math.max(1, parseInt(m[1], 10));
    }
    const pu = pd?.pickupDateTime ?? pd?.pickupDate;
    const dr = pd?.dropDateTime ?? pd?.dropDate;
    if (pu && dr) {
      const ms = new Date(dr).getTime() - new Date(pu).getTime();
      if (ms > 0) return Math.max(1, Math.ceil(ms / 86400000));
    }
    return 1;
  }

  fillBookingReceiptPlaceholders(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pd: any,
    options?: { companyName?: string; isVehicle?: boolean },
  ): Record<string, string> {
    const isVehicle = !!options?.isVehicle;
    const year = new Date().getFullYear();
    const bookingKey = String(pd.bookingId ?? pd.id ?? '');
    const invoiceId = `RYW${year}${bookingKey || 'NA'}`;
    const today = new Date().toLocaleDateString('en-IN');
    const needGst = !!pd.needGstInvoice;

    const adults = this.toNumber(pd.quantity ?? pd.adultCount);
    const kids = this.toNumber(pd.quantityForKids ?? pd.kidsCount ?? pd.kidQuantity);
    const infants = this.toNumber(pd.infantCount);
    const adultPrice = this.toNumber(pd.companyRate);
    const kidPrice = this.toNumber(pd.companyRateForKids);
    const discount = this.toNumber(pd.discountAmount ?? pd.discount);

    let subtotal = Math.max(adults * adultPrice + kids * kidPrice - discount, 0);
    let cgst = Math.floor(subtotal * 0.09);
    let sgst = Math.floor(subtotal * 0.09);
    let computedTotal = subtotal + cgst + sgst;
    let totalAmount = this.toNumber(pd.totalAmount) || computedTotal;

    if (isVehicle) {
      const durationDays = this.parseRentalDurationDays(pd);
      const vehQty = this.toNumber(pd.quantity ?? 1);
      const rate = this.toNumber(pd.companyRate);
      const pickDrop = this.toNumber(
        pd.pickDropCharge ?? pd.panddAmount ?? pd.pickDropAmount ?? 0,
      );
      const vehLine = Math.max(vehQty * rate * durationDays + pickDrop - discount, 0);
      subtotal = vehLine;
      cgst = Math.floor(subtotal * 0.09);
      sgst = Math.floor(subtotal * 0.09);
      computedTotal = needGst ? subtotal + cgst + sgst : subtotal;
      totalAmount = this.toNumber(pd.totalAmount) || computedTotal;
    }

    const taxHeaders = needGst ? '<th>CGST 9%</th><th>SGST 9%</th>' : '';
    const taxValues = needGst
      ? `<td>₹${cgst}</td><td>₹${sgst}</td>`
      : '';

    const gstCards = needGst
      ? `<div class="card"><strong>Company Name &amp; GSTIN</strong><br>${this.escapeHtml(String(pd.customerCompanyName ?? ''))} ${this.escapeHtml(String(pd.customerCompanyGST ?? ''))}</div>
<div class="card"><strong>Address &amp; Pincode</strong><br>${this.escapeHtml(String(pd.customerCompanyAddress ?? ''))} ${this.escapeHtml(String(pd.pincode ?? ''))}</div>`
      : '';

    const scheduleLoc = [
      pd.activityLocation,
      pd.pickupHub,
      pd.dropHub,
    ]
      .filter((v) => v != null && String(v).trim() !== '')
      .join(' | ') || 'N/A';

    const pickupLocStr =
      [pd.pickupHub, pd.pickupLocation, pd.pickupPoint]
        .filter((v) => v != null && String(v).trim() !== '')
        .join(' | ') || 'N/A';
    const dropLocStr =
      [pd.dropHub, pd.dropLocation, pd.dropPoint]
        .filter((v) => v != null && String(v).trim() !== '')
        .join(' | ') || 'N/A';

    const custName =
      pd.customeName ?? pd.customerName ?? options?.companyName ?? 'N/A';
    const dial = String(pd.countryDialCode ?? '');
    const mobile = String(pd.customerMobile ?? pd.customerPhone ?? '');
    const phone = `${dial}${mobile}`.trim() || 'N/A';

    const status = String(pd.status ?? 'ESTIMATE');
    const pickupSchedule = this.formatPickupSchedule(
      pd.pickupDateTime ?? pd.paymentCompletionTime,
    );
    const dropSchedule = this.formatPickupSchedule(
      pd.dropDateTime ?? pd.dropDate,
    );

    const durationDays = this.parseRentalDurationDays(pd);
    const rentalDurationLabel =
      pd.rentalDuration != null && String(pd.rentalDuration).trim() !== ''
        ? String(pd.rentalDuration)
        : pd.duration != null && String(pd.duration).trim() !== ''
          ? String(pd.duration)
          : `${durationDays} day(s)`;

    const vehQty = this.toNumber(pd.quantity ?? 1);
    const pickDropAmt = this.toNumber(
      pd.pickDropCharge ?? pd.panddAmount ?? pd.pickDropAmount ?? 0,
    );

    const cat = String(pd.category ?? pd.categoryTypeName ?? pd.companyName ?? 'Vehicle rental');
    const subCat = pd.subCategory != null ? String(pd.subCategory) : '';
    const itemDescHtml = subCat
      ? `${this.escapeHtml(cat)}<br>${this.escapeHtml(subCat)}`
      : this.escapeHtml(cat);

    const securityDeposit = this.toNumber(pd.securityAmount);

    const totalForTemplate = needGst
      ? this.toNumber(pd.gstAmount)
      : totalAmount;

    const bookingForTemplate = needGst
      ? this.toNumber(pd.bookingAmountWithGst)
      : this.toNumber(
          pd.bookingAmount ?? pd.actualAmount ?? pd.advancePaid ?? pd.paidAmount,
        );

    return {
      INVOICE_ID: invoiceId,
      INVOICE_DATE: today,
      DUE_DATE: today,
      STATUS: status,
      STATUS_BADGE: status,
      CUSTOMER_NAME: this.escapeHtml(custName),
      CUSTOMER_PHONE: this.escapeHtml(phone),
      GST_BILLING_EXTRA_CARDS: gstCards,
      PICKUP_SCHEDULE: pickupSchedule,
      SCHEDULE_ACTIVITY_LOCATION: this.escapeHtml(scheduleLoc),
      DROP_SCHEDULE: dropSchedule,
      SCHEDULE_PICKUP_LOCATION: this.escapeHtml(pickupLocStr),
      SCHEDULE_DROP_LOCATION: this.escapeHtml(dropLocStr),
      ADULTS: String(adults),
      KIDS: String(kids),
      INFANTS: String(infants),
      SERVICE_NAME: this.escapeHtml(
        String(pd.category ?? pd.categoryTypeName ?? pd.companyName ?? 'Service'),
      ),
      ITEM_1_DESC_HTML: itemDescHtml,
      ITEM_1_QTY: String(vehQty),
      RENTAL_DURATION: this.escapeHtml(rentalDurationLabel),
      ITEM_1_PRICE: adultPrice.toFixed(2),
      PICK_DROP_AMT: pickDropAmt.toFixed(2),
      ADULT_PRICE: adultPrice.toFixed(2),
      KID_PRICE: kidPrice.toFixed(2),
      DISCOUNT_AMOUNT: discount.toFixed(2),
      TAX_COL_HEADERS: taxHeaders,
      TAX_COL_VALUES: taxValues,
      TOTAL_AMOUNT: totalForTemplate.toFixed(2),
      BOOKING_AMOUNT: bookingForTemplate.toFixed(2),
      BALANCE_AMOUNT: this.toNumber(pd.balanceAmount).toFixed(2),
      SECURITY_DEPOSIT: securityDeposit.toFixed(2),
      TERMS_LINK_URL: String(pd.termsLink ?? '/terms-and-condition'),
      BUSINESS_NAME: 'Rome Your Way',
    };
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  generateEstimatePdf(
    row: BookingEstimateRow,
    options?: { companyName?: string },
  ): Promise<boolean> {
    const {
      bookingId,
      id,
      customeName,
      customerName,
      countryDialCode,
      customerMobile,
      customerEmailId,
      emailId,
      categoryTypeName,
      categoryType,
      pickupDateTime,
      pickupHub,
      pickupLocation,
      dropHub,
      dropLocation,
      boardingLocation,
      activityLocation,
      quantity,
      adultCount,
      quantityForKids,
      kidsCount,
      kidQuantity,
      infantCount,
      totalAmount,
      balanceAmount,
      securityAmount,
      actualAmount,
      advancePaid,
      paidAmount,
      bookingAmount,
      companyRate,
      companyRateForKids,
      discountAmount,
      discount,
      tax,
      paymentType,
      paymentMode,
      cashfreePaymentId,
      transactionId,
      termsLink,
      vendorName,
      updatedAt,
      needGstInvoice: rowNeedGstInvoice,
      category,
      customerCompanyName,
      customerCompanyGST,
      customerCompanyAddress,
      pincode,
      status,
    } = row ?? {};

    const orderId = String(bookingId ?? id ?? '');
    const paymentCompletionTime =
      pickupDateTime != null
        ? new Date(pickupDateTime).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        : updatedAt != null
          ? new Date(updatedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
          : 'N/A';

    const paymentDetails: BookingEstimateRow = {
      ...row,
      orderId: orderId || 'N/A',
      bookingId: orderId || id,
      id,
      paymentCompletionTime,
      cashfreePaymentId: cashfreePaymentId ?? transactionId ?? 'N/A',
      paymentCurrency: row?.['paymentCurrency'] ?? 'INR',
      customeName: customeName ?? customerName,
      customerEmailId: customerEmailId ?? emailId,
      categoryTypeName: categoryTypeName ?? categoryType,
      pickupHub: pickupHub ?? pickupLocation,
      dropHub: dropHub ?? dropLocation,
      boardingLocation: boardingLocation ?? activityLocation,
      quantity: quantity ?? adultCount,
      quantityForKids: quantityForKids ?? kidsCount ?? kidQuantity,
      infantCount,
      totalAmount,
      balanceAmount,
      securityAmount,
      actualAmount: actualAmount ?? advancePaid ?? paidAmount ?? bookingAmount,
      companyRate,
      companyRateForKids,
      discountAmount: discountAmount ?? discount,
      tax,
      paymentType: paymentType ?? paymentMode,
      termsLink,
      vendorName,
      needGstInvoice: rowNeedGstInvoice,
      category,
      customerCompanyName,
      customerCompanyGST,
      customerCompanyAddress,
      pincode,
      status,
      countryDialCode,
      customerMobile,
    };

    const estimateType = (
      paymentDetails['categoryTypeName'] ??
      paymentDetails['categoryType'] ??
      ''
    )
      .toString()
      .toLowerCase();
    const isVehicle = estimateType === 'car' || estimateType === 'bike';
    const placeholders = this.fillBookingReceiptPlaceholders(paymentDetails, {
      ...options,
      isVehicle,
    });
    let html = isVehicle
      ? this.getBookingEstimateVehicleHtmlTemplate()
      : this.getBookingEstimateHtmlTemplate();

    Object.keys(placeholders).forEach((key) => {
      const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(
        new RegExp('{{' + escapedKey + '}}', 'g'),
        String(placeholders[key] ?? ''),
      );
    });

    const fileName = `Estimate_${placeholders['INVOICE_ID'] ?? 'booking'}.pdf`;
    return this.renderEstimateHtmlToPdf(html, fileName);
  }

  /** Renders full HTML document off-screen and downloads a single-page PDF (scaled to fit A4). */
  private async renderEstimateHtmlToPdf(html: string, fileName: string): Promise<boolean> {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const tempWrapper = document.createElement('div');
    tempWrapper.style.cssText =
      'position:fixed;left:-10000px;top:0;width:920px;background:#f4f6fb;padding:0;';
    const styleTexts = Array.from(doc.querySelectorAll('head style'))
      .map((el) => el.textContent || '')
      .join('\n');
    if (styleTexts) {
      const s = document.createElement('style');
      s.textContent = styleTexts;
      tempWrapper.appendChild(s);
    }
    const inner = document.createElement('div');
    inner.innerHTML = doc.body.innerHTML;
    tempWrapper.appendChild(inner);
    document.body.appendChild(tempWrapper);

    try {
      await new Promise<void>((r) => setTimeout(r, 100));
      const canvas = await html2canvas(tempWrapper, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#f4f6fb',
        logging: false,
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      let imgW = pageW;
      let imgH = (canvas.height * imgW) / canvas.width;
      if (imgH > pageH) {
        const scale = pageH / imgH;
        imgW *= scale;
        imgH *= scale;
      }
      const x = (pageW - imgW) / 2;
      const y = (pageH - imgH) / 2;
      pdf.addImage(imgData, 'PNG', x, y, imgW, imgH);
      pdf.save(fileName);
      return true;
    } catch {
      return false;
    } finally {
      document.body.removeChild(tempWrapper);
    }
  }
}
