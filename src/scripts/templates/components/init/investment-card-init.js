import './booking-form-init';

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach(element => {
        const attributes = element.attributes;
        if (attributes.startDate && attributes.endDate) {
            const startDate = Date.parse(attributes.getNamedItem("startDate").value);
            const endDate = Date.parse(attributes.getNamedItem("endDate").value);
            const today = Date.now();

            if (today >= startDate && today < endDate) {
                element.classList.remove("hidden");
            }
        }
    })
});
