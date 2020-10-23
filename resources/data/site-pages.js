import contactInfo from './contact-info';

const _PHOTO_DIR = '../resources/photos/';

export const PAGE_IDS = {
    PRICES: 'PRICES',
    CONTACT: 'CONTACT',
    ABOUT: 'ABOUT',
    INDEX: 'INDEX',
    GALLERY: 'GALLERY',
};

const _pages = {
    [PAGE_IDS.INDEX]: {name: 'Home', href: 'index.html', image: _PHOTO_DIR  + 'couples/couple_E_M.jpg'},
    [PAGE_IDS.ABOUT]: {name: 'Meet Sadie', href: 'about.html', image: _PHOTO_DIR  + 'other/other-3.jpg'},
    [PAGE_IDS.PRICES]: {name: 'Investment', href: 'prices.html', image: _PHOTO_DIR  + 'couples/couples2.jpg'},
    [PAGE_IDS.CONTACT]: {name: 'Contact', href: 'contact.html', image: _PHOTO_DIR  + 'other/other-2.jpg'},
    [PAGE_IDS.GALLERY]: {name: 'Gallery', href: contactInfo.pixieset}
};

const _getPageAttribute = (pageId, attr) => _pages[pageId][attr];

export const getPageName = pageId => _getPageAttribute(pageId, 'name');
export const href = pageId => _getPageAttribute(pageId, 'href');
export const getPageImage = pageId => _getPageAttribute(pageId, 'image');

export default Object.values(_pages);