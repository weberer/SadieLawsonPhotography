const _formatPrice = price => `&mdash;${price}&mdash;`
const _mileageStatement = '* Mileage is calculated as one-way travel';

export const priceList = [
  {
    id: 0,
    name: 'Hot Cocoa  Mini Sessions',
    key: "coco",
    subtitle: "December 20th 2020 &mdash; 2:00pm - 4:00pm",
    price: _formatPrice('$50'),
    notification: 'Limited Spots Available',
    description: `It’s that time of year again! Grab a blanket and snuggle up with a big cup of hot cocoa!<br>
    Join me at Schreiner Park in Lancaster for an amazing photo shoot for the whole family. Sessions are 15 minutes long.
    The list of open spots can be found on the Eventbrite site by clicking the 'Request a Session' icon above.`,
    ticketLink: 'https://www.eventbrite.com/e/131419576491/',
    startDate: '12-01-2020',
    endDate: '12-20-2020'
  },
  {
    id: 1,
    name: 'Weddings',
    key: "wedding",
    subtitle: '2, 4, 6 and 8 Hour Options Available',
    price: _formatPrice('Packages Starting at $200'),
    description: `<a href="" class="btn waves-effect waves-light">Hello World</a>
      <a href="" class="btn waves-effect waves-light">Silver Package</a>
      <a href="" class="btn waves-effect waves-light">Platinum Package</a>
    `,
    /*included: [
        "50 Curated and Edited Photos",
        "2 Hours of Photographer Time",
        "Complementary Engagement Session <strong>OR</strong> 10 Additional Photos",
        "20 Miles of Photographer Travel*",
        "Digital Gallery",
        "Print Rights"
    ],
    addOns: [
        "Additional Photos - $10 Each",
        "Unlimited Photos - $200",
        "Additional Time - $200 per 2 Hours",
        "Extended Travel Distance - $10 per 10 Miles*"
    ],
    finePrint: _mileageStatement*/
  },
  {
      id: 2,
      name: 'Elopement Weddings',
      key: 'elopement',
      subtitle: '6 Hours',
      price: _formatPrice('Starting at $300'),
      included: [
          "<strong>Everything</strong> from the Wedding",
          "Additional 10 Miles of Photographer Travel*"
      ],
      finePrint: _mileageStatement
  },
  {
    id: 3,
    name: 'Engagement Session',
    key: "engagement",
    subtitle: '1 Hour Shoot',
    price: _formatPrice('Starting at $100'),
    included: [
        "15 Curated and Edited Photos",
        "Single Location",
        "20 Miles of Photographer Travel*",
        "Digital Gallery",
        "Print Rights"
    ],
    addOns: [
        "Additional Photos - $10 Each",
        "Second Location - $50",
        "Extended Travel Distance - $10 per 10 Miles*"
    ],
    finePrint: _mileageStatement
  },
  {
    id: 4,
    name: 'Family, Friends and Individual Portraits',
    key: "family",
    subtitle: '30 Minute Shoot',
    price: _formatPrice('Starting at $100'),
    description: `"The love of family and friends is the glue that holds your heart together." - Jennifer Betts
    <br><br>
    Capture what makes your family, relationship or friendship special. This session is perfect for families large and 
    small, couples, friends and even individuals looking to capture those special moments.`,
    included: [
        "10+ Curated and Edited Photos",
        "Up to 4 Family Members (Not Including Pets)",
        "1 Outfit per Family Member",
        "1 Location",
        "20 Miles of Photographer Travel*",
        "Digital Gallery",
        "Print Rights"
    ],
    addOns: [
        "Additional Family Member - $10",
        "Additional Outfit - $10",
        "Additional Location - $20",
        "Extended Travel Distance - $10 per 10 Miles*"
    ],
    finePrint: _mileageStatement
  },
  {
    id: 5,
    name: 'Senior Portrait',
    key: 'senior',
    subtitle: "It's finally here, senior year!! Let me help you remember this life milestone",
    price: _formatPrice('Starting at $150'),
    included: [
        "7 Photos",
        "2 Outfits",
        "2 Locations (Indoor, Outdoor, or Both)",
        "20 Miles of Photographer Travel*",
        "Consulting session before the shoot to help you look your best",
        "Digital Gallery",
        "Print Rights"
    ],
    addOns: [
        "Additional Outfit - $20",
        "Additional Location - $20",
        "Extended Travel Distance - $10 per 10 Miles*"
    ],
    finePrint: _mileageStatement + ". This includes travel to both the first location, and between multiple locations."
  },
  {
    id: 6,
    name: "Professional Headshots",
    key: 'headshot',
    price: _formatPrice('Starting at $50'),
    description: `Professional Headshot Sessions typically last between 15 and 30 minutes depending on your needs.<br>
    Group pricing options available. Please contact Sadie Lawson Photography for a quote.`,
    included: [
      "3 Professionally Edited Photos",
      "1 Outfit",
      "Professional Backgrounds in-studio",
      "Consulting session before the shoot to help you look your best",
      "Digital Gallery",
      "Print Rights"
    ],
    addOns: [
      "Additional Photos - $10 Each",
      "Additional Outfit - $20",
      "On-Location Shoot - $30 (Includes 20 Miles of Photographer Travel)*",
      "Extended Travel Distance - $10 per 10 Miles*"
    ],
    finePrint: _mileageStatement
  },
  {
    id: 7,
    name: 'Cherish the Gift of Life Package',
    key: 'gift+of+life',
    price: _formatPrice('Starting at $400'),
    notification: '$100 in Savings',
    description: `Cherish the gift of your child with this amazing offer 
    from SadieLawsonPhotography. This package includes <strong>EVERYTHING</strong> in our Maternity,
    Newborn and Life's Milestone Packages, and a $100 discount. This is the perfect way
    to celebrate the wonders of your growing family.`,
    finePrint: '* Additional charges for package add Ons still apply'
  },
  {
    id: 8,
    name: 'Maternity',
    key: 'maternity',
    subtitle: '45 Minute Sessions',
    price: _formatPrice('Starting at $150'),
    included: [
      "10+ Curated and Edited Photos",
      "2 Outfits",
      "1 Location",
      "20 Miles of Photographer Travel*",
      "Digital Gallery",
      "Print Rights"
    ],
    addOns: [
      "Additional Outfit - $20",
      "Additional Location - $20"
    ],
    finePrint: _mileageStatement
  },
  { id: 9,
    name: 'Newborn',
    key: 'newborn',
    subtitle: `2-3 Hour Session*`,
    price: _formatPrice('Starting at $200'),
    included: [
      "5+ Curated and Edited Photos",
      "Unlimited Outfits / Swaddles",
      "Studio Location",
      "Digital Gallery",
      "Print Rights"
    ],
    addOns: [
      "At-Home Location - $50 (Includes 20 Miles of Photographer Travel)*",
      "Extended Travel Distance - $10 per 10 Miles*",
      "Additional Time - $50 per Hour"
    ],
    finePrint: _mileageStatement
  },
  {
    id: 10,
    name: "Life's Milestones",
    key: 'milestone',
    subtitle: '1 hour Sessions',
    price: _formatPrice('Starting at $150'),
    description: `It is amazing how fast children grow! Capture the precious moments of your child's first years of life 
    with this amazing deal. Great times to request these sessions are at 6 months, 1 year and 2 years.`,
    included: [
      "10+ Curated and Edited Photos",
      "1 Outfit",
      "1 Location",
      "Digital Gallery",
      "Print Rights"
    ],
    addOns: [
      "Cake Smash - $50",
      "Additional Outfit - $20",
      "At-Home Location - $50 (Includes 20 Miles of Photographer Travel)*",
      "Extended Travel Distance - $10 per 10 Miles*",
      "Additional Time - $50 Per Hour"
    ],
    finePrint: _mileageStatement
  }
];

export const weddingPackages = [
    {
        name: 'Silver Package',
        key: 'silver',
        price: _formatPrice("$200"),
        description: "",
        included: [
            "2 Hours of Photographer Time",
            "25 Curated and Edited Photos",
            "20 Miles of Photographer Travel*",
            "Digital Gallery",
            "Print Rights"
        ]
    },
    {
        name: 'Gold Package',
        key: 'gold',
        price: _formatPrice("$400"),
        description: "",
        included: [
            "Everything From the Silver Package",
            "4 Hours Total of Photographer Time",
            "50 Total Curated and Edited Photos",
            "Customized Flash Drive"
        ]
    },
    {
        name: 'Platinum Package',
        key: 'platinum',
        price: _formatPrice("$600"),
        description: "",
        included: [
            "Everything From the Gold Package",
            "6 Hours Total of Photographer Time",
            "Complementary Engagement Session or 10 Additional Photos"
        ]
    },
    {
        name: 'Diamond Package',
        key: 'diamond',
        price: _formatPrice("$1,000"),
        description: "",
        included: [
            "Everything From the Gold Package",
            "8 Hours Total of Photographer Time",
            "100 Total Curated and Edited Photos",
            "Optional Second Shooter",
            "Reception Video Testimonial"
        ]
    },
    {
        name: 'Elopement Package',
        key: 'elopement',
        price: _formatPrice("300"),
        description: "",
        included: [
            "Everything From the Gold Package",
            "6 Hours Total of Photographer Time",
            "40 Miles Total of Photographer Travel*",
            "Maximum of 10 Guests"
        ]
    }
];

export const weddingAddOns = [
    {
        name: "Additional Travel Distance",
        key: "mileage",
        price: "$10 per 10 Miles (calculated as one-way travel)",
        description: ""
    },
    {
        name: "Additional Photos",
        key: "additional",
        price: "$50 per 50 Photos",
        description: ""
    },
    {
        name: "Unlimited Photos",
        key: "unlimited",
        price: "$200",
        description: ""
    },
    {
        name: "Wedding Adventure Shoot",
        key: "adventure",
        price: "200",
        description: ""
    },
    {
        name: "Reception Video Testimonial",
        key: "testimonial",
        price: "$100",
        description: ""
    },
    {
        name: "Additional Flash Drives",
        key: "flashdrive",
        price: "25",
        description: ""
    }
];

