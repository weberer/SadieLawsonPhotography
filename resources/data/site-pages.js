import contactInfo from './contact-info';

export const PAGE_IDS = {
    INVESTMENT: 'INVESTMENT',
    CONTACT: 'CONTACT',
    TESTIMONIALS: 'TESTIMONIALS',
    INDEX: 'INDEX',
    GALLERY: 'GALLERY',
};

const _pages = {
    [PAGE_IDS.INDEX]: {name: 'Meet Sadie', href: 'index.html'},
    [PAGE_IDS.TESTIMONIALS]: {name: 'Testimonials', href: 'testimonials.html'},
    [PAGE_IDS.INVESTMENT]: {name: 'Investment', href: 'investment.html'},
    [PAGE_IDS.CONTACT]: {name: 'Contact', href: 'contact.html'},
    [PAGE_IDS.GALLERY]: {name: 'Gallery', href: contactInfo.pixieset}
};

const _getPageAttribute = (pageId, attr) => _pages[pageId][attr];

export const getPageName = pageId => _getPageAttribute(pageId, 'name');
export const href = pageId => _getPageAttribute(pageId, 'href');

export default Object.values(_pages);