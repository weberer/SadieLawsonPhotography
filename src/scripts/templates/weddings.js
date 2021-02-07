import { priceList } from '../../../resources/data/price-list';
import getHeader from './components/paralax-header';
import buildCard from './components/investment-card';
import {PAGE_IDS, getPageName} from "../../../resources/data/site-pages";

const _buildCards = () => priceList.map(priceData => buildCard(priceData)).reduce((prev, current) => prev + current, '');

export default () => `${getHeader(getPageName(PAGE_IDS.WEDDINGS))}
    <div class="container">
        <div class="row">
            ${_buildCards()}
        </div>
    </div>`;
