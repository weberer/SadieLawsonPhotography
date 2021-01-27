import { priceList } from '../../../../../resources/data/price-list';

document.addEventListener('DOMContentLoaded', function() {
    const textAreas = document.querySelectorAll('textarea#message');
    M.CharacterCounter.init(textAreas, {});
});

const _htmlElementCollectionToArray = collection => Array.prototype.slice.call(collection);

const _buildJsonData = (firstName, lastName, email, phone, product, date, contactMethod, message, referral) => ({
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "phone": phone,
    "product": product ? priceList.filter(item => item.id.toString() === product)[0].name : '', // Replace ID with product name
    "date": date,
    "contactMethod": contactMethod,
    "message": message,
    "referralMethod": referral
});

const _resetFormInputs = form => {
    const validInputs = form.getElementsByClassName('valid');
    _htmlElementCollectionToArray(validInputs).forEach(input => input.classList.remove('valid'));
}

const _updateInputStyle = (input, isValid) => {
    if(input) {
        input.classList.remove(isValid ? 'invalid' : 'valid');
        input.classList.add(isValid ? 'valid' : 'invalid');
    }
    return input && isValid;
}

const _validateRadioGroup = (radioGroup, parent) => {
    const radioGroupArray = _htmlElementCollectionToArray(radioGroup);
    const selected = radioGroupArray.map(input => input.checked).reduce((accumulator, isChecked) => accumulator || isChecked, false);
    return _updateInputStyle(parent, selected);
}

const _getRadioGroupFromInput = radioInput => {
    const radioGroupName = radioInput.name;
    const inputElements = radioInput.form.getElementsByTagName('input');
    const inputElementArray = _htmlElementCollectionToArray(inputElements);
    return inputElementArray.filter(input => input.type === 'radio' && input.name === radioGroupName);
}

const _validateInput = (input) => {
    if(input)
        return _updateInputStyle(input, (input.value !== '' && input.value !== undefined));

    return false;
}

const _validateBookingForm = (formName, event) => {
    event.preventDefault();
    const form = document[formName];

    const firstNameInput = form.FirstName;
    const lastNameInput = form.LastName;
    const emailInput = form.Email;
    const phoneInput = form.Phone;
    const productInput = form.Product;
    const dateInput = form.Date;
    const contactMethodInputGroup = form.ContactMethod;
    const messageInput = form.Message;
    const referralInput = form.Referral;

    const contactMethodParent = contactMethodInputGroup[0].parentElement;
    let isFormValid = true;

    // DateInput doesn't appear on contact page
    if(dateInput)
        isFormValid = _validateInput(dateInput, event) && isFormValid;

    isFormValid = _validateInput(productInput, event) && isFormValid;
    isFormValid = _validateRadioGroup(contactMethodInputGroup, contactMethodParent) && isFormValid;

    if(isFormValid) {
        const jsonData = _buildJsonData(firstNameInput.value, lastNameInput.value, emailInput.value, phoneInput.value, productInput.value,
            dateInput ? dateInput.value : '', contactMethodInputGroup.value, messageInput.value, referralInput.value);

        fetch('https://api.sadielawsonphotography.com/sendEmailTest', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': '8dkc2hLL7nRx4w1N78aL9EtZqAgXfuA4GKgOY5vi'
            }
        }).then(response => {
            console.log(response);
            form.reset();
            alert("Your message to SadieLawsonPhotography was sent successfully");
        });
    }
}

// Add form and custom input validation handlers
document.addEventListener('DOMContentLoaded', () => {
    for (const form of document.getElementsByTagName('form')) {
        const name = form.name;
        form.addEventListener('submit', event => _validateBookingForm(name, event));
        form.addEventListener('reset', event => _resetFormInputs(event.target));
    }

    for (const select of document.getElementsByTagName('select')) {
    if (select.classList.contains('browser-default'))
        select.addEventListener('change', event => _validateInput(select, event));
    }

    for (const input of document.getElementsByTagName('input')) {
        if (input.type === 'radio') {
            input.addEventListener('change', event => {
                const radioInput = event.target;
                const radioGroup = _getRadioGroupFromInput(radioInput);
                const radioParent = radioInput.parentElement;
                _validateRadioGroup(radioGroup, radioParent)
            });
        }
    }
});