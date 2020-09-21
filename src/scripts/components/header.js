import '../../css/header.scss';
import M from 'materialize-css';

const _PAGES = [
    {name: 'Prices', href: 'prices.html'},
    {name: 'Contact', href: 'contact.html'},
    {name: 'About', href: 'about.html'},
    {name: 'Home', href: 'index.html'}
];

const _navButton = (text, page) => `<li><a href="${page}" class="waves-effect waves-light btn-flat primary-dark">${text}</a></li>`;

const _buildNavButtons = () => _PAGES.map(page =>_navButton(page.name, page.href)).reduce((accumulator, page) => accumulator + page, '');

const _initSideNav = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const elems = document.querySelectorAll('.sidenav');
        const instances = M.Sidenav.init(elems, {});
    });
}

const headerElement = `<nav class="navbar-fixed white">
    <div class="nav-wrapper">
        <div class="nav-content">
            <div class="container">
                <img id="logo" class="brand-logo left" src="../resources/logo1.jpg" alt="Sadie Lawson Photography">
                <div class="button-container right">
                    <a  href="#" data-target="mobile-slider" class="sidenav-trigger"><i class="medium material-icons menu-icon primary-dark">menu</i></a>
                </div>
                <ul class="right hide-on-med-and-down">
                    ${_buildNavButtons()}
                </ul>
            </div>
        </div>
    </div>
</nav>
<ul id="mobile-slider" class="sidenav">
    ${_buildNavButtons()}
</ul>`;

const _attachHeaderToDocument = () => {
    const headerElementId = 'slp-header';
    const headerDiv = document.getElementById(headerElementId);
    headerDiv.innerHTML = headerElement;
}

_attachHeaderToDocument();
_initSideNav();