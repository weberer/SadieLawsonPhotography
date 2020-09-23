const _priceList = [
    {
        name: "Engagement",
        price: 100,
        description: "Pics of you and bae"
    },
    {
        name: "Wedding",
        price: 2000,
        description: "You get hitched, I get rich"
    },
    {
        name: "Winter-Minies",
        price: 20,
        description: "Freazin-For-No-Reason"
    },
    {
        name: "Maternity",
        price: 3.1415,
        description: "Nobody cares..."
    },
    {
        name: "BDSM-Special",
        price: 1000,
        description: "Clothes optional"
    }
];

const _buildRows = () => _priceList.map(val => _buildTableRow(val)).reduce((prev, current) => prev + current, '');

const _buildTableRow = data => {
    return `<tr>
    <td>${data.name}</td>
    <td>$ ${data.price}</td>
    <td>${data.description}</td>
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