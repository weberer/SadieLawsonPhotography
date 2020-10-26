import {PAGE_IDS, getPageName} from '../../../resources/data/site-pages';
import contactInfo from '../../../resources/data/contact-info';
import getHeader from './components/paralax-header';
import getBookingForm from './components/booking-form';

const _PAGE_SUBTITLE = `<div class="row">
    <h6 class="col s12 center-align">${contactInfo.phoneNumber}</h6>
    <h6 class="col s12 center-align">${contactInfo.email}</h6>
</div>`;

const _contactContent = `${getHeader(getPageName(PAGE_IDS.CONTACT), _PAGE_SUBTITLE)}
        <div class="section white row">
            ${getBookingForm(true, 0)}
    </div>`;

export default () => _contactContent;