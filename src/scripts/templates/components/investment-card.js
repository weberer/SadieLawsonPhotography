import buildModal from './investment-card-modal';

const _getNotification = data => data.notification ? `<span class="card-notification white-text">${data.notification}</span>` : '';

const _hasTicketLink = data => data.ticketLink;

const _getEventButtonHref = data =>  _hasTicketLink(data) ? data.ticketLink + `" target="_blank` : `#price-card-modal_${data.id}`;

const _buildListColumn = item => `<ul class="col s12 l5">
        ${item.map(item => `<li>${item}</li>`).reduce((prev, current) => prev + current, '')}
    </ul>`;

export default data => `
    <div class="col s12" id="${data.key}">
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
                <p class="card-subtitle primary-accent-text">${data.subtitle || ''}</p><br>
                <p class="card-subtitle primary-accent-text">${data.description || ''}</p>
                ${data.included ? `<div class="row card-list-header"><h6 class="primary-text-dark">What's Included</h6><span class="included-line"></span></div>
                <div class="row">
                    ${_buildListColumn(data.included.filter((element, index) => index % 2 === 0))}
                    ${_buildListColumn(data.included.filter((element, index) => index % 2 === 1))}
                </div>` : ''}
                 ${data.addOns ? `<div class="row card-list-header"><h6 class="primary-text-dark">Optional Add-Ons</h6><span class="included-line"></span></div>
                <div class="row">
                    ${_buildListColumn(data.addOns.filter((element, index) => index % 2 === 0))}
                    ${_buildListColumn(data.addOns.filter((element, index) => index % 2 === 1))}
                </div>` : ''}
                <span class="text-small primary-accent-text">${data.finePrint || ''}</span>
            </div>
        </div>
    </div>
    ${!_hasTicketLink(data) ? buildModal(data.id) : ''}`;