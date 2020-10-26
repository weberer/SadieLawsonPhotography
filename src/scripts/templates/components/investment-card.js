import buildModal from './investment-card-modal';

const _getNotification = data => data.notification ? `<span class="card-notification white-text">${data.notification}</span>` : '';

const _hasTicketLink = data => data.ticketLink;

const _getEventButtonHref = data =>  _hasTicketLink(data) ? data.ticketLink + `" target="_blank` : `#price-card-modal_${data.id}`;

export default data => `
    <div class="col s12">
        <div class="card price-card-2">
            <div class="card-content">
                <div class="card-title-row">
                    <h5 class="card-title primary-text-dark">${data.name}</h5>
                    ${_getNotification(data)}
                    <a href="${_getEventButtonHref(data)}" class="btn-floating halfway-fab waves-effect modal-trigger secondary tooltipped" data-tooltip="Request a Session">
                        <i class="material-icons charcoal-text">book_online</i>
                    </a>
                </div>
                <span class="card-subtitle">${data.price}</span>
                <p class="card-subtitle primary-accent-text">${data.subtitle}</p><br>
                <p class="card-subtitle primary-accent-text">${data.description}</p>
            </div>
        </div>
    </div>
    ${!_hasTicketLink(data) ? buildModal(data.id) : ''}`;