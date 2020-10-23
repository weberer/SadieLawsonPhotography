import priceList from '../../../../resources/data/price-list';

document.addEventListener('DOMContentLoaded', function() {
    const textAreas = document.querySelectorAll('textarea#message');
    M.CharacterCounter.init(textAreas, {});
});

const htmlElementCollectionToArray = collection => Array.prototype.slice.call(collection);

const buildJsonData = (firstName, lastName, email, product, date, contactMethod, message, referral) => ({
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "product": product ? priceList.filter(item => item.id.toString() === product)[0].name : '', // Replace ID with product name
    "date": date,
    "contactMethod": contactMethod,
    "message": message,
    "referralMethod": referral
});

const resetFormInputs = form => {
    const validInputs = form.getElementsByClassName('valid');
    htmlElementCollectionToArray(validInputs).forEach(input => input.classList.remove('valid'));
}

const validateRadioGroup = (radioGroup, parent) => {
    const radioGroupArray = htmlElementCollectionToArray(radioGroup);
    const selected = radioGroupArray.map(input => input.checked).reduce((accumulator, isChecked) => accumulator || isChecked, false);
    updateInputStyle(parent, selected);
}

const getRadioGroupFromInput = radioInput => {
    const radioGroupName = radioInput.name;
    const inputElements = radioInput.form.getElementsByTagName('input');
    const inputElementArray = htmlElementCollectionToArray(inputElements);
    return inputElementArray.filter(input => input.type === 'radio' && input.name === radioGroupName);
}

const updateInputStyle = (input, isValid) => {
    if(input) {
        input.classList.remove(isValid ? 'invalid' : 'valid');
        input.classList.add(isValid ? 'valid' : 'invalid');
    }
}

const validateInput = (input) => {
    if(input) {
        updateInputStyle(input, (input.value !== '' && input.value !== undefined));
    }
}

const validateBookingForm = (formName, event) => {
    event.preventDefault();
    const form = document[formName];

    const firstNameInput = form.FirstName;
    const lastNameInput = form.LastName;
    const emailInput = form.Email;
    const productInput = form.Product;
    const dateInput = form.Date;
    const contactMethodInputGroup = form.ContactMethod;
    const messageInput = form.Message;
    const referralInput = form.Referral;

    const contactMethodParent = contactMethodInputGroup[0].parentElement;
    // DateInput doesn't appear on contact page
    if(dateInput)
        validateInput(dateInput, event);

    validateInput(productInput, event);
    validateRadioGroup(contactMethodInputGroup, contactMethodParent);

    const jsonData = buildJsonData(firstNameInput.value, lastNameInput.value, emailInput.value, productInput.value,
        dateInput ? dateInput.value : '', contactMethodInputGroup.value, messageInput.value, referralInput.value);

    console.log(jsonData);
    //TODO: Add JSON payload generation and submission to lambda function for email/processing

    form.reset();
}

// Add form and custom input validation handlers
document.addEventListener('DOMContentLoaded', () => {
    for (const form of document.getElementsByTagName('form')) {
        const name = form.name;
        form.addEventListener('submit', event => validateBookingForm(name, event));
        form.addEventListener('reset', event => resetFormInputs(event.target));
    }

    for (const select of document.getElementsByTagName('select')) {
    if (select.classList.contains('browser-default'))
        select.addEventListener('change', event => validateInput(select, event));
    }

    for (const input of document.getElementsByTagName('input')) {
        if (input.type === 'radio') {
            input.addEventListener('change', event => {
                const radioInput = event.target;
                const radioGroup = getRadioGroupFromInput(radioInput);
                const radioParent = radioInput.parentElement;
                validateRadioGroup(radioGroup, radioParent)
            });
        }
    }
});