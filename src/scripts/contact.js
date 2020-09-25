import '../css/contact.scss';

// Init Materalize Selects and character counter
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('select');
    M.FormSelect.init(elements, {dropdownOptions: {coverTrigger: false}});

    const textAreas = document.querySelectorAll('textarea#message');
    M.CharacterCounter.init(textAreas, {});

    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, {});
});