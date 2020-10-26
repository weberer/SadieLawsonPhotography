import '../../../../css/components/paralax-header.scss';

document.addEventListener('DOMContentLoaded', function() {
    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, {});
});