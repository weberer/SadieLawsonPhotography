import {PAGE_IDS, getPageImage, getPageName} from '../../../resources/data/site-pages';
import getHeader from './components/paralax-header';

const _PAGE_SUBTITLE = ``;

const _aboutContent = `${getHeader(getPageImage(PAGE_IDS.ABOUT), getPageName(PAGE_IDS.ABOUT), _PAGE_SUBTITLE)}
    <div class="section white row">
        <input type="text" id="datepicker" class="col s3 offset-s3">
    </div>`;

export default () => _aboutContent;