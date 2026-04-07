import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export type BoardingPassRow = { [key: string]: any };

@Injectable({
  providedIn: 'root',
})
export class BoardingPassDocumentService {
  private getBoardingPassHtmlTemplate(type: 'vehicle' | 'activity'): string {
    const baseStyles = `body{font-family:'Inter',Arial,sans-serif;background:#f4f6fb;margin:0;padding:20px;color:#1f2937}
.voucher{max-width:900px;margin:auto;background:white;border-radius:10px;box-shadow:0 8px 25px rgba(0,0,0,0.08);overflow:hidden}
.header{background:#ff5722;color:white;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.brand{display:flex;align-items:center;gap:10px}
.logo{height:36px;background:white;border-radius:6px;padding:3px}
.brand-name{font-weight:600;font-size:16px}
.section{padding:20px}
.grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}
.label{font-size:11px;color:#6b7280}
.value{font-weight:600;margin-top:3px}
.table{width:100%;border-collapse:collapse;margin-top:15px}
.table th,.table td{border:1px solid #e5e7eb;padding:8px;font-size:13px;text-align:center}
.table th{background:#f1f5f9;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.coordinator-section{background:#f0fdf4;border:1px solid #bbf7d0;padding:12px;border-radius:6px;margin-top:12px;font-size:13px}
.footer{display:flex;justify-content:space-between;align-items:center;padding:20px;flex-wrap:wrap}
.note{font-size:12px;color:#6b7280}
@media (max-width:768px){.grid{grid-template-columns:1fr}.header{flex-direction:column;align-items:flex-start;gap:10px}.footer{flex-direction:column;align-items:flex-start;gap:12px}}
@media print{.header,.table th{-webkit-print-color-adjust:exact;print-color-adjust:exact}}`;
    if (type === 'vehicle') {
      return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Boarding Pass for Vehicle</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>${baseStyles}</style>
</head>
<body>
<div class="voucher">
<div class="header">
<div class="brand">
<img class="logo" src="{{LOGO_URL}}" alt="Logo" onerror="this.style.display='none'">
<div class="brand-name">{{BUSINESS_NAME}}</div>
</div>
<div>Booking ID: <strong>{{BOOKING_ID}}</strong></div>
</div>
<div class="section">
<div class="grid">
<div><div class="label">Guest</div><div class="value">{{CUSTOMER_NAME}}</div></div>
<div><div class="label">Phone</div><div class="value">{{CUSTOMER_PHONE}}</div></div>
<div><div class="label">Service</div><div class="value">{{SERVICE_NAME}}</div></div>
<div><div class="label">Permit Type</div><div class="value">{{PERMIT_TYPE}}</div></div>
<div><div class="label">Payment Type</div><div class="value">{{PAYMENT_TYPE}}</div></div>
<div><div class="label">Reservation Date</div><div class="value">{{RESERVATION_DATE}}</div></div>
</div>
<table class="table">
<tr><th>Pickup Date</th><th>Pickup Time</th><th>Pickup Location</th></tr>
<tr><td>{{PICKUP_DATE}}</td><td>{{PICKUP_TIME}}</td><td>{{PICKUP_LOCATION}}</td></tr>
<tr><th>Drop Date</th><th>Drop Time</th><th>Drop Location</th></tr>
<tr><td>{{DROP_DATE}}</td><td>{{DROP_TIME}}</td><td>{{DROP_LOCATION}}</td></tr>
<tr><th>Rental Duration</th><th>Quantity</th><th>Refundable Deposit</th></tr>
<tr><td>{{RENTAL_DURATION}}</td><td>{{VEHICLE_QUANTITY}}</td><td>₹{{SECURITY_DEPOSIT}}</td></tr>
<tr><th>Total Amount</th><th>Advance Paid</th><th>Balance Due</th></tr>
<tr><td>₹{{TOTAL_AMOUNT}}</td><td>₹{{ACTUAL_AMOUNT}}</td><td>₹{{VEHICLE_BALANCE_TOTAL}}</td></tr>
</table>
{{COORDINATOR_SECTION}}
</div>
<div class="footer">
<div>
<div style="font-size:13px">
<strong>Terms &amp; Conditions</strong><br>
• Balance Due mentioned is including refundable deposit ₹{{SECURITY_DEPOSIT}}<br>
• Standard Rental Timings: 09:00 AM - 09:00 AM<br>
• Valid driving license &amp; one original ID required for renting<br>
• Vehicle cannot be used for interstate travel<br>
• Fuel Policy: Reserved To Reserved<br>
• Total amount is exclusive of any toll &amp; parking charges<br>
• ‼️ PLEASE CARRY CASH FOR BALANCE PAYMENT 🙏 🚫 NO UPI / 🚫 NO CARD<br>
• Check additional T&amp;Cs here <a href="{{TERMS_URL}}" target="_blank" rel="noopener noreferrer">terms-and-condition</a>
</div>
</div>
</div>
</div>
</body>
</html>`;
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Boarding Pass for Activity</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>${baseStyles}</style>
</head>
<body>
<div class="voucher">
<div class="header">
<div class="brand">
<img class="logo" src="{{LOGO_URL}}" alt="Logo" onerror="this.style.display='none'">
<div class="brand-name">{{BUSINESS_NAME}}</div>
</div>
<div>Booking ID: <strong>{{BOOKING_ID}}</strong></div>
</div>
<div class="section">
<div class="grid">
<div><div class="label">Guest</div><div class="value">{{CUSTOMER_NAME}}</div></div>
<div><div class="label">Phone</div><div class="value">{{CUSTOMER_PHONE}}</div></div>
<div><div class="label">Service</div><div class="value">{{SERVICE_NAME}}</div></div>
<div><div class="label">Tour Type</div><div class="value">Activity</div></div>
<div><div class="label">Payment Type</div><div class="value">{{PAYMENT_TYPE}}</div></div>
<div><div class="label">Reservation Date</div><div class="value">{{RESERVATION_DATE}}</div></div>
</div>
<table class="table">
<tr><th>Activity Date</th><th>Activity Time</th><th>Boarding Point</th></tr>
<tr><td>{{PICKUP_DATE}}</td><td>{{PICKUP_TIME}}</td><td>{{BOARDING_POINT}}</td></tr>
<tr><th>Adult Count</th><th>Kid Count</th><th>Total Pax</th></tr>
<tr><td>{{ADULTS}}</td><td>{{KIDS}}</td><td>{{TOTAL_PAX}}</td></tr>
<tr><th>Total Amount</th><th>Advance Paid</th><th>Balance Due</th></tr>
<tr><td>₹{{TOTAL_AMOUNT}}</td><td>₹{{ACTUAL_AMOUNT}}</td><td>₹{{BALANCE_AT_BOARDING}}</td></tr>
</table>
{{COORDINATOR_SECTION}}
</div>
<div class="footer">
<div>
<div style="font-size:13px">
<strong>Terms &amp; Conditions</strong><br>
• Kindly report 30 minutes before the scheduled time.<br>
• Government ID needs to be produced if requested.<br>
• ‼️ PLEASE CARRY CASH FOR BALANCE PAYMENT 🙏 🚫 NO UPI / 🚫 NO CARD<br>
• Check additional T&amp;Cs here <a href="{{TERMS_URL}}" target="_blank" rel="noopener noreferrer">terms-and-condition</a>
</div>
</div>
</div>
</div>
</body>
</html>`;
  }

  private toNumber(value: any): number {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  private escapeHtml(text: string): string {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  private formatDateIST(value?: string | number | null): string {
    if (value === undefined || value === null || value === '') return 'N/A';
    try {
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return String(value);
      return d.toLocaleDateString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return String(value);
    }
  }

  private formatTimeIST(value?: string | number | null): string {
    if (value === undefined || value === null || value === '') return 'N/A';
    try {
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return 'N/A';
      return d.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    } catch {
      return 'N/A';
    }
  }

  private rentalDurationLabel(pd: any): string {
    const td = pd?.totalDays;
    if (typeof td === 'number' && td > 0) return `${td} day(s)`;
    if (typeof td === 'string' && td.trim()) return td;
    const pu = pd?.pickupDateTime ?? pd?.pickupDate;
    const dr = pd?.dropDateTime ?? pd?.dropDate;
    if (pu && dr) {
      const ms = new Date(dr).getTime() - new Date(pu).getTime();
      if (ms > 0) return `${Math.max(1, Math.ceil(ms / 86400000))} day(s)`;
    }
    return '1 day(s)';
  }

  fillBoardingPassPlaceholders(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pd: any,
    opts: {
      companyName?: string;
      logoUrl?: string;
      qrCodeUrl?: string;
    },
    type: 'vehicle' | 'activity',
  ): Record<string, string> {
    const needGst = !!pd.needGstInvoice;
    const bookingId = String(pd.bookingId ?? pd.id ?? 'N/A');
    const custName = pd.customeName ?? pd.customerName ?? 'N/A';
    const dial = String(pd.countryDialCode ?? '');
    const mobile = String(pd.customerMobile ?? pd.customerPhone ?? '');
    const phone = `${dial}${mobile}`.trim() || 'N/A';

    const pickupTs = pd.pickupDateTime ?? pd.pickupDate;
    const dropTs = pd.dropDateTime ?? pd.dropDate;

    const totalForPass = needGst
      ? this.toNumber(pd.gstAmount)
      : this.toNumber(pd.totalAmount);
    const advanceForPass = needGst
      ? this.toNumber(pd.bookingAmountWithGst)
      : this.toNumber(pd.actualAmount ?? pd.bookingAmount ?? pd.advancePaid ?? pd.paidAmount);

    const vehicleBalance = this.toNumber(
      pd.balanceAmountWithGst ?? pd.balanceAmount ?? pd.vehicleBalanceTotal,
    );
    const vehicleBalanceWithDeposit = vehicleBalance + this.toNumber(pd.securityAmount);
    const balanceAtBoarding = this.toNumber(
      pd.balanceAmountWithGst ?? pd.balanceAmount ?? pd.balanceAtBoarding,
    );

    let coordinatorHtml = '';
    const cName = pd.coordinatorName ?? pd.coordinator?.name;
    const cPhone = pd.coordinatorPhone ?? pd.coordinatorPhoneNumber ?? pd.coordinator?.phone;
    const cEmail = pd.coordinatorEmail ?? pd.coordinator?.email;
    if (cName || cPhone || cEmail || opts.qrCodeUrl) {
      const parts: string[] = [];
      if (cName) parts.push(`<strong>Coordinator:</strong> ${this.escapeHtml(String(cName))}`);
      if (cPhone) parts.push(`<strong>Phone:</strong> ${this.escapeHtml(String(cPhone))}`);
      if (cEmail) parts.push(`<strong>Email:</strong> ${this.escapeHtml(String(cEmail))}`);
      if (opts.qrCodeUrl) {
        const qr = String(opts.qrCodeUrl).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
        parts.push(
          `<div style="margin-top:8px"><img src="${qr}" alt="QR" style="max-width:120px;height:auto"/></div>`,
        );
      }
      coordinatorHtml = `<div class="coordinator-section">${parts.join('<br>')}</div>`;
    }

    const logoUrl = String(opts.logoUrl ?? '').trim();
    const adults = this.toNumber(pd.quantity ?? pd.adultCount);
    const kids = this.toNumber(pd.quantityForKids ?? pd.kidsCount ?? pd.kidQuantity);
    const infants = this.toNumber(pd.infantCount);
    const totalPax = adults + kids + infants;

    const boardingPoint = [
      pd.boardingLocation,
      pd.activityLocation,
      pd.pickupHub,
      pd.pickupLocation,
    ]
      .filter((v) => v != null && String(v).trim() !== '')
      .join(' | ') || 'N/A';

    const pickupLoc = String(
      pd.pickupHub ?? pd.pickupLocation ?? pd.pickupPoint ?? 'N/A',
    );
    const dropLoc = String(pd.dropHub ?? pd.dropLocation ?? pd.dropPoint ?? 'N/A');

    const reservationSrc =
      pd.createdOn ?? pd.modifiedOn ?? pd.updatedAt ?? pd.bookingDate ?? new Date();

    const base: Record<string, string> = {
      LOGO_URL: logoUrl,
      BUSINESS_NAME: this.escapeHtml(
        opts.companyName ?? 'MYRAAN RENTALS AND ADVENTURES GOA PVT. LTD.',
      ),
      BOOKING_ID: this.escapeHtml(mobile),
      CUSTOMER_NAME: this.escapeHtml(custName),
      CUSTOMER_PHONE: this.escapeHtml(phone),
      SERVICE_NAME: this.escapeHtml(
        String(pd.category ?? pd.categoryTypeName ?? pd.companyName ?? 'Service'),
      ),
      PERMIT_TYPE: this.escapeHtml(String(pd.permitType ?? pd.selfPdType ?? 'As per booking')),
      PAYMENT_TYPE: this.escapeHtml(
        String(pd.paymentType ?? pd.paymentMode ?? 'N/A'),
      ),
      RESERVATION_DATE: this.formatDateIST(reservationSrc),
      PICKUP_DATE: this.formatDateIST(pickupTs),
      PICKUP_TIME: this.formatTimeIST(pickupTs),
      PICKUP_LOCATION: this.escapeHtml(pickupLoc),
      DROP_DATE: this.formatDateIST(dropTs),
      DROP_TIME: this.formatTimeIST(dropTs),
      DROP_LOCATION: this.escapeHtml(dropLoc),
      RENTAL_DURATION: this.escapeHtml(this.rentalDurationLabel(pd)),
      VEHICLE_QUANTITY: String(this.toNumber(pd.quantity ?? 1)),
      SECURITY_DEPOSIT: this.toNumber(pd.securityAmount).toFixed(2),
      TOTAL_AMOUNT: totalForPass.toFixed(2),
      ACTUAL_AMOUNT: advanceForPass.toFixed(2),
      VEHICLE_BALANCE_TOTAL: vehicleBalanceWithDeposit.toFixed(2),
      BALANCE_AT_BOARDING: balanceAtBoarding.toFixed(2),
      BOARDING_POINT: this.escapeHtml(boardingPoint),
      ADULTS: String(adults),
      KIDS: String(kids),
      TOTAL_PAX: String(totalPax),
      COORDINATOR_SECTION: coordinatorHtml,
      TERMS_URL: '/terms-and-condition',
    };

    return base;
  }

  generateBoardingPassPdf(
    row: BoardingPassRow,
    options?: { companyName?: string; logoUrl?: string; qrCodeUrl?: string },
  ): Promise<boolean> {
    const {
      bookingId,
      id,
      customeName,
      customerName,
      countryDialCode,
      customerMobile,
      pickupDateTime,
      dropDateTime,
      pickupHub,
      pickupLocation,
      dropHub,
      dropLocation,
      boardingLocation,
      totalDays,
      quantity,
      adultCount,
      quantityForKids,
      kidsCount,
      securityAmount,
    } = row ?? {};

    const paymentDetails: BoardingPassRow = {
      ...row,
      orderId: String(bookingId ?? id ?? '') || 'N/A',
      bookingId: bookingId ?? id,
      id,
      customeName: customeName ?? customerName,
      pickupHub: pickupHub ?? pickupLocation,
      dropHub: dropHub ?? dropLocation,
      boardingLocation,
      quantity: quantity ?? adultCount,
      quantityForKids: quantityForKids ?? kidsCount,
      totalDays,
      securityAmount,
      countryDialCode,
      customerMobile,
    };

    const typeStr = (
      row?.['categoryTypeName'] ?? row?.['categoryType'] ?? ''
    )
      .toString()
      .toLowerCase();
    const boardingPassType: 'vehicle' | 'activity' =
      typeStr === 'car' || typeStr === 'bike' ? 'vehicle' : 'activity';

    const placeholders = this.fillBoardingPassPlaceholders(
      paymentDetails,
      {
        companyName:
          options?.companyName ?? 'MYRAAN RENTALS AND ADVENTURES GOA PVT. LTD.',
        logoUrl:
          options?.logoUrl ?? row?.['logoUrl'] ?? row?.['businessLogoUrl'],
        qrCodeUrl:
          options?.qrCodeUrl ?? row?.['qrCodeUrl'] ?? row?.['qrCodeImageUrl'],
      },
      boardingPassType,
    );

    let html = this.getBoardingPassHtmlTemplate(boardingPassType);
    Object.keys(placeholders).forEach((key) => {
      const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(
        new RegExp('{{' + escapedKey + '}}', 'g'),
        String(placeholders[key] ?? ''),
      );
    });

    const rawId = String(bookingId ?? id ?? 'booking').replace(/[^a-zA-Z0-9_-]/g, '_');
    const fileName = `BoardingPass_${rawId}.pdf`;
    return this.renderBoardingPassHtmlToPdf(html, fileName);
  }

  private async renderBoardingPassHtmlToPdf(
    html: string,
    fileName: string,
  ): Promise<boolean> {
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
      await new Promise<void>((r) => setTimeout(r, 150));
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
