import {PAGE_IDS, getPageName} from '../../../resources/data/site-pages';
import getHeader from './components/paralax-header';
import buildTestimonial from "./components/testimonial";
import testimonials from "../../../resources/data/testimonials";


export default () => `${getHeader(getPageName(PAGE_IDS.TESTIMONIALS))}
    <div class="container">
        <div class="row testimonials">
            <h5 class="primary-text-dark center">Here's What People are Saying...</h5>
            ${testimonials.reduce((accumulator, testimonial) => accumulator + buildTestimonial(testimonial), '')}
        </div>
    </div>`;