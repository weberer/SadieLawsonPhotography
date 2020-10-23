const _PHOTO_DIR = '../resources/photos/';

export default [
  {
    id: 1,
    name: 'Wedding Session',
    subtitle: 'You get hitched, I get rich',
    price: 'Starting at $2000',
    description: 'This package includes everything from the engagement package, plus 4 hours of wedding photos. Not ' +
        'providing the photographer with food at the reception adds $200 to the price.',
    image: _PHOTO_DIR  + 'wedding/wedding-flowers.jpg',
    smallWidth: '12',
    mediumWidth: '12',
    largeWidth: '8',
    smallOffset: '',
    mediumOffset: '',
    largeOffset: '2'
  },
  {
    id: 2,
    name: 'Engagement Session',
    subtitle: 'Pics of you and bae',
    price: 'Starting at $100',
    description: 'This package includes everything 8 photos which I guarantee will make you look fat and ugly.',
    image: _PHOTO_DIR  + 'engagement/couple-kissing.jpg',
    smallWidth: '12',
    mediumWidth: '6',
    largeWidth: '4',
    smallOffset: '',
    mediumOffset: '',
    largeOffset: ''
  },
  {
    id: 3,
    name: 'Winter Mini-Session',
    subtitle: '&mdash;November 7th 8th 3:00pm - 5:30pm&mdash;',
    notification: 'Only 1 Remaining!',
    price: '$50',
    description: 'Join me at Traditions Christmas Tree Farm for my 2020 Holiday mini sessions. Each session is designed ' +
        'to give you and yours time to have fun, laugh and make memories to treasure for a lifetime.<br><br>' +
        'Sessions will be 25 minutes long and come with 7 professionally edited photos. All this is yours for the cost of $50.',
    image: _PHOTO_DIR  + 'winter-mini/winter-mini-1 - Copy.jpg',
    ticketLink: 'https://www.eventbrite.com/e/2020-holiday-mini-sessions-tickets-122913907807',
    largeWidth: '8'
  },
  {
    id: 4,
    name: 'Maternity Session',
    subtitle: 'Because even a whale can look sexy...',
    price: 'Starting at $3.1415',
    description: '',
    image: _PHOTO_DIR  + 'maternity/maternity.jpg',
    mediumWidth: '7'
  },
  { id: 5,
    name: 'Newborn Session',
    subtitle: `I've had poops bigger than that!`,
    price: '$100 per lb of newborn',
    description: '',
    image: _PHOTO_DIR  + 'newborn/newborn.jpg',
    mediumWidth: '5'
  },
  {
    id: 6,
    name: 'Baby & Child Portrait Experience',
    subtitle: '45 Minute Shoot',
    price: '&mdash;$75&mdash;',
    description: 'Includes: <br>&nbsp;&nbsp;-Online Viewing Gallery<br>&nbsp;&nbsp;-Digital Download with print Rights',
    image: _PHOTO_DIR  + 'bdsm/bdsm.jpg'
  }
];