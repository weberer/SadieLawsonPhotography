import priceList from '../../../../resources/data/price-list';

document.addEventListener('DOMContentLoaded', function() {
    const textAreas = document.querySelectorAll('textarea#message');
    M.CharacterCounter.init(textAreas, {});
});

const buildJsonData = (firstName, lastName, email, product, date, contactMethod, message, referral) => ({
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "product": product,
    "date": date,
    "contactMethod": contactMethod,
    "message": message,
    "referralMethod": referral
});

const validateInput = (input, event) => {
    console.log(input);
    console.log(input.value);
    if(input) {
        if(input.value === '' || input.value === undefined) {
            input.classList.remove('valid');
            input.classList.add('invalid');
            event.preventDefault();
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    }
};


const validateBookingForm = (formId, event) => {
    const form = document[formId];

    const firstNameInput = form.FirstName;
    const lastNameInput = form.LastName;
    const emailInput = form.Email;
    const productInput = form.Product;
    const dateInput = form.Date;
    const contactMethodInput = form.ContactMethod;
    const messageInput = form.Message;
    const referralInput = form.Referral;

    const radioButtonGroup = contactMethodInput[0].parentElement;

    validateInput(dateInput, event);
    validateInput(productInput, event);
    validateInput(radioButtonGroup, event);

    const jsonData = buildJsonData(firstNameInput.value, lastNameInput.value, emailInput.value, productInput.value,
        dateInput ? dateInput.value : '', contactMethodInput.value, messageInput.value, referralInput.value);

    console.log(jsonData);
    //TODO: Add JSON payload generation and submission to lambda function for email/processing
    event.preventDefault(); //TODO: Remove Me
}

document.addEventListener('DOMContentLoaded', () => {
    document.validateBookingForm = validateBookingForm;
    for (const form of document.getElementsByTagName('form')) {
        const id = form.name;
        form.addEventListener('submit', event => validateBookingForm(id, event))
    }

    for (const select of document.getElementsByTagName('select')) {
    console.log(select.classList);
    if (select.classList.contains('browser-default'))
        select.addEventListener('onChange', event => validateInput(select, event));
    }

    for (const input of document.getElementsByTagName('select')) {
        console.log(input.classList);
        console.log(input.type);
        if (input.type === 'date')
            input.addEventListener('onchange', event => validateInput(input, event));
    }
});