import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss'],
})
export class FeatureSectionComponent {
  @Input() title: string = '';
  @Input() features: { icon: string; title: string; text: string }[] = [];
  @Input() whatsappNumber: string = '';

  openWhatsApp(number: string): void {
    const link = `https://wa.me/${number.replace(/[^0-9]/g, '')}`;
    window.open(link, '_blank');
  }
}
