import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  dropdowns: { [key: string]: boolean } = {
    company: true,
    forTravelers: true,
    socialNetworks: true,
  };

  sections = [
    {
      key: 'socialNetworks',
      title: 'We are on social networks',
      type: 'social',
      icons: [
        {
          class: 'fab fa-facebook-f ',
          link: 'https://www.facebook.com/romeyourwayindia/',
        },
        {
          class: 'fab fa-instagram ',
          link: 'https://www.instagram.com/romeyourway/',
        },
        {
          class: 'fab fa-youtube ',
          link: 'https://www.youtube.com/@romeyourway',
        },
        { class: 'fab fa-twitter ', link: 'https://x.com/rome_your_way' },
      ],
    },
    {
      key: 'company',
      title: 'Company',
      type: 'links',
      links: ['Home', 'About Us', 'Activities', 'Contact Us'],
    },
    {
      key: 'forTravelers',
      title: 'For travelers',
      type: 'links',
      links: ['Privacy Policy', 'Terms & Conditions', 'Refund Policy'],
    },
  ];
  mobSections = [
    {
      key: 'company',
      title: 'Company',
      type: 'links',
      links: ['Home', 'About Us', 'Activities', 'Contact Us'],
      href: ['/','/about-us', '/book-dinner-cruise-in-goa', '/contact-us'],

    },
    {
      key: 'forTravelers',
      title: 'For travelers',
      type: 'links',
      links: ['Privacy Policy', 'Terms & Conditions', 'Refund Policy'],
      href: ['/privacy-policy', '/terms-and-condition', '/refund-cancellation'],
    },
  ];

  toggleDropdown(key: string) {
    this.dropdowns[key] = !this.dropdowns[key];
  }
  data = [];
}
