import '../css/contact.scss';
import './templates/components/paralax-header-init';

// Init Materalize Selects and character counter
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('select');
    M.FormSelect.init(elements, {dropdownOptions: {coverTrigger: false}});

    const textAreas = document.querySelectorAll('textarea#message');
    M.CharacterCounter.init(textAreas, {});
});