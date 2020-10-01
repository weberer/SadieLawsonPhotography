import priceList from '../../../../resources/data/price-list';

const _buildOption = data => `<option value="${data.id}">${data.name}</option>`;

const _buildOptions = () =>  priceList.map(item => _buildOption(item)).reduce((collector, option) => collector + option, '');

const _getDatePicker = () => `
<input id="booking_date" name="Date" type="date">
<label class="active">Preferred Date *</label>
<span class="helper-text" data-error="Please choose a valid date"></span>`;

const _getProductSelect = () => `<select>
    <option value disabled selected>Select Option</option>
        ${_buildOptions()}
    <option value="other">Other</option>
</select>
<label>Session you are Inquiring About *</label>
<span class="helper-text" data-error="Please select a session type"></span>`;

const abc = (isFullPage, id) => (`
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
            <div class="input-field col s12 m10">
                <input id="email-${id}" name="Email" type="email" class="validate" required>
                <label for="email-${id}">Email *</label>
                <span class="helper-text" data-error="Please enter a valid email"></span>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 m5">`
                + (isFullPage ? _getProductSelect() : _getDatePicker()) +
            `</div>
            <div class="input-field col s12 m6">
                <!--<select>
                    <option value disabled selected>Select Option</option>
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                    <option value="call">Phone Call</option>
                </select>
                <label>Preferred Contact Method *</label>
                <span class="helper-text" data-error="Please select a preferred contact method"></span> -->
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
            <div class="col offset-s9 offset-m8 offset-l9">
            <input type="submit" value="Send Request" class="btn waves-effect">
            </div>
        </div>
    </form>`);

export default (isFullPage, name) => abc(isFullPage, name);