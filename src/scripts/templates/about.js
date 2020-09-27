import pages from '../../../resources/data/site-pages';
import getHeader from './components/paralax-header';

const _PAGE_TITLE = pages.filter(page => page.id === 'about')[0].name;

const _PAGE_SUBTITLE = ``;
const _HEADER_IMAGE = '../resources/photos/other/other-1.jpg';

const _aboutContent = `${getHeader(_HEADER_IMAGE, _PAGE_TITLE, _PAGE_SUBTITLE)}
    <div class="section white row">
        
    </div>;`;

export default () => _aboutContent;