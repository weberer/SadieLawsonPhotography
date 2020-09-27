import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, {});
});