import {pages, getHref, isHidden, getOrder, getPageName} from "../../../../resources/data/site-pages";
import * as logo from '../../../../resources/brandResources/sadie.png';

const _navButton = (text, href, order, isSideNav) => `<li style="order: ${order};"><a href="${href}" class="waves-effect waves-light ${isSideNav ? "btn-flat primary-text-dark" : "btn-flat primary-text-dark"}">${text}</a></li>`;

const _buildNavButtons = isSideNav => pages.map(id => !isHidden(id) ? _navButton(getPageName(id), getHref(id), getOrder(id), isSideNav) : '').reduce((accumulator, page) => accumulator + page, '');

export default () => `<nav class="navbar-fixed white">
    <div class="nav-wrapper">
        <div class="nav-content">
            <div class="container">
                <a href="index.html" ><img id="logo" class="brand-logo left" src="${logo.default}" alt="Sadie Lawson Photography"></a>
                <div class="button-container right">
                    <a  href="#" data-target="mobile-slider" class="sidenav-trigger"><i class="medium material-icons menu-icon primary-text-dark">menu</i></a>
                </div>
                <div class="nav-btn-container right hide-on-medium-and-down">
                    <ul class="right hide-on-med-and-down">
                        ${_buildNavButtons(false)}
                    </ul>
                </div>
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