import priceList from '../../../resources/data/price-list';

const _buildRows = () => priceList.map(val => _buildTableRow(val)).reduce((prev, current) => prev + current, '');

const _buildTableRow = data => {
    return `<tr>
    <td>${data.name}</td>
    <td>$ ${data.price}</td>
    <td>${data.subtitle}</td>
    <td><button class="btn">Request</button></td>
</tr>`;
}

const _priceTable = `<table>
    <thead>
        <th>Session</th>
        <th>Price</th>
        <th>Description</th>    
    </thead>
    <tbody>
        ${_buildRows()}
    </tbody>
</table>`;

export default () => _priceTable;