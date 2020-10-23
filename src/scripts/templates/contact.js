import {PAGE_IDS, getPageImage, getPageName} from '../../../resources/data/site-pages';
import contactInfo from '../../../resources/data/contact-info';
import getHeader from './components/paralax-header';
import getBookingForm from './components/booking-form';

const _PAGE_SUBTITLE = `<div class="row">
    <h5 class="col s12 page-subtitle center-align">${contactInfo.phoneNumber}</h5>
    <h5 class="col s12 page-subtitle center-align">${contactInfo.email}</h5>
</div>`;

const _contactContent = `${getHeader(getPageImage(PAGE_IDS.CONTACT), getPageName(PAGE_IDS.CONTACT), _PAGE_SUBTITLE)}
        <div class="section white row">
            ${getBookingForm(true, 0)}
    </div>`;

export default () => _contactContent;