document.addEventListener('DOMContentLoaded', function() {
    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects, {dropdownOptions: {coverTrigger: false}});

    const textAreas = document.querySelectorAll('textarea#message');
    M.CharacterCounter.init(textAreas, {});
});


const validateBookingForm = (formId, event) => {
    console.log(formId);
    const form = document[formId];

    const dateInput = form.Date;
    const contactMethodInput = form.ContactMethod;
    console.log(contactMethodInput);

    // validate date input
    if(dateInput && dateInput.value === '') {
        dateInput.classList.add('invalid');
        //dateInput.getElementById
        event.preventDefault();
    } else if(dateInput && dateInput.classList.contains('invalid')) {
        dateInput.classList.remove('invalid');
    }

    // validate preferred contact method input
    const radioButtonGroup = contactMethodInput[0].parentElement;
    if(contactMethodInput.value === '') {
        radioButtonGroup.classList.add('invalid');
        event.preventDefault();
    } else if(radioButtonGroup.classList.contains('invalid')) {
        radioButtonGroup.classList.remove('invalid');
    }

    event.preventDefault(); //TODO: Remove Me
}

document.addEventListener('DOMContentLoaded', () => {
    document.validateBookingForm = validateBookingForm;
    for (const form of document.getElementsByTagName('form')) {
        const id = form.name;
        form.addEventListener('submit', event => validateBookingForm(id, event))
    }
});