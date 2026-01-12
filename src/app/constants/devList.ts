export const DevList: any[] = [   {
  cruiseId: 1,
  title: 'Dinner Cruise',
  subTile: 'Dinner Cruise',
  category: 'Cruise',
  type: ['dinner'],
  routingUrl: 'book-cruise-in-goa',
  rating: '4.6',
  reviews: '3.8K',
  mobilePackageDesc: ['2 hours', 'Panjim '],

  oldPrice: '1500',
  booked: '4M+',
  buttonText: 'Book this activity & get 20% off',
  reportPrice: 600,
  reportPriceWithTransport: 750,
  currentPrice: '899',
  image: '/assets/detailimages/NIR.webp',
  bannerImgs: [
    '/assets/detailimages/NIR01.webp',
    '/assets/detailimages/NIR02.webp',
    '/assets/detailimages/NIR03.webp',
    '/assets/detailimages/NIR04.webp',
    '/assets/detailimages/NIR05.webp',
  ],

  priceIncludes: {
    title: 'Price Includes',
    sections: [
      {
        category: 'Ticket',
        items: [
          '2 Hours Cruising on Mandovi River',
          'Dance Performances & Entertainment on Board',
        ],
      },
      {
        category: 'Meals',
        items: ['Starter', 'Buffet Dinner (Veg/Non-Veg)', 'Complimentary Dinks & Snacks'],
      },
      {
        category: 'Activities',
        items: ['Sightseeing of Panjim City'],
      },
    ],
  },
  topFeatures: [
    {
      icon: 'event_available',
      title: 'Instant Confirmation',
      description: 'Get your tickets mailed right away',
    },
    {
      icon: 'free_cancellation',
      title: 'Free Cancellation',
      description: 'Up to 48 hours before the experience starts',
    },
    {
      icon: 'local_activity',
      title: 'Mobile Tickets',
      description: 'Get tickets delivered to your Inbox',
    },
  ],
  mustKnow: [
    {
      about1:
        'Enjoy 3-Hours with friends, family, or loved ones, all while enjoying the vibrant sights and sounds of Goa.',
    },
    {
      about1:
        'Savor a selection of gourmet dishes as you glide over glistening waters for a delightful experience.',
    },
    {
      about1:
        'Enjoy fun-filled games, dance & groove to retro classics and Bollywood hits spun by a dynamic DJ.',
    },
    {
      about1:
        'This cruise promises to be the perfect setting for an unforgettable night dinner cruise party.',
    },
  ],

  features: [
    {
      name: 'Duration 3 Hours',
      image: './assets/images/svg/cancellation-ico.svg',
    },
    {
      name: 'Panjim Goa, India',
      image: './assets/images/svg/bolt-ico.svg',
    },
    { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
    { name: 'Entertainment', image: './assets/images/svg/bolt-ico.svg' },
  ],
  overviewDesc:
    'The 2.5-hour dinner cruise on the Mandovi River in Goa offers an extraordinary experience, blending scenic beauty with culinary delights….',
  overview: [
    { inclusion1: '2-hour mandovi cruise' },
    { inclusion1: 'Buffet dinner' },
    { inclusion1: 'Welcome drinks' },
    { inclusion1: 'Soft drinks & water' },
    { inclusion1: 'Goan dance show' },
    { inclusion1: 'Hotel transfers (optional upgrade)' },
  ],
  thingsToCarry: [
    { exclusion1: 'Parking charges are not included in the package.' },
    {
      exclusion1: 'Additional drinks are not included but can be purchased onboard.',
    },
    {
      exclusion1:
        'Self-travel dinner cruise packages do not include pickup and drop-off services.',
    },
  ],
  needToKnows: [
    {
      needToKnow:
        'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
    },
    {
      needToKnow:
        'Note: Seat allocation is done by the staff on a first-come, first-served basis',
    },
    {
      needToKnow:
        'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
    },
  ],
  priceDetails: {
    regularPrice: '1',
    discountPrice: '1',
  },
  transport: [
    {
      title: 'Without Transport',
      isSelected: true,
      originalamt: '1',
      discountedamt: '1',
      kidAmt: '1',
      regularPrice: '1',
      adultPrice: '1',
      kidPrice: '1',
      adultReportPrice: '1',
      kidReportPrice: '1',
      desc: [
        'Access to lower deck',
        '2-hour cruise in Goa Marina',
        'Goan buffet dinner.',
        'Goan dance show',
      ],
    },
    {
      title: 'With Transport',
      isSelected: false,
      originalamt: '1',
      discountedamt: '1',
      kidAmt: '1',
      regularPrice: '1',
      adultPrice: '1',
      kidPrice: '1',
      adultReportPrice: '1',
      kidReportPrice: '1',
      desc: [
        'Access to all decks',
        '2-hour cruise in Goa Marina',
        'Goan buffet dinner.',
        'Goan dance show',
      ],
    },
  ],
}]


    export const cancellationPolicy: string[] = [
        'If cancellation is made 15 days before the date of travel, 0.0% will be charged.',
        'If cancellation is made 7 to 15 days before, 50.0% of the total cost will be charged.',
        'If cancellation is made 0 to 7 days before, 100.0% will be charged.',
        'Unforeseen conditions may result in cancellation, and no cash refund will be provided.',
      ];
      
      export const travellers = [
        { label: 'Adult', price: 550, count: 1 },
        { label: 'Child', price: 300, count: 0 },
        { label: 'Infant', price: 150, count: 0 },
      ];
      
      export const razorpay_key = 'rzp_live_1NvgMPNciEM6Mu';
      export const key_secret = '8jlIK1X0mkITb0GlKh2sqCKs';