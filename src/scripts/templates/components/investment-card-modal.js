import bookingForm from "./booking-form";

export default id => `<div id="price-card-modal_${id}" class="price-modal modal">
        <div class="modal-header row">
            <h5 class="col primary-text-dark">Book a Session</h5>
            <a href="#!" class="col right modal-close btn-flat waves-effect">
                <i class="material-icons charcoal-text">close</i>
            </a>
        </div>
        <div class="modal-content">
            ${bookingForm(false, id)}
        </div>
    </div>`;