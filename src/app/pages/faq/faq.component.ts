import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      "question": "What types of activities does Rome Your Way offer in Goa?",
      "answer": "Rome Your Way offers a variety of exciting activities in Goa, including dinner cruises, sunset cruises, party cruises, watersports (such as parasailing, jet skiing, and banana rides), scuba diving, Dudhsagar waterfall trips, and bungee jumping. We also provide sightseeing tours and adventure packages for a complete Goa experience."
    },
    {
      "question": "What happens to activities during normal and heavy rain?",
      "answer": "During normal rainfall, most activities, such as dinner cruises, sunset cruises, party cruises and Adventure Boat Party with Watersports on the Mandovi River, continue as scheduled, with covered boats ensuring comfort. Watersports happen with added safety measures, such as wearing life jackets and maintaining a reduced offshore distance. Scuba diving and bungee jumping may be paused if conditions are unsafe. During heavy rain or storms, outdoor activities like watersports, scuba diving, bungee jumping, and Dudhsagar trips may be cancelled or rescheduled for safety, with full refunds or alternative dates offered. Indoor options, like spice plantation tours, may still be available. Check with our team for real-time updates during the monsoon season (June to September).",isOpen:false
    },
    {
      "question": "How can I book activities through Rome Your Way?",
      "answer": "You can book activities directly on our website, https://romeyourway.com/, by selecting your preferred activity, date, and package. Follow the booking prompts to confirm your reservation. For assistance, contact us via our website’s contact form or call/WhatsApp on +91 771-5959917.",isOpen:false
    },
    {
      "question": "Are your cruises suitable for families or couples?",
      "answer": "Yes, our cruises cater to both families and couples. Sunset and dinner cruises offer a romantic experience with scenic views of the Mandovi River, while party cruises provide fun and entertainment with music and dancing, suitable for families and groups.",isOpen:false
    },
    {
      "question": "What watersports are included in your packages?",
      "answer": "Our watersports packages typically include parasailing, jet skiing, banana rides, bumper rides, and speedboat rides. Combo packages, such as those at Calangute or Baga Beach, may also include snorkelling or scuba diving. Check specific package details on our website for inclusions.",isOpen:false
    },
    {
      "question": "Is scuba diving safe for beginners or non-swimmers?",
      "answer": "Absolutely! Our scuba diving experiences at Grande Island or Malvan are beginner-friendly, with professional PADI-certified instructors and safety equipment provided. Non-swimmers can participate, as training and guidance are included to ensure a safe and enjoyable dive.",isOpen:false
    },
    {
      "question": "What can I expect on a Dudhsagar waterfall trip?",
      "answer": "Our Dudhsagar waterfall trip includes a jeep safari through Mollem National Park, a visit to the majestic 310-meter waterfall, and opportunities to swim at its base (with life jackets provided). Some packages include a spice plantation tour and a Goan buffet lunch. The trip typically lasts 12 hours.",isOpen:false
    },
    {
      "question": "Where is bungee jumping offered, and is it safe?",
      "answer": "Bungee jumping is offered at Mayem Lake, featuring Goa’s highest jump at 61 meters. Safety is our priority, with trained instructors, high-quality equipment, and strict safety protocols to ensure a thrilling yet secure experience for all participants.",isOpen:false
    },
    {
      "question": "What is the best time to enjoy watersports or cruises in Goa?",
      "answer": "The best time for watersports and cruises in Goa is from October to May, when the weather is clear and the seas are calm. The monsoon season (June to September) offers unique experiences, such as river-based watersports and cruises, with safety measures in place.",isOpen:false
    },
    {
      "question": "Do you offer pickup and drop-off services for activities?",
      "answer": "Yes, we provide pickup and drop-off services for many activities, including watersports, scuba diving, and Dudhsagar trips, from locations in North Goa (e.g., Arpora Junction, Baga, Calangute, Candolim). Unfortunately, pickup services are not available in South Goa. Please check the package details for availability.",isOpen:false
    },
    {
      "question": "What is your cancellation or refund policy?",
      "answer": "Most bookings can be cancelled up to 24 hours in advance for a full refund, depending on the activity or package. Please review the specific cancellation policy for each activity on our website or contact our support team for assistance.",isOpen:false
    }
  ]
  ;

  toggleFaq(index: number) {
    this.faqs.forEach((faq, i) => faq.isOpen = i === index ? !faq.isOpen : false);
  }
}
