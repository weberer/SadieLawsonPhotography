//const _PHOTO_DIR = '../resources/photos/';
const _formatPrice = price => `&mdash;${price}&mdash;`
const _mileageStatement = '* Mileage is calculated as one-way travel';

export default [
/*    {
    id: 0,
    name: 'Hot CoCo  Mini-Session',
    subtitle: 'November 7th 8th 3:00pm - 5:30pm',
    notification: 'Limited Spots Available',
    price: '&mdash;$50&mdash;',
    description: 'Join me at Traditions Christmas Tree Farm for my 2020 Holiday mini sessions. Each session is designed ' +
        'to give you and yours time to have fun, laugh and make memories to treasure for a lifetime.<br><br>' +
        'Sessions will be 25 minutes long and come with 7 professionally edited photos. All this is yours for the cost of $50.',
//    image: _PHOTO_DIR  + 'winter-mini/winter-mini-1 - Copy.jpg',
    ticketLink: 'https://www.eventbrite.com/e/2020-holiday-mini-sessions-tickets-122913907807',
//    largeWidth: '8'
  },*/
  {
    id: 1,
    name: 'Weddings',
    subtitle: '2, 4, 6 and 8 Hour Options Available',
    price: _formatPrice('Starting at $200'),
    included: [
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
    finePrint: _mileageStatement
  },
  /*{
    id: 2,
    name: 'Elopement Weddings',
    subtitle: '6 Hours',
    price: '&mdash;Starting at $300&mdash;',
    description: `Elopement Wedding Packages Include Everything From the Standard Wedding Package, Plus:
    <ul>
      <li>Extra 2 Hours</li>
      <li>50% Discount</li>
      <li>20 Miles of Photographer Travel*</li>
    </ul>
    <span class="primary-accent-text">Optional Add-Ons:</span>
    <ul>
      <li>Extended Travel Distance - Calculated Per Mile</li>
    </ul>
    <span class="text-small primary-accent-text">* Mileage is calculated as one-way travel</span>`,
  },*/
  {
    id: 3,
    name: 'Engagement Session',
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
    name: 'Family Portrait',
    subtitle: '30 Minute Shoot',
    price: _formatPrice('Starting at $100'),
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