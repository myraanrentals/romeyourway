export const hotels: any[] = [
  // Dinner Cruise
  {
    cruiseId: 1,
    title: 'Dinner Cruise',
    subTile: 'Dinner Cruise',
    category: 'Cruise',
    type: ['dinner'],
    routingUrl: 'book-cruise-in-goa',
    rating: '4.6',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    timeSlots: ['8pm'],
    specialEvents: [{ date: '2026-02-14', title: 'Valentine\'s Day', navigateTo: 'https://nautiamigo.com/book-valentine-day-party-cruise-2026/' }],
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
      regularPrice: '1500',
      discountPrice: '999',
    },
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1499',
        discountedamt: '899',
        kidAmt: '699',
        regularPrice: '1500',
        adultPrice: '999',
        kidPrice: '699',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1699',
        discountedamt: '1099',
        kidAmt: '899',
        regularPrice: '1800',
        adultPrice: '1199',
        kidPrice: '899',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },// Premium Dinner Cruise
  {
    cruiseId: 2,
    title: 'Premium Dinner Cruise',
    subTile: 'Premium Dinner Cruise',
    category: 'Cruise',
    type: ['premium'],
    routingUrl: 'book-premium-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    timeSlots: ['8pm'],
    oldPrice: '2000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 750,
    currentPrice: '1099',
    image: '/assets/detailimages/VIH.webp',
    bannerImgs: [
      '/assets/detailimages/VIH01.webp',
      '/assets/detailimages/VIH02.webp',
      '/assets/detailimages/VIH03.webp',
      '/assets/detailimages/VIH04.webp',
      '/assets/detailimages/VIH05.webp',
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
          '3-hour journey filled with music, dancing, delectable cuisine, and exhilarating entertainment.',
      },
      {
        about1:
          'Unlimited Buffet Dinner – Enjoy an array of vegetarian and non-vegetarian dishes.',
      },
      {
        about1:
          'Expect engaging games and entertainment for all ages, ensuring every family member enjoys the trip.',
      },
      {
        about1:
          'Relax and enjoy the cruise in comfort with reserved table seating for you and your party.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
      regularPrice: '1800',
      discountPrice: '1099',
    },
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1800',
        discountedamt: '1099',
        kidAmt: '700',
        regularPrice: '1800',
        adultPrice: '1099',
        kidPrice: '750',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1800',
        discountedamt: '1299',
        kidAmt: '900',
        regularPrice: '2000',
        adultPrice: '1199',
        kidPrice: '850',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Sunset, Party & Hi Tea
  {
    priceDetails: {
      regularPrice: '699',
      discountPrice: '499',
    },
    cruiseId: 16,
    title: 'Sunset, Party & Hi Tea',
    subTile: 'Sunset & Party Cruise',
    category: 'Cruise',
    type: ['others'],
    timeSlots: ['6pm'],
    routingUrl: 'book-sunset-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '700',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 200,
    reportPriceWithTransport: 750,
    currentPrice: '499',
    image: '/assets/home/02.avif',
    bannerImgs: [
      '/assets/detailimages/VIH01.webp',
      '/assets/detailimages/VIH02.webp',
      '/assets/detailimages/VIH03.webp',
      '/assets/detailimages/VIH04.webp',
      '/assets/detailimages/VIH05.webp',
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
          'Sail past iconic landmarks like Fort Aguada, Governors Palace, and Miramar Beach.',
      },
      {
        about1:
          'Groove to live DJ music on a double-deck cruiser with a lively atmosphere.',
      },
      {
        about1:
          'Relax with family, friends and soak in stunning sunset views over the Mandovi River.',
      },
      {
        about1:
          'Relax with family, friends and soak in stunning sunset views over the Mandovi River.',
      },
    ],

    features: [
      {
        name: 'Duration 1 Hours',
        image: './assets/images/svg/cancellation-ico.svg',
      },
      {
        name: 'Panjim Goa, India',
        image: './assets/images/svg/bolt-ico.svg',
      },
      { name: 'Meals & Drinks', image: './assets/images/svg/mobile-ico.svg' },
      { name: 'Entertainment', image: './assets/images/svg/bolt-ico.svg' },
    ],
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '699',
        discountedamt: '399',
        kidAmt: '300',
        regularPrice: '699',
        adultPrice: '499',
        kidPrice: '349',
        adultReportPrice: '300',
        kidReportPrice: '300',
        desc: [
          'Access to lower deck',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      }
    ],
  },
  // Nauti Amigo (Silver Package)
  {
    priceDetails: {
      regularPrice: '3500',
      discountPrice: '2499',
    },
    cruiseId: 5,
    title: 'Nauti Amigo (Silver Package)',
    description: 'Nauti Amigo Cruise offers an exclusive 3-hour evening experience on Goa’s iconic Mandovi River. Savour a lavish unlimited buffet with vegetarian and non-vegetarian delicacies, enjoy live entertainment and vibrant dance performances, and sip on refreshing drinks as Panjim’s skyline lights up around you. Designed for all age groups, couples, families, and celebrations, this cruise delivers the perfect blend of fine dining, entertainment, and luxury on the water.',
    subTile: 'Nauti Amigo (Silver Package)',
    category: 'Cruise',
    type: ['luxury'],
    timeSlots: ['8pm'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }, { date: '2026-02-14', title: 'Valentine\'s Day', navigateTo: 'https://nautiamigo.com/book-valentine-day-party-cruise-2026/' }],
    routingUrl: 'book-nauti-amigo-cruise-silver-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '4999',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '3299',
    image: '/assets/DinnerCruises/NA_Silver_package/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/NA_Silver_package/i2.webp',
      '/assets/DinnerCruises/NA_Silver_package/i6.webp',
      '/assets/DinnerCruises/NA_Silver_package/i3.webp',
      '/assets/DinnerCruises/NA_Silver_package/i4.webp',
      '/assets/DinnerCruises/NA_Silver_package/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '3 Hours Sailing on Mandovi River',
            'Dance Performances & Entertainment on Board',
          ],
        },
        {
          category: 'Meals',
          items: ['Starter', 'Buffet Dinner (Veg/Non-Veg)', 'Unlimited Dinks & Snacks'],
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
          'Signature Luxury Sailing Experience on the serene Mandovi River',
      },
      {
        about1:
          'Magnificent Triple-Deck Cruise Vessel, each deck curated for refined indulgence',
      },
      {
        about1:
          'Exclusive AC VIP Lounge with plush seating and elegant interiors',
      },
      {
        about1:
          'Open-Air Upper Deck offering panoramic night views and romantic ambience',
      },
      {
        about1:
          'Live DJ & Premium Dance Floor with immersive lighting and sound',
      },
      {
        about1:
          'Curated Onboard Bar & Hookah Lounge for a sophisticated nightlife experience',
      },
      {
        about1:
          'Designer Seating & Picture-Perfect Spaces for memorable photo moments',
      },
      {
        about1:
          'Romance-Centric Ambience ideal for couples and intimate celebrations',
      },
      {
        about1:
          'Graciously Family-Friendly while maintaining a premium atmosphere',
      },
      {
        about1:
          'Celebration-Ready Luxury Setup for birthdays, anniversaries, and private occasions',
      },
      {
        about1:
          'Spacious, Immaculate Washrooms designed for comfort and convenience',
      },
      {
        about1:
          'High-Standard Safety & Professional Crew ensuring a seamless experience',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
    ],
    overviewDesc:
      'A luxury night cruise featuring live DJ, dance performances, unlimited buffet dinner, IMFL drinks, and elegant seating for couples, families, and celebrations.',
    overviewPara: [
      'Experience one of the best luxury dinner cruises in Goa aboard the Nauti Amigo Luxury Cruise, a premium triple-deck cruise on the Mandovi River. Designed for couples, families, and celebration seekers, this evening cruise combines live entertainment, gourmet dining, and scenic night views for an unforgettable experience.',
      "The cruise features an AC VIP lounge, premium sofa seating, an open-air upper deck, advanced sound and lighting systems, and a lively dance floor with a live DJ. Guests are entertained with Bollywood and Tollywood dance performances, interactive games, and curated onboard activities, making it one of the most entertaining river cruises in Goa.",
      "Enjoy a lavish unlimited buffet dinner including vegetarian and non-vegetarian starters, gourmet soups, curated accompaniments, desserts, and unlimited IMFL and soft drinks. With a professional crew, high safety standards, and seamless onboard service, Nauti Amigo stands out as a top-rated luxury cruise experience."
    ],
    overview: [
      { inclusion1: 'Nauti Amigo Entertainment Line-Up & Culinary Delights' },
      { inclusion1: '3-Hour Luxury Sailing Experience' },
      { inclusion1: 'Celebration onboard' },
      { inclusion1: 'Multiple Dance Performances' },
      { inclusion1: 'Bollywood Dance Show' },
      { inclusion1: 'Tollywood Dance Performance' },
      { inclusion1: 'Live DJ Entertainment with professional sound and lighting' },
      { inclusion1: 'Interactive Games & Guest Engagement Activities' },
      { inclusion1: 'Exclusive Spot Prizes & Surprise Giveaways' },
      { inclusion1: 'Three-Deck Luxury Cruise Vessel with distinct experiences' },
      { inclusion1: 'Premium Sofa Seating across VIP and lounge areas' },
      { inclusion1: 'Unlimited Gourmet Soup ' },
      { inclusion1: 'Unlimited Vegetarian Starters' },
      { inclusion1: 'Unlimited Non-Vegetarian Starters' },
      { inclusion1: 'Unlimited Lavish Buffet Dinner' },
      { inclusion1: 'Unlimited IMFL Beverages' },
      { inclusion1: 'Unlimited Soft Drinks & Mixers' },
      { inclusion1: 'Chef-Selected Accompaniments' },
      { inclusion1: 'Assorted Desserts to conclude the dining experience' },
    ],
    thingsToCarry: [
      { exclusion1: 'Anything Not Mentioned in the package details.' },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '3500',
        adultPrice: '2499',
        kidPrice: '1999',
        adultReportPrice: '2000',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '3700',
        adultPrice: '2499',
        kidPrice: '1999',
        adultReportPrice: '2200',
        kidReportPrice: '1700',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
          'Transfers',
        ],
      },
    ],
  },
  // Nauti Amigo (Gold Package)
  {
    priceDetails: {
      regularPrice: '4000',
      discountPrice: '2999',
    },
    cruiseId: 5,
    description: 'Nauti Amigo Cruise offers an exclusive 3-hour evening experience on Goa’s iconic Mandovi River. Savour a lavish unlimited buffet with vegetarian and non-vegetarian delicacies, enjoy live entertainment and vibrant dance performances, and sip on refreshing drinks as Panjim’s skyline lights up around you. Designed for all age groups, couples, families, and celebrations, this cruise delivers the perfect blend of fine dining, entertainment, and luxury on the water.',
    title: 'Nauti Amigo (Gold Package)',
    subTile: 'Nauti Amigo (Gold Package)',
    category: 'Cruise',
    type: ['luxury'],
    timeSlots: ['8pm'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }, { date: '2026-02-14', title: 'Valentine\'s Day', navigateTo: 'https://nautiamigo.com/book-valentine-day-party-cruise-2026/' }],
    routingUrl: 'book-nauti-amigo-cruise-gold-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '4999',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '3299',
    image: '/assets/DinnerCruises/NA_Gold_package/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/NA_Gold_package/i2.webp',
      '/assets/DinnerCruises/NA_Gold_package/i6.webp',
      '/assets/DinnerCruises/NA_Gold_package/i3.webp',
      '/assets/DinnerCruises/NA_Gold_package/i4.webp',
      '/assets/DinnerCruises/NA_Gold_package/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '3 Hours Sailing on Mandovi River',
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
          'Signature Luxury Sailing Experience on the serene Mandovi River',
      },
      {
        about1:
          'Magnificent Triple-Deck Cruise Vessel, each deck curated for refined indulgence',
      },
      {
        about1:
          'Exclusive AC VIP Lounge with plush seating and elegant interiors',
      },
      {
        about1:
          'Open-Air Upper Deck offering panoramic night views and romantic ambience',
      },
      {
        about1:
          'Live DJ & Premium Dance Floor with immersive lighting and sound',
      },
      {
        about1:
          'Curated Onboard Bar & Hookah Lounge for a sophisticated nightlife experience',
      },
      {
        about1:
          'Designer Seating & Picture-Perfect Spaces for memorable photo moments',
      },
      {
        about1:
          'Romance-Centric Ambience ideal for couples and intimate celebrations',
      },
      {
        about1:
          'Graciously Family-Friendly while maintaining a premium atmosphere',
      },
      {
        about1:
          'Celebration-Ready Luxury Setup for birthdays, anniversaries, and private occasions',
      },
      {
        about1:
          'Spacious, Immaculate Washrooms designed for comfort and convenience',
      },
      {
        about1:
          'High-Standard Safety & Professional Crew ensuring a seamless experience',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
    ],
    overviewDesc:
      'A premium night cruise featuring live DJ, dance performances, unlimited buffet dinner, IMFL drinks, and elegant seating for couples, families, and celebrations.',
    overviewPara: [
      'Experience one of the best premium dinner cruises in Goa aboard the Nauti Amigo Luxury Cruise, a premium triple-deck cruise on the Mandovi River. Designed for couples, families, and celebration seekers, this evening cruise combines live entertainment, gourmet dining, and scenic night views for an unforgettable experience.',
      "The cruise features an AC VIP lounge, premium sofa seating, an open-air upper deck, advanced sound and lighting systems, and a lively dance floor with a live DJ. Guests are entertained with Bollywood and Tollywood dance performances, interactive games, and curated onboard activities, making it one of the most entertaining river cruises in Goa.",
      "Enjoy a lavish unlimited buffet dinner including vegetarian and non-vegetarian starters, gourmet soups, curated accompaniments, desserts, and unlimited IMFL and soft drinks. With a professional crew, high safety standards, and seamless onboard service, Nauti Amigo stands out as a top-rated luxury cruise experience."
    ],
    overview: [
      { inclusion1: 'Nauti Amigo Entertainment Line-Up & Culinary Delights' },
      { inclusion1: '3-Hour Luxury Sailing Experience' },
      { inclusion1: 'Celebration onboard' },
      { inclusion1: 'Multiple Dance Performances' },
      { inclusion1: 'Bollywood Dance Show' },
      { inclusion1: 'Tollywood Dance Performance' },
      { inclusion1: 'Live DJ Entertainment with professional sound and lighting' },
      { inclusion1: 'Interactive Games & Guest Engagement Activities' },
      { inclusion1: 'Exclusive Spot Prizes & Surprise Giveaways' },
      { inclusion1: 'Three-Deck Luxury Cruise Vessel with distinct experiences' },
      { inclusion1: 'Premium Sofa Seating across VIP and lounge areas' },
      { inclusion1: 'Unlimited Gourmet Soup ' },
      { inclusion1: 'Unlimited Vegetarian Starters' },
      { inclusion1: 'Unlimited Non-Vegetarian Starters' },
      { inclusion1: 'Unlimited Lavish Buffet Dinner' },
      { inclusion1: 'Complimentary Drinks' },
      { inclusion1: 'Chef-Selected Accompaniments' },
      { inclusion1: 'Assorted Desserts to conclude the dining experience' },
    ]
    ,
    thingsToCarry: [
      { exclusion1: 'Anything Not Mentioned in the package details.' },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '4000',
        adultPrice: '2999',
        kidPrice: '1999',
        adultReportPrice: '2500',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Complementary drinks.',
          'Unlimited entertainment.',
          'Dessert'
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '4200',
        adultPrice: '2999',
        kidPrice: '1999',
        adultReportPrice: '2500',
        kidReportPrice: '1700',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Complementary drinks.',
          'Unlimited entertainment.',
          'Dessert',
          'Transfers'
        ],
      },
    ],
  },
  // Nauti Amigo (Platinum Package)
  {
    priceDetails: {
      regularPrice: '5000',
      discountPrice: '3999',
    },
    cruiseId: 5,
    description: 'Nauti Amigo Cruise offers an exclusive 3-hour evening experience on Goa’s iconic Mandovi River. Savour a lavish unlimited buffet with vegetarian and non-vegetarian delicacies, enjoy live entertainment and vibrant dance performances, and sip on refreshing drinks as Panjim’s skyline lights up around you. Designed for all age groups, couples, families, and celebrations, this cruise delivers the perfect blend of fine dining, entertainment, and luxury on the water.',
    title: 'Nauti Amigo (Platinum Package)',
    subTile: 'Nauti Amigo (Platinum Package)',
    category: 'Cruise',
    type: ['luxury'],
    timeSlots: ['8pm'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }, { date: '2026-02-14', title: 'Valentine\'s Day', navigateTo: 'https://nautiamigo.com/book-valentine-day-party-cruise-2026/' }],
    routingUrl: 'book-nauti-amigo-cruise-platinum-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '4999',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '3299',
    image: '/assets/DinnerCruises/NA_Platinum_package/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/NA_Platinum_package/i2.webp',
      '/assets/DinnerCruises/NA_Platinum_package/i6.webp',
      '/assets/DinnerCruises/NA_Platinum_package/i3.webp',
      '/assets/DinnerCruises/NA_Platinum_package/i4.webp',
      '/assets/DinnerCruises/NA_Platinum_package/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '3 Hours Sailing on Mandovi River',
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
          'Signature Luxury Sailing Experience on the serene Mandovi River',
      },
      {
        about1:
          'Magnificent Triple-Deck Cruise Vessel, each deck curated for refined indulgence',
      },
      {
        about1:
          'Exclusive AC VIP Lounge with plush seating and elegant interiors',
      },
      {
        about1:
          'Open-Air Upper Deck offering panoramic night views and romantic ambience',
      },
      {
        about1:
          'Live DJ & Premium Dance Floor with immersive lighting and sound',
      },
      {
        about1:
          'Curated Onboard Bar & Hookah Lounge for a sophisticated nightlife experience',
      },
      {
        about1:
          'Designer Seating & Picture-Perfect Spaces for memorable photo moments',
      },
      {
        about1:
          'Romance-Centric Ambience ideal for couples and intimate celebrations',
      },
      {
        about1:
          'Graciously Family-Friendly while maintaining a premium atmosphere',
      },
      {
        about1:
          'Celebration-Ready Luxury Setup for birthdays, anniversaries, and private occasions',
      },
      {
        about1:
          'Spacious, Immaculate Washrooms designed for comfort and convenience',
      },
      {
        about1:
          'High-Standard Safety & Professional Crew ensuring a seamless experience',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
    ],
    overviewDesc:
      'A premium night cruise featuring live DJ, dance performances, unlimited buffet dinner, IMFL drinks, and elegant seating for couples, families, and celebrations.',
    overviewPara: [
      'Experience one of the best premium dinner cruises in Goa aboard the Nauti Amigo Luxury Cruise, a premium triple-deck cruise on the Mandovi River. Designed for couples, families, and celebration seekers, this evening cruise combines live entertainment, gourmet dining, and scenic night views for an unforgettable experience.',
      "The cruise features an AC VIP lounge, premium sofa seating, an open-air upper deck, advanced sound and lighting systems, and a lively dance floor with a live DJ. Guests are entertained with Bollywood and Tollywood dance performances, interactive games, and curated onboard activities, making it one of the most entertaining river cruises in Goa.",
      "Enjoy a lavish unlimited buffet dinner including vegetarian and non-vegetarian starters, gourmet soups, curated accompaniments, desserts, and unlimited IMFL and soft drinks. With a professional crew, high safety standards, and seamless onboard service, Nauti Amigo stands out as a top-rated luxury cruise experience."
    ],
    overview: [
      { inclusion1: 'Nauti Amigo Entertainment Line-Up & Culinary Delights' },
      { inclusion1: '3-Hour Luxury Sailing Experience' },
      { inclusion1: 'Celebration onboard' },
      { inclusion1: 'Multiple Dance Performances' },
      { inclusion1: 'Bollywood Dance Show' },
      { inclusion1: 'Tollywood Dance Performance' },
      { inclusion1: 'Live DJ Entertainment with professional sound and lighting' },
      { inclusion1: 'Interactive Games & Guest Engagement Activities' },
      { inclusion1: 'Exclusive Spot Prizes & Surprise Giveaways' },
      { inclusion1: 'Three-Deck Luxury Cruise Vessel with distinct experiences' },
      { inclusion1: 'Premium Sofa Seating across VIP and lounge areas' },
      { inclusion1: 'Unlimited Gourmet Soup ' },
      { inclusion1: 'Unlimited Vegetarian Starters' },
      { inclusion1: 'Unlimited Non-Vegetarian Starters' },
      { inclusion1: 'Unlimited Lavish Buffet Dinner' },
      { inclusion1: 'Complimentary Drinks' },
      { inclusion1: 'Chef-Selected Accompaniments' },
      { inclusion1: 'Assorted Desserts to conclude the dining experience' },
    ]
    ,
    thingsToCarry: [
      { exclusion1: 'Anything Not Mentioned in the package details.' },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '5000',
        adultPrice: '3999',
        kidPrice: '1999',
        adultReportPrice: '3000',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Complementary drinks.',
          'Unlimited entertainment.',
          'Dessert'
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '5200',
        adultPrice: '3999',
        kidPrice: '1999',
        adultReportPrice: '3200',
        kidReportPrice: '1700',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Complementary drinks.',
          'Unlimited entertainment.',
          'Dessert',
          'Transfers'
        ],
      },
    ],
  },
  // Nauti Amigo (Candlelight Package)
  {
    priceDetails: {
      regularPrice: '6000',
      discountPrice: '4999',
    },
    cruiseId: 5,
    title: 'Nauti Amigo (Candlelight Package)',
    subTile: 'Nauti Amigo (Candlelight Package)',
    category: 'Cruise',
    type: ['romantic'],
    timeSlots: ['8pm'],
    specialEvents: [{ date: '2026-02-14', title: 'Valentine\'s Day', navigateTo: 'https://nautiamigo.com/book-valentine-day-party-cruise-2026/' }],

    routingUrl: 'book-nauti-amigo-cruise-candlelight-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '8000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '4999',
    image: '/assets/DinnerCruises/NA_Candlelight_package/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/NA_Candlelight_package/i2.webp',
      '/assets/DinnerCruises/NA_Candlelight_package/i6.webp',
      '/assets/DinnerCruises/NA_Candlelight_package/i3.webp',
      '/assets/DinnerCruises/NA_Candlelight_package/i4.webp',
      '/assets/DinnerCruises/NA_Candlelight_package/i5.webp',
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
          'Triple-Deck Luxury Vessel: Nauti Amigo is a five-star luxury cruise spread across three decks, each designed to provide a unique experience.',
      },
      {
        about1:
          'Exclusive VVIP lounge with sofa seating, Open-Air Dance Floor, a bar counter, advanced lighting and sound systems, a DJ booth, and separate restrooms for men and women, ensuring utmost comfort and exclusivity.',
      },
      {
        about1:
          'Gourmet Dining Experience: Guests can indulge in a sumptuous dinner accompanied soups, starters & unlimited alcoholic and non-alcoholic beverages.',
      },
      {
        about1:
          'Embark on the Nauti Amigo Luxury Dinner Cruise to enjoy an evening of elegance, entertainment, and exquisite dining as you sail along the serene Mandovi River.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '6000',
        adultPrice: '4999',
        kidPrice: '1999',
        adultReportPrice: '4000',
        kidReportPrice: '1500',
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
        kidAmt: '2500',
        originalamt: '4999',
        discountedamt: '3999',
        regularPrice: '6200',
        adultPrice: '4999',
        kidPrice: '1999',
        adultReportPrice: '4200',
        kidReportPrice: '1700',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Vihaan Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1800',
      discountPrice: '1099',
    },
    cruiseId: 4,
    timeSlots: ['8pm'],
    title: 'Vihaan Dinner Cruise',
    subTile: 'Vihaan Dinner Cruise',
    category: 'Cruise',
    type: ['premium'],
    routingUrl: 'book-vihaan-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '2000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 700,
    reportPriceWithTransport: 750,
    currentPrice: '1099',
    image: '/assets/DinnerCruises/Vihaan/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Vihaan/i2.webp',
      '/assets/DinnerCruises/Vihaan/i6.webp',
      '/assets/DinnerCruises/Vihaan/i3.webp',
      '/assets/DinnerCruises/Vihaan/i4.webp',
      '/assets/DinnerCruises/Vihaan/i5.webp',
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
          'A spacious, three-deck cruise designed to provide breathtaking views, ample seating, and a great ambiance.',
      },
      {
        about1:
          'Enjoy a buffet dinner with both veg and non-veg options, complemented by plated snacks and two complimentary drinks.',
      },
      {
        about1:
          'Witness iconic Atal Setu Bridge, sparkling riverfront casinos, and the lush banks of the Mandovi River.',
      },
      {
        about1:
          'With games, activities, and entertainment for all ages, Vihaan Cruise caters to everyone.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1499',
        discountedamt: '1099',
        kidAmt: '700',
        regularPrice: '1800',
        adultPrice: '1099',
        kidPrice: '750',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1499',
        discountedamt: '1299',
        kidAmt: '900',
        regularPrice: '2000',
        adultPrice: '1199',
        kidPrice: '850',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Swastik Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1800',
      discountPrice: '1099',
    },
    cruiseId: 4,
    title: 'Swastik Dinner Cruise',
    subTile: 'Swastik Dinner Cruise',
    category: 'Cruise',
    type: ['premium'],
    timeSlots: ['8pm'],
    routingUrl: 'book-swastik-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '1800',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 750,
    currentPrice: '1099',
    image: '/assets/DinnerCruises/Swastik/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Swastik/i2.webp',
      '/assets/DinnerCruises/Swastik/i6.webp',
      '/assets/DinnerCruises/Swastik/i3.webp',
      '/assets/DinnerCruises/Swastik/i4.webp',
      '/assets/DinnerCruises/Swastik/i5.webp',
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
          'A spacious, three-deck cruise designed to provide breathtaking views, ample seating, and a great ambiance.',
      },
      {
        about1:
          'Enjoy a buffet dinner with both veg and non-veg options, complemented by plated snacks and two complimentary drinks.',
      },
      {
        about1:
          'Witness iconic Atal Setu Bridge, sparkling riverfront casinos, and the lush banks of the Mandovi River.',
      },
      {
        about1:
          'With games, activities, and entertainment for all ages, Vihaan Cruise caters to everyone.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1499',
        discountedamt: '1099',
        kidAmt: '700',
        regularPrice: '1800',
        adultPrice: '1099',
        kidPrice: '750',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1499',
        discountedamt: '1299',
        kidAmt: '900',
        regularPrice: '2000',
        adultPrice: '1199',
        kidPrice: '850',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Nirwana Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1800',
      discountPrice: '999',
    },
    cruiseId: 6,
    title: 'Nirwana Dinner Cruise',
    subTile: 'Nirwana Dinner Cruise',
    category: 'Cruise',
    type: ['dinner'],
    timeSlots: ['8pm'],
    routingUrl: 'book-nirwana-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '1499',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 750,
    currentPrice: '1099',
    image: '/assets/DinnerCruises/Nirvana/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Nirvana/i2.webp',
      '/assets/DinnerCruises/Nirvana/i1.webp',
      '/assets/DinnerCruises/Nirvana/i3.webp',
      '/assets/DinnerCruises/Nirvana/i4.webp',
      '/assets/DinnerCruises/Nirvana/i5.webp',
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
          'Nirvana dinner cruise in Goa offers a vibrant experience with live music, cultural performances, and scenic views.',
      },
      {
        about1:
          'The cruise includes plated snacks, a buffet with vegetarian and non-vegetarian options, and complimentary drinks and mineral water.',
      },
      {
        about1:
          'Live music from a DJ, Goan folk dances, and Portuguese dance performances create a lively atmosphere.',
      },
      {
        about1:
          'Whether you’re seeking a romantic evening, a memorable experience with family, or a party cruise with friends, this is the perfect fit for all.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1499',
        discountedamt: '799',
        kidAmt: '699',
        regularPrice: '1800',
        adultPrice: '999',
        kidPrice: '699',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1699',
        discountedamt: '999',
        kidAmt: '899',
        regularPrice: '2000',
        adultPrice: '1199',
        kidPrice: '899',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Paradise Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1800',
      discountPrice: '1099',
    },
    cruiseId: 7,
    title: 'Paradise Dinner Cruise',
    subTile: 'Paradise Dinner Cruise',
    category: 'Cruise',
    type: ['premium'],
    timeSlots: ['8pm'],
    routingUrl: 'book-paradise-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '1499',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 700,
    reportPriceWithTransport: 750,
    currentPrice: '1200',
    image: '/assets/DinnerCruises/Paradise/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Paradise/i2.webp',
      '/assets/DinnerCruises/Paradise/i6.webp',
      '/assets/DinnerCruises/Paradise/i3.webp',
      '/assets/DinnerCruises/Paradise/i4.webp',
      '/assets/DinnerCruises/Paradise/i5.webp',
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
          'Embarking on the Paradise Dinner Cruise in Goa offers a blend of cultural immersion, entertainment, and scenic beauty.',
      },
      {
        about1:
          'Enjoy the comfort of reserved tables, ensuring a personalized dining experience as you cruise along the Mandovi River.',
      },
      {
        about1:
          'Be captivated by Live DJ, authentic Goan folk dances and traditional Portuguese performances, providing a glimpse into the regions rich cultural heritage.',
      },
      {
        about1:
          'The cruise caters to guests of all ages, making it an ideal outing for families seeking a memorable evening together.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1499',
        discountedamt: '1099',
        kidAmt: '700',
        regularPrice: '1800',
        adultPrice: '1099',
        kidPrice: '750',
        adultReportPrice: '700',
        kidReportPrice: '700',
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
        originalamt: '1499',
        discountedamt: '1299',
        kidAmt: '900',
        regularPrice: '2000',
        adultPrice: '1199',
        kidPrice: '999',
        adultReportPrice: '900',
        kidReportPrice: '900',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Coral Queen Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1800',
      discountPrice: '999',
    },
    cruiseId: 12,
    title: 'Corel Queen Dinner Cruise',
    subTile: 'Corel Queen Dinner Cruise',
    category: 'Cruise',
    type: ['dinner'],
    timeSlots: ['8pm'],
    routingUrl: 'book-coral-queen-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '2000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 750,
    currentPrice: '999',
    image: '/assets/DinnerCruises/Coral queen/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Coral queen/i2.webp',
      '/assets/DinnerCruises/Coral queen/i6.webp',
      '/assets/DinnerCruises/Coral queen/i3.webp',
      '/assets/DinnerCruises/Coral queen/i4.webp',
      '/assets/DinnerCruises/Coral queen/i5.webp',
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
          'The Coral Queen is presented as a premier luxury dinner cruise in Goa, offering a comprehensive experience that includes entertainment, dining, and sightseeing on the Mandovi River.',
      },
      {
        about1:
          'The cruise features an unlimited buffet with both veg and non-veg choices, alongside two complimentary drinks. Options for private tables and premium upper deck seating are also available.',
      },
      {
        about1:
          'Guests can enjoy a variety of entertainment such as Russian and Bollywood dance performances, a traditional Goan welcome dance, and a live DJ with a dance floor.',
      },
      {
        about1:
          'As a triple-deck vessel, it boasts the largest capacity in Goa and offers scenic views of landmarks like Panjim City, Fort Aguada, and floating casinos during the journey.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1299',
        discountedamt: '999',
        kidAmt: '700',
        regularPrice: '1800',
        adultPrice: '999',
        kidPrice: '699',
        adultReportPrice: '600',
        kidReportPrice: '600',
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
        originalamt: '1499',
        discountedamt: '1199',
        kidAmt: '900',
        regularPrice: '2000',
        adultPrice: '1199',
        kidPrice: '800',
        adultReportPrice: '700',
        kidReportPrice: '700',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Princesa Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1800',
      discountPrice: '1099',
    },
    cruiseId: 9,
    title: 'Princesa Dinner Cruise',
    subTile: 'Princesa Dinner Cruise',
    category: 'Cruise',
    type: ['premium'],
    timeSlots: ['8pm'],
    routingUrl: 'book-princesa-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '1900',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 700,
    reportPriceWithTransport: 750,
    currentPrice: '1099',
    image: '/assets/DinnerCruises/Princesaa/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Princesaa/i2.webp',
      '/assets/DinnerCruises/Princesaa/i6.webp',
      '/assets/DinnerCruises/Princesaa/i3.webp',
      '/assets/DinnerCruises/Princesaa/i4.webp',
      '/assets/DinnerCruises/Princesaa/i5.webp',
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
          'Princesa dinner cruise in Goa offers a luxurious experience on the Mandovi River, combining scenic views with entertainment and dining.',
      },
      {
        about1:
          'Indulge in a lavish buffet dinner offering both veg and non-veg options. Enjoy complimentary refreshments along with complimentary plated snacks to tantalize your taste buds.',
      },
      {
        about1:
          'Experience a vibrant atmosphere with live Bollywood DJ music, traditional Goan and Portuguese folk dances, and engaging games with prizes, ensuring a lively and memorable evening for all.',
      },
      {
        about1:
          'Enjoy the comfort and elegance of a modern double-decker boat. The cruise offers a good balance of luxury and value, making it a popular choice for couples, families, and groups seeking a memorable Goan evening.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1499',
        discountedamt: '1099',
        kidAmt: '700',
        regularPrice: '1800',
        adultPrice: '1099',
        kidPrice: '750',
        adultReportPrice: '700',
        kidReportPrice: '700',
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
        originalamt: '1499',
        discountedamt: '1299',
        kidAmt: '900',
        regularPrice: '2000',
        adultPrice: '1199',
        kidPrice: '999',
        adultReportPrice: '900',
        kidReportPrice: '900',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Calma Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1800',
      discountPrice: '999',
    },
    cruiseId: 10,
    title: 'Calma Dinner Cruise',
    subTile: 'Calma Dinner Cruise',
    category: 'Cruise',
    type: ['dinner'],
    timeSlots: ['8pm'],
    routingUrl: 'book-calma-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '1800',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 750,
    currentPrice: '1099',
    image: '/assets/DinnerCruises/Calma/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Calma/i2.webp',
      '/assets/DinnerCruises/Calma/i1.webp',
      '/assets/DinnerCruises/Calma/i3.webp',
      '/assets/DinnerCruises/Calma/i4.webp',
      '/assets/DinnerCruises/Calma/i5.webp',
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
          'Calma Dinner Cruise offers a delightful experience along the Mandovi River, complemented by engaging entertainment such as live DJ music, Goan folk dances, and interactive games.',
      },
      {
        about1:
          'Indulge in a varied buffet dinner, featuring both veg and non-veg options, along with snacks and complimentary drinks, ensuring a satisfying culinary experience.',
      },
      {
        about1:
          'The cruise offers picturesque views of Goas landmarks along the Mandovi River, allowing guests to appreciate the regions beauty from a unique vantage point.',
      },
      {
        about1:
          'The cruise provides a relaxing atmosphere on the water with cool breezes, while simultaneously offering a lively environment perfect for celebrating special occasions or simply enjoying an evening out.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1299',
        discountedamt: '999',
        kidAmt: '700',
        regularPrice: '1800',
        adultPrice: '999',
        kidPrice: '699',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1499',
        discountedamt: '1199',
        kidAmt: '900',
        regularPrice: '2000',
        adultPrice: '1199',
        kidPrice: '899',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Kapitol Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1500',
      discountPrice: '1099',
    },
    cruiseId: 11,
    title: 'Kapitol Dinner Cruise',
    subTile: 'Kapitol Dinner Cruise',
    category: 'Cruise',
    type: ['dinner'],
    timeSlots: ['8pm'],
    routingUrl: 'book-kapitol-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '1600',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 850,
    currentPrice: '899',
    image: '/assets/DinnerCruises/Kaapitol/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Kaapitol/i2.webp',
      '/assets/DinnerCruises/Kaapitol/i6.webp',
      '/assets/DinnerCruises/Kaapitol/i3.webp',
      '/assets/DinnerCruises/Kaapitol/i4.webp',
      '/assets/DinnerCruises/Kaapitol/i5.webp',
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
          'Discover an unforgettable blend of culture, cuisine, and celebration aboard the Kapitol Dinner Cruise.',
      },
      {
        about1:
          'Treat your taste buds to a lavish buffet featuring an array of Goan delicacies and international favorites.',
      },
      {
        about1:
          'With activities and entertainment for all age groups, the Kapitol Dinner Cruise creates a welcoming atmosphere for families, couples, and groups of friends, ensuring a delightful time for everyone.',
      },
      {
        about1:
          'Kapitol Cruise goes beyond a simple river journey—it’s an evening filled with culture, entertainment, and luxury.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1299',
        discountedamt: '999',
        kidAmt: '699',
        regularPrice: '1500',
        adultPrice: '1099',
        kidPrice: '750',
        adultReportPrice: '700',
        kidReportPrice: '700',
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
        originalamt: '1199',
        discountedamt: '1199',
        kidAmt: '899',
        regularPrice: '1800',
        adultPrice: '1199',
        kidPrice: '999',
        adultReportPrice: '900',
        kidReportPrice: '900',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Nikhil Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1500',
      discountPrice: '999',
    },
    cruiseId: 12,
    title: 'Nikhil Dinner Cruise',
    subTile: 'Nikhil Dinner Cruise',
    category: 'Cruise',
    type: ['dinner'],
    timeSlots: ['8pm'],
    routingUrl: 'book-nikhil-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '1500',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 850,
    currentPrice: '1099',
    image: '/assets/DinnerCruises/Nikhil/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Nikhil/i2.webp',
      '/assets/DinnerCruises/Nikhil/i6.webp',
      '/assets/DinnerCruises/Nikhil/i3.webp',
      '/assets/DinnerCruises/Nikhil/i4.webp',
      '/assets/DinnerCruises/Nikhil/i5.webp',
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
          'Discover an unforgettable blend of culture, cuisine, and celebration aboard the Kapitol Dinner Cruise.',
      },
      {
        about1:
          'Treat your taste buds to a lavish buffet featuring an array of Goan delicacies and international favorites.',
      },
      {
        about1:
          'With activities and entertainment for all age groups, the Kapitol Dinner Cruise creates a welcoming atmosphere for families, couples, and groups of friends, ensuring a delightful time for everyone.',
      },
      {
        about1:
          'Kapitol Cruise goes beyond a simple river journey—it’s an evening filled with culture, entertainment, and luxury.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1299',
        discountedamt: '999',
        kidAmt: '699',
        regularPrice: '1500',
        adultPrice: '999',
        kidPrice: '699',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1199',
        discountedamt: '1199',
        kidAmt: '899',
        regularPrice: '1800',
        adultPrice: '1199',
        kidPrice: '899',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Ohana Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1500',
      discountPrice: '999',
    },
    cruiseId: 13,
    title: 'Ohana Dinner Cruise',
    subTile: 'Ohana Dinner Cruise',
    category: 'Cruise',
    type: ['dinner'],
    timeSlots: ['8pm'],
    routingUrl: 'book-ohana-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '1800',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 850,
    currentPrice: '999',
    image: '/assets/DinnerCruises/Ohana/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Ohana/i2.webp',
      '/assets/DinnerCruises/Ohana/i6.webp',
      '/assets/DinnerCruises/Ohana/i3.webp',
      '/assets/DinnerCruises/Ohana/i4.webp',
      '/assets/DinnerCruises/Ohana/i5.webp',
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
          'Discover an unforgettable blend of culture, cuisine, and celebration aboard the Kapitol Dinner Cruise.',
      },
      {
        about1:
          'Treat your taste buds to a lavish buffet featuring an array of Goan delicacies and international favorites.',
      },
      {
        about1:
          'With activities and entertainment for all age groups, the Kapitol Dinner Cruise creates a welcoming atmosphere for families, couples, and groups of friends, ensuring a delightful time for everyone.',
      },
      {
        about1:
          'Kapitol Cruise goes beyond a simple river journey—it’s an evening filled with culture, entertainment, and luxury.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1299',
        discountedamt: '999',
        kidAmt: '699',
        regularPrice: '1500',
        adultPrice: '999',
        kidPrice: '699',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1199',
        discountedamt: '1199',
        kidAmt: '899',
        regularPrice: '1800',
        adultPrice: '1199',
        kidPrice: '899',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Fisherman Dinner Cruise
  {
    priceDetails: {
      regularPrice: '1500',
      discountPrice: '999',
    },
    cruiseId: 14,
    title: 'Fisherman Dinner Cruise',
    subTile: 'Fisherman Dinner Cruise',
    category: 'Cruise',
    type: ['dinner'],
    timeSlots: ['8pm'],
    routingUrl: 'book-fisherman-dinner-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '2000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 650,
    reportPriceWithTransport: 850,
    currentPrice: '999',
    image: '/assets/DinnerCruises/Fisherman dinner/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Fisherman dinner/i2.webp',
      '/assets/DinnerCruises/Fisherman dinner/i6.webp',
      '/assets/DinnerCruises/Fisherman dinner/i3.webp',
      '/assets/DinnerCruises/Fisherman dinner/i4.webp',
      '/assets/DinnerCruises/Fisherman dinner/i5.webp',
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
          'Discover an unforgettable blend of culture, cuisine, and celebration aboard the Kapitol Dinner Cruise.',
      },
      {
        about1:
          'Treat your taste buds to a lavish buffet featuring an array of Goan delicacies and international favorites.',
      },
      {
        about1:
          'With activities and entertainment for all age groups, the Kapitol Dinner Cruise creates a welcoming atmosphere for families, couples, and groups of friends, ensuring a delightful time for everyone.',
      },
      {
        about1:
          'Kapitol Cruise goes beyond a simple river journey—it’s an evening filled with culture, entertainment, and luxury.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1299',
        discountedamt: '999',
        kidAmt: '699',
        regularPrice: '1500',
        adultPrice: '999',
        kidPrice: '699',
        adultReportPrice: '650',
        kidReportPrice: '650',
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
        originalamt: '1199',
        discountedamt: '1199',
        kidAmt: '899',
        regularPrice: '1800',
        adultPrice: '1199',
        kidPrice: '899',
        adultReportPrice: '800',
        kidReportPrice: '800',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Private Yachts
  {
    priceDetails: {
      regularPrice: '15000',
      discountPrice: '11999',
    },
    cruiseId: 14,
    title: 'Private Yachts',
    subTile: 'Private Yachts',
    category: 'Cruise',
    type: ['others'],
    timeSlots: ['7:00 AM to 11:00 PM'],
    routingUrl: 'book-our-private-yachts-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '15000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 9000,
    reportPriceWithTransport: 9400,
    currentPrice: '12000',
    image: '/assets/DinnerCruises/Yatch/i1.webp',
    bannerImgs: [
      '/assets/DinnerCruises/Yatch/i2.webp',
      '/assets/DinnerCruises/Yatch/i3.webp',
      '/assets/DinnerCruises/Yatch/i4.webp',
      '/assets/DinnerCruises/Yatch/i5.webp',
      '/assets/DinnerCruises/Yatch/i6.webp',
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
          'Discover an unforgettable blend of culture, cuisine, and celebration aboard the Kapitol Dinner Cruise.',
      },
      {
        about1:
          'Treat your taste buds to a lavish buffet featuring an array of Goan delicacies and international favorites.',
      },
      {
        about1:
          'With activities and entertainment for all age groups, the Kapitol Dinner Cruise creates a welcoming atmosphere for families, couples, and groups of friends, ensuring a delightful time for everyone.',
      },
      {
        about1:
          'Kapitol Cruise goes beyond a simple river journey—it’s an evening filled with culture, entertainment, and luxury.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1299',
        discountedamt: '999',
        kidAmt: '699',
        regularPrice: '1800',
        adultPrice: '899',
        kidPrice: '699',
        adultReportPrice: '600',
        kidReportPrice: '',
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
        originalamt: '1199',
        discountedamt: '1199',
        kidAmt: '899',
        regularPrice: '1800',
        adultPrice: '1099',
        kidPrice: '899',
        adultReportPrice: '750',
        kidReportPrice: '',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  },
  // Adventure Boat Party
  {
    priceDetails: {
      regularPrice: '2000',
      discountPrice: '999',
    },
    cruiseId: 19,
    title: 'Adventure Boat Party',
    timeSlots: ['8pm'],
    subTile: 'Adventure Boat Party & water sports',
    image: '/assets/DinnerCruises/Adventure boat party new/i1.webp',
    category: 'Adventure Boat Party with water sports',
    type: ['others'],
    routingUrl: 'adventure-boat-party-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '2500',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 700,
    reportPriceWithTransport: 850,
    currentPrice: '999',
    bannerImgs: [
      '/assets/DinnerCruises/Adventure boat party new/i2.webp',
      '/assets/DinnerCruises/Adventure boat party new/i3.webp',
      '/assets/DinnerCruises/Adventure boat party new/i4.webp',
      '/assets/DinnerCruises/Adventure boat party new/i5.webp',
      '/assets/DinnerCruises/Adventure boat party new/i6.webp',
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
          'Adventure boat parties and watersports in Goa are predominantly concentrated around the scenic Mandovi River, offering a picturesque backdrop for activities and cruises.',
      },
      {
        about1:
          'Enjoy buffet meals (veg/non-veg), refreshing drinks (beer/soft drinks/juice), live DJ music, on-board amenities like changing rooms and toilets, safety gear (life jackets), and even dolphin sighting.',
      },
      {
        about1:
          'Enjoy thrilling water activities like jet skiing, banana boat rides, bumper rides, speed boat rides, kayaking, and more, appealing to a wide range of thrill-seekers and leisure enthusiasts.',
      },
      {
        about1:
          'Despite the monsoon season typically impacting sea-based watersports, the Mandovi River continues to host these adventure boat parties and watersports, ensuring year-round excitement and fun.',
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
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
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
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '1499',
        discountedamt: '1000',
        kidAmt: '700',
        regularPrice: '2000',
        adultPrice: '999',
        kidPrice: '899',
        adultReportPrice: '700',
        kidReportPrice: '700',
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
        originalamt: '1499',
        discountedamt: '1200',
        kidAmt: '900',
        regularPrice: '2500',
        adultPrice: '1199',
        kidPrice: '1099',
        adultReportPrice: '900',
        kidReportPrice: '900',
        desc: [
          'Access to all decks',
          '2-hour cruise in Goa Marina',
          'Goan buffet dinner.',
          'Goan dance show',
        ],
      },
    ],
  }
];

export const cancellationPolicy: string[] = [
  "If cancellation is made 15 days before the scheduled activity date, 0% will be charged.",
  "If cancellation is made 7 to 15 days before the scheduled activity date, 50% of the total cost will be charged.",
  "If cancellation is made 0 to 7 days before the scheduled activity date, 100% will be charged.",
  "If the service is not provided by us, the full amount paid will be refunded.",
  "No refunds are applicable for no-shows, late arrivals, or changes of plans."
];
export interface Traveller {
  label: string;
  price: number;
  count: number;
  displayLabel: string;
}
export function getTravellers(adultPrice: number, kidPrice: number): Traveller[] {
  return [
    { label: 'Adult', price: adultPrice, count: 1, displayLabel: 'Adult' },
    { label: 'Child (4-10 year old)', price: kidPrice, count: 0, displayLabel: 'Child' },
    { label: 'Infant (0-4 year old)', price: 0, count: 0, displayLabel: 'Infant' },
  ];
}
export function getTravellersForYacth(
  actualPaxCount: number,
  Cruising: number,
  Anchoring: number,
): Traveller[] {
  return [
    { label: 'Actual Pax Count', price: 0, count: actualPaxCount, displayLabel: 'Full Capacity' },
    { label: ' hr', price: Cruising, count: 1, displayLabel: 'Cruising' },
    { label: ' hr', price: Anchoring, count: 1, displayLabel: 'Anchoring' },
  ];
}

export const razorpay_key = 'rzp_live_udlCDMeLep9nk2';
export const key_secret = 'S0z7n1X96xlkCKURtlxmqoGn';

export const items = [
  { label: 'All', value: 'all' },
  { label: 'Dinner', value: 'dinner' },
  { label: 'Premium', value: 'premium' },
  { label: 'Luxury', value: 'luxury' },
  { label: 'Romantic', value: 'romantic' },
];