import contactInfo from './contact-info';

export const PAGE_IDS = {
    INVESTMENT: 'INVESTMENT',
    CONTACT: 'CONTACT',
    TESTIMONIALS: 'TESTIMONIALS',
    INDEX: 'INDEX',
    GALLERY: 'GALLERY',
    PURCHASE_GIFT_CARD: 'PURCHASE_GIFT_CARD',
    CHECK_GIFT_CARD_BALANCE: 'CHECK_GIFT_CARD_BALANCE'
};

const _pages = {
    [PAGE_IDS.INDEX]: {name: 'Meet Sadie', href: 'index.html'},
    [PAGE_IDS.TESTIMONIALS]: {name: 'Testimonials', href: 'testimonials.html'},
    [PAGE_IDS.INVESTMENT]: {name: 'Investment', href: 'investment.html'},
    [PAGE_IDS.CONTACT]: {name: 'Contact', href: 'contact.html'},
    [PAGE_IDS.GALLERY]: {name: 'Gallery', href: contactInfo.pixieset},
    [PAGE_IDS.PURCHASE_GIFT_CARD]: {name: 'Purchase Gift Card', href: contactInfo.buyGiftCard, hidden: true},
    [PAGE_IDS.CHECK_GIFT_CARD_BALANCE]: {name: 'Check Gift Card Balance', href: contactInfo.checkGiftCardBalance, hidden: true}
};

const _getPageAttribute = (pageId, attr) => _pages[pageId][attr];

export const getPageName = pageId => _getPageAttribute(pageId, 'name');
export const getHref = pageId => _getPageAttribute(pageId, 'href');
export const isHidden = pageId => _getPageAttribute(pageId, 'hidden');
export const pages = Object.values(PAGE_IDS);