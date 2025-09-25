export const adventures: any[] = [  
   {
  "cruiseId": 1,
  "title": "Dudhsagar Waterfall Trip",
  "subTile": "Dudhsagar Waterfall Trip",
  "category": "Nature & Adventure",
  "routingUrl": "dudhsagar-waterfall-trip",
  "rating": "4.8",
  "reviews": "5100",
  "oldPrice": "2199",
  "booked": "3M+",
  "buttonText": "Book this activity & get 20% off",
  "reportPrice": 1500,
  "reportPriceWithTransport": 1500,
  "currentPrice": "1799",
  "image": "/assets/detailimages/SOU.webp",
  "bannerImgs": [
    "/assets/detailimages/SOU1.webp",
    "/assets/detailimages/SOU2.webp",
    "/assets/detailimages/SOU3.webp",
    "/assets/detailimages/SOU4.webp",
    "/assets/detailimages/SOU.webp"
  ],

  "priceIncludes": {
    "title": "Price Includes",
    "sections": [
      {
        "category": "Ticket",
        "items": [
          "Entry fees to Dudhsagar Waterfall",
          "Forest Department Jeep Safari"
        ]
      },
      {
        "category": "Meals",
        "items": [
          "Packed breakfast on the way",
          "Traditional Goan veg/non-veg lunch"
        ]
      },
      {
        "category": "Activities",
        "items": [
          "Visit to Spice Plantation with guided tour"
        ]
      }
    ]
  },

  "topFeatures": [
    {
      "icon": "event_available",
      "title": "Instant Confirmation",
      "description": "Tickets and safari slots confirmed right away"
    },
    {
      "icon": "free_cancellation",
      "title": "Free Cancellation",
      "description": "Get a full refund up to 48 hours in advance"
    },
    {
      "icon": "local_activity",
      "title": "Mobile Tickets",
      "description": "Show your ticket on phone to join the trip"
    }
  ],

  "mustKnow": [
    {
      "about1": "Early morning pickup between 6:00–7:00 AM followed by a 2-hour drive to the waterfall gate."
    },
    {
      "about1": "Board the forest department jeep and ride through dense jungle trails to reach Dudhsagar."
    },
    {
      "about1": "Take a refreshing dip in the natural pool or simply enjoy the view of the cascading 4-tiered waterfall."
    },
    {
      "about1": "Enjoy a traditional Goan lunch and visit a spice plantation before heading back."
    }
  ],

  "features": [
    {
      "name": "Duration 10 Hours",
      "image": "./assets/images/svg/cancellation-ico.svg"
    },
    {
      "name": "Mollem, Goa, India",
      "image": "./assets/images/svg/bolt-ico.svg"
    },
    {
      "name": "Jeep Safari & Waterfall",
      "image": "./assets/images/svg/mobile-ico.svg"
    },
    {
      "name": "Transport Included",
      "image": "./assets/images/svg/transfer-ico.svg"
    }
  ],

  "overviewDesc": "The Dudhsagar Waterfall trip offers an adventurous journey into the Western Ghats. Ride through the Bhagwan Mahavir Wildlife Sanctuary in a jeep, witness one of India's tallest waterfalls, swim in natural pools, and explore Goan spices at a plantation tour. Ideal for nature lovers and thrill seekers…",

  "overview": [
    { "inclusion1": "Pickup from hotel (shared AC transport)" },
    { "inclusion1": "Forest Jeep Safari to Dudhsagar" },
    { "inclusion1": "Time at the waterfall for swimming & photos" },
    { "inclusion1": "Visit to Goan spice plantation" },
    { "inclusion1": "Breakfast & authentic Goan lunch" },
    { "inclusion1": "Return drop in evening" }
  ],

  "thingsToCarry": [
    { "exclusion1": "Carry extra clothes, swimwear, and towel." },
    {
      "exclusion1": "Shoes with good grip are highly recommended for trekking to the pool."
    },
    {
      "exclusion1": "Camera/phone waterproof pouches not included."
    }
  ],

  "needToKnows": [
    {
      "needToKnow": "Tip: Avoid carrying food items in hand as monkeys near the falls are very active."
    },
    {
      "needToKnow": "Note: Jeep safari is compulsory for entry into the forest. Cost included in package."
    },
    {
      "needToKnow": "Pickup time is between 6:00–7:00 AM based on hotel location. Exact time will be informed a day prior."
    }
  ],

  "transport": [
    {
      "title": "Without Transport",
      "isSelected": true,
      "originalamt": "2199",
      "discountedamt": "1799",
      "kidAmt": "1799",
      "desc": [
        "Self-report at Mollem Forest Gate",
        "Includes jeep safari & waterfall access",
        "Spice plantation visit with lunch",
        "Breakfast not included"
      ]
    },
    {
      "title": "With Transport",
      "isSelected": false,
      "originalamt": "2199",
      "discountedamt": "1799",
      "kidAmt": "1799",
      "desc": [
        "Hotel pickup & drop-off (shared AC transport)",
        "Jeep safari through Bhagwan Mahavir forest",
        "Waterfall visit + swim time",
        "Spice plantation tour + all meals"
      ]
    }
  ]
  },
];

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
