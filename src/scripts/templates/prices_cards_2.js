import priceList from '../../../resources/data/price-list';
import bookingForm from './components/booking-form';
import getHeader from "./components/paralax-header";
import {PAGE_IDS, getPageImage, getPageName} from "../../../resources/data/site-pages";

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
    <div class="col s12">
        <div class="card price-card-2">
            <div class="card-content">
                <div class="card-title-row">
                    <span class="card-title primary-text-dark">${data.name}</span>
                    ${_getNotification(data)}
                    <a href="${_getEventButtonHref(data)}" class="btn-floating halfway-fab waves-effect modal-trigger secondary tooltipped" data-tooltip="Request a Session">
                        <i class="material-icons charcoal-text">book_online</i> <!--event-->
                    </a>
                </div>
                <span class="card-subtitle">${data.price}</span>
                <p>${data.subtitle}</p><br>
                <p>${data.description}</p>
            </div>
        </div>
    </div>
    ${!_hasTicketLink(data) ? _buildModal(data.id) : ''}`;

const _buildCards = () => priceList.map(val => _buildCard(val)).reduce((prev, current) => prev + current, '');

export default () => `${getHeader(getPageImage(PAGE_IDS.PRICES), getPageName(PAGE_IDS.PRICES))}
    <div class="container">
        <div class="row">
            ${_buildCards()}
        </div>
    </div>`;
