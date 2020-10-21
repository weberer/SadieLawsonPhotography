import priceList from '../../../resources/data/price-list';
import bookingForm from './components/booking-form';

const _buildCardClasses = data => `col s${data.smallWidth || 12} m${data.mediumWidth || 6} l${data.largeWidth || 6} 
offset-s${data.smallOffset || 0} offset-m${data.mediumOffset || 0} offset-l${data.largeOffset || 0}`;

const _getNotification = data => data.notification ? `<span class="card-notification white-text">${data.notification}</span>` : '';

const _hasTicketLink = data => data.ticketLink;

const _getEventButtonHref = data =>  _hasTicketLink(data) ? data.ticketLink + `" target="_blank` : `#price-card-modal_${data.id}`;

const _buildModal = id => `<div id="price-card-modal_${id}" class="price-modal modal">
        <div class="modal-header row">
            <h5 class="col">Book a Session</h5>
            <a href="#!" class="col right modal-close btn-flat waves-effect">
                <i class="material-icons charcoal-text">close</i>
            </a>
        </div>
        <div class="modal-content">
            ${bookingForm(false, id)}
        </div>
    </div>`;

const _buildCard = data => `
    <div class="${_buildCardClasses(data)}">
        <div class="card">
            <div class="card-image">
                ${_getNotification(data)}
                <img class="materialboxed" src="${data.image}" alt="${data.name}">
                <span class="card-title">${data.name}</span>
                <a href="${_getEventButtonHref(data)}" class="btn-floating halfway-fab waves-effect modal-trigger secondary">
                    <i class="material-icons charcoal-text">book_online</i> <!--event-->
                </a>
            </div>
            <div class="card-content">
                <span class="card-subtitle">${data.price}</span>
                <p>${data.subtitle}</p><br>
                <p>${data.description}</p>
            </div>
        </div>
    </div>
    ${!_hasTicketLink(data) ? _buildModal(data.id) : ''}`;

const _buildCards = () => priceList.map(val => _buildCard(val)).reduce((prev, current) => prev + current, '');

export default () => `<div class="container">
    <div class="row">
        ${_buildCards()}
    </div>
</div>`;
