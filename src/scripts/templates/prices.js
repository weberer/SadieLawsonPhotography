import priceList from '../../../resources/data/price-list';
import getHeader from "./components/paralax-header";
import {PAGE_IDS, getPageImage, getPageName} from "../../../resources/data/site-pages";

const _buildRows = () => priceList.map(val => _buildTableRow(val)).reduce((prev, current) => prev + current, '');

const _buildTableRow = data => {
    return `<tr>
    <td>${data.name}</td>
    <td>$ ${data.price}</td>
    <td>${data.subtitle}</td>
    <td><button class="btn">Request</button></td>
</tr>`;
}

export default () => `${getHeader(getPageImage(PAGE_IDS.PRICES), getPageName(PAGE_IDS.PRICES))}
<!--<table id="price-table">
    <thead>
        <th>Session</th>
        <th>Price</th>
        <th>Description</th>    
    </thead>
    <tbody>
        ${_buildRows()}
    </tbody>
</table>-->`;