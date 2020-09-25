import priceList from '../../../resources/data/price-list';

const _buildCards = () => priceList.map(val => _buildCard(val)).reduce((prev, current) => prev + current, '');

const _buildCardClasses = data => `col s${data.smallWidth || 12} m${data.mediumWidth || 6} l${data.largeWidth || 6} 
offset-s${data.smallOffset || 0} offset-m${data.mediumOffset || 0} offset-l${data.largeOffset || 0}`;

const _buildCard = data => {
    return `<div class="row">
    <div class="${_buildCardClasses(data)}">
        <div class="card">
            <div class="card-image">
                <img src="${data.image}" alt="${data.name}">
                <span class="card-title">${data.name}</span>
                <a class="btn-floating halfway-fab waves-effect secondary">
                    <i class="material-icons charcoal-text">event</i> <!--book_online-->
                </a>
            </div>
            <div class="card-content">
                <span class="card-subtitle">Starting at $${data.price}</span>
                <p>${data.subtitle}</p><br>
                <p>${data.description}</p>
            </div>        </div>
    </div>`;
}

const _pageData = `<div class="container">
    <div class="row">
    ${_buildCards()}
    </div>`;

export default () => _pageData;