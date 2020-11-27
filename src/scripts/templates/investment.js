import priceList from '../../../resources/data/price-list';
import contactInfo from '../../../resources/data/contact-info';
import getHeader from './components/paralax-header';
import buildCard from './components/investment-card';
import {PAGE_IDS, getPageName} from "../../../resources/data/site-pages";

const _buildCards = () => priceList.map(priceData => buildCard(priceData)).reduce((prev, current) => prev + current, '');

export default () => `${getHeader(getPageName(PAGE_IDS.INVESTMENT))}
    <div class="container">
        <div class="row">
            <a href="${contactInfo.buyGiftCard}" class="col btn-large waves-effect waves-light s10 m8 l3 offset-s1 offset-m2 offset-l2">Purchase Gift Card</a>
            <a href="${contactInfo.checkGiftCardBalance}" class="col btn-large waves effect waves-light s10 m8 l3 offset-s1 offset-m2 offset-l2">Check Gift Card Balance</a>
        </div>
        <div class="row">
            ${_buildCards()}
        </div>
    </div>`;
