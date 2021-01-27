import {PAGE_IDS, getPageName} from '../../../resources/data/site-pages';
import getHeader from './components/paralax-header';


export default () => `${getHeader(getPageName(PAGE_IDS.WEDDINGS))}
    <div class="container">
        <h3>This is the Weddings Page!!!</h3>
    </div>`;