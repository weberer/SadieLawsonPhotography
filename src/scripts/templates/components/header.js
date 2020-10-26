import pages from '../../../../resources/data/site-pages.js';
import * as logo from '../../../../resources/brandResources/sadie.png';

const _navButton = (text, page, isSideNav) => `<li><a href="${page}" class="waves-effect waves-light ${isSideNav ? "btn-flat primary-text-dark" : "btn-flat primary-text-dark"}">${text}</a></li>`;

const _buildNavButtons = isSideNav => pages.map(page =>_navButton(page.name, page.href, isSideNav)).reduce((accumulator, page) => accumulator + page, '');

export default () => `<nav class="navbar-fixed white">
    <div class="nav-wrapper">
        <div class="nav-content">
            <div class="container">
                <a href="index.html" ><img id="logo" class="brand-logo left" src="${logo.default}" alt="Sadie Lawson Photography"></a>
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
    <li>
        <div class="user-view">
            <div class="background">
                <img src="${logo.default}" alt="Sadie Lawson Photography">
            </div>
        </div>
    </li>
    ${_buildNavButtons(true)}
</ul>`;