import contactInfo from './contact-info';

export const PAGE_IDS = {
    INVESTMENT: 'INVESTMENT',
    CONTACT: 'CONTACT',
    TESTIMONIALS: 'TESTIMONIALS',
    INDEX: 'INDEX',
    GALLERY: 'GALLERY',
    WEDDINGS: 'WEDDINGS',
    PURCHASE_GIFT_CARD: 'PURCHASE_GIFT_CARD',
    CHECK_GIFT_CARD_BALANCE: 'CHECK_GIFT_CARD_BALANCE'
};

const _pages = {
    [PAGE_IDS.INDEX]: {name: 'Meet Sadie', href: 'index.html', order: 1},
    [PAGE_IDS.TESTIMONIALS]: {name: 'Testimonials', href: 'testimonials.html', order: 2},
    [PAGE_IDS.INVESTMENT]: {name: 'Investment', href: 'investment.html', order: 3},
    [PAGE_IDS.WEDDINGS]: {name: 'Weddings', href: 'weddings.html', order: 4},
    [PAGE_IDS.CONTACT]: {name: 'Contact', href: 'contact.html', order: 5},
    [PAGE_IDS.GALLERY]: {name: 'Gallery', href: contactInfo.pixieset, order: 6},
    [PAGE_IDS.PURCHASE_GIFT_CARD]: {name: 'Purchase Gift Card', href: contactInfo.buyGiftCard, hidden: true},
    [PAGE_IDS.CHECK_GIFT_CARD_BALANCE]: {name: 'Check Gift Card Balance', href: contactInfo.checkGiftCardBalance, hidden: true}
};

const _getPageAttribute = (pageId, attr) => _pages[pageId][attr];

export const getPageName = pageId => _getPageAttribute(pageId, 'name');
export const getHref = pageId => _getPageAttribute(pageId, 'href');
export const getOrder = pageId => _getPageAttribute(pageId, 'order');
export const isHidden = pageId => _getPageAttribute(pageId, 'hidden');

export const pages = Object.values(PAGE_IDS);