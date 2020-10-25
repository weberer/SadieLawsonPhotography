import {PAGE_IDS, getPageImage, getPageName} from '../../../resources/data/site-pages';
import getHeader from './components/paralax-header';
import buildTestimonials from "./components/testimonial";

const _PAGE_SUBTITLE = ``;

const _aboutContent = `${getHeader(getPageImage(PAGE_IDS.ABOUT), getPageName(PAGE_IDS.ABOUT), _PAGE_SUBTITLE)}
    <div class="container">
        <div class="row">${buildTestimonials()}</div>
    </div>`;

export default () => _aboutContent;