import _PAGES from '../../../../resources/data/site-pages.js';

//btn primary-dark
const _navButton = (text, page, isSideNav) => `<li><a href="${page}" class="waves-effect waves-light ${isSideNav ? "btn-flat primary-text-dark" : "btn-flat"}">${text}</a></li>`;

const _buildNavButtons = isSideNav => _PAGES.map(page =>_navButton(page.name, page.href, isSideNav)).reduce((accumulator, page) => accumulator + page, '');

const headerHTML = `<nav class="navbar-fixed white">
    <div class="nav-wrapper">
        <div class="nav-content">
            <div class="container">
                <img id="logo" class="brand-logo left" src="../resources/logo.png" alt="Sadie Lawson Photography">
                <div class="button-container right">
                    <a  href="#" data-target="mobile-slider" class="sidenav-trigger"><i class="medium material-icons menu-icon primary-text-dark">menu</i></a>
                </div>
                <ul class="right hide-on-med-and-down">
                    ${_buildNavButtons(false)}
                </ul>
            </div>
        </div>
    </div>
</nav>
<ul id="mobile-slider" class="sidenav">
    ${_buildNavButtons(true)}
</ul>`;

export default () => headerHTML;