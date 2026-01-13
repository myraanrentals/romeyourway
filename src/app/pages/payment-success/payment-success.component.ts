import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
declare global {
  interface Window {
    dataLayer: any[];
  }
}
@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss',
})
export class PaymentSuccessComponent implements OnInit, AfterViewInit {
  public paymentDetails: {
    orderId?: string;
    paymentCurrency?: string;
    paymentAmount?: string;
    cashfreePaymentId?: string;
    paymentCompletionTime?: string;
    bankReference?: string;
    paymentGroup?: string;
  } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  public amount?: string;

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

      this.paymentDetails = {
        orderId,
        paymentCurrency,
        paymentAmount,
        cashfreePaymentId,
        paymentCompletionTime,
        bankReference,
        paymentGroup,
      };
    } catch (error) {
      console.error('Error parsing payment status response:', error);
    }
  }
  downloadReceipt(): void {
    const doc = new jsPDF();
    
    // Set up colors
    const primaryColorR = 40;
    const primaryColorG = 167;
    const primaryColorB = 69; // #28a745
    const textColorR = 51;
    const textColorG = 51;
    const textColorB = 51;
    const lightGrayR = 245;
    const lightGrayG = 245;
    const lightGrayB = 245;
    
    // Header
    doc.setFillColor(primaryColorR, primaryColorG, primaryColorB);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Payment Receipt', 105, 25, { align: 'center' });
    
    // Reset text color
    doc.setTextColor(textColorR, textColorG, textColorB);
    
    let yPosition = 55;
    
    // Company/Service Info (optional - you can customize this)
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Rome Your Way', 105, yPosition, { align: 'center' });
    yPosition += 10;
    doc.setFontSize(10);
    doc.text('Thank you for your purchase!', 105, yPosition, { align: 'center' });
    yPosition += 15;
    
    // Payment Details Section
    doc.setFillColor(lightGrayR, lightGrayG, lightGrayB);
    doc.rect(20, yPosition - 5, 170, 5, 'F');
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Payment Details', 20, yPosition);
    yPosition += 10;
    
    // Details
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    
    const details = [
      { label: 'Order ID', value: this.paymentDetails.orderId || 'N/A' },
      { label: 'Transaction ID', value: this.paymentDetails.cashfreePaymentId || 'N/A' },
      { label: 'Payment Amount', value: `${this.paymentDetails.paymentCurrency || 'INR'} ${this.paymentDetails.paymentAmount || '0'}` },
      { label: 'Payment Completion Time', value: this.paymentDetails.paymentCompletionTime || 'N/A' },
      { label: 'Bank Reference', value: this.paymentDetails.bankReference || 'N/A' },
      { label: 'Payment Group', value: this.paymentDetails.paymentGroup || 'N/A' },
    ];
    
    details.forEach((detail, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFont('helvetica', 'bold');
      doc.text(`${detail.label}:`, 20, yPosition);
      doc.setFont('helvetica', 'normal');
      const textWidth = doc.getTextWidth(detail.value);
      if (textWidth > 150) {
        const lines = doc.splitTextToSize(detail.value, 150);
        doc.text(lines, 90, yPosition);
        yPosition += (lines.length * 5) + 3;
      } else {
        doc.text(detail.value, 90, yPosition);
        yPosition += 8;
      }
    });
    
    yPosition += 10;
    
    // Footer
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(9);
    doc.setTextColor(128, 128, 128);
    doc.text('This is a computer-generated receipt. No signature required.', 105, yPosition, { align: 'center' });
    yPosition += 5;
    doc.text('Please save this receipt for your records.', 105, yPosition, { align: 'center' });
    
    // Generate filename
    const orderId = this.paymentDetails.orderId || 'receipt';
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `Receipt_${orderId}_${timestamp}.pdf`;
    
    // Save the PDF
    doc.save(filename);
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
    });
  }
}
