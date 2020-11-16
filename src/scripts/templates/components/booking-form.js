import priceList from '../../../../resources/data/price-list';

const _buildOption = (data, selectedId) => `<option value="${data.id}" ${selectedId === data.id ? 'selected' : ''}>${data.name}</option>`;

const _buildOptions = function(selectedId) {
    return priceList.map(item => _buildOption(item, selectedId)).reduce((collector, option) => collector + option, '');
};

const _getDatePicker = () => `
<input id="booking_date" name="Date" type="date">
<label class="active">Preferred Date *</label>
<span class="helper-text" data-error="Please choose a valid date"></span>`;

const _getProductSelect = (id, selectedId) => `<select id="product-select-${id}" name="Product" class="browser-default ${selectedId !== undefined ? 'hidden" disabled' : '"'}>
    <option value disabled ${selectedId === undefined ? 'selected' : ''}>Select Option</option>
        ${_buildOptions(selectedId)}
    <option value="other">Other</option>
</select>
<label for="product-select" class="active">Session you are Inquiring About *</label>
<span class="helper-text" data-error="Please select a session type"></span>`;

const buildBookingForm = (isFullPage, id) => (`
    <form id="booking-form-${id}" name="BookingForm${id}" class="col s12 m10 offset-m2"')">
        <div class="row">
            <div class="input-field col s12 m5">
                <input id="first_name-${id}" name="FirstName" type="text" class="validate" required>
                <label for="first_name-${id}">First Name *</label>
                <span class="helper-text" data-error="Please enter your First Name"></span>
            </div>
            <div class="input-field col s12 m5">
                <input id="last_name-${id}" name="LastName" type="text" class="validate" required>
                <label for="last_name-${id}">Last Name *</label>
                <span class="helper-text" data-error="Please enter your Last Name"></span>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 m5">
                <input id="email-${id}" name="Email" type="email" class="validate" required>
                <label for="email-${id}">Email *</label>
                <span class="helper-text" data-error="Please enter a valid email"></span>
            </div>
            <div class="input-field col s12 m5">
                <input id="phone-${id}" name="Phone" type="tel" class="validate">
                <label for="phone-${id}">Phone Number</label>
                <span class="helper-text" data-error="Please enter a valid phone number"></span>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 m5">
                ${(isFullPage ? _getProductSelect(id) : _getProductSelect(id, id) + _getDatePicker())}
            </div>
            <div class="input-field col s12 m6">
                <div id="contact-method-${id}" class="radio-button-group" data-error="Please select a contact method">
                    <input type="radio" id="radio-email-${id}" value="email" name="ContactMethod">
                    <label for="radio-email-${id}">Email</label>
                    <input type="radio" id="radio-text-${id}" value="text" name="ContactMethod">
                    <label for="radio-text-${id}">Text</label>
                    <input type="radio" id="radio-phone-${id}" value="phone" name="ContactMethod">
                    <label for="radio-phone-${id}">Phone Call</label>
                </div>
                 <label class="active" for="contact-method-${id}">Preferred Contact Method *</label>
                 <span class="helper-text" data-error="Please select a preferred contact method"></span>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 m10">
                <textarea id="message-${id}" name="Message" class="materialize-textarea" required data-length="1000"></textarea>
                <label for="message-${id}">Message *</label>
                <span class="helper-text" data-error="Please enter a message"></span>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 m10">
                <textarea id="message-${id}" name="Referral" class="materialize-textarea" data-length="100"></textarea>
                <label for="message-${id}">How did you hear about Me?</label>
                <span class="helper-text" data-error="Please enter a message"></span>
            </div>
        </div>
        <div class="row">
            <div class="col offset-s7 offset-m8">
                <button type="submit" class="btn secondary charcoal-text waves-effect">Send Request</button>
            </div>
        </div>
    </form>`);

export default (isFullPage, name) => buildBookingForm(isFullPage, name);