import {pages, getHref, isHidden, getOrder, getPageName} from "../../../../resources/data/site-pages";
import * as logo from '../../../../resources/brandResources/sadie.png';

const _navButton = (text, href, order) => `<li style="order: ${order};"><a href="${href}" class="waves-effect waves-light btn-flat primary-text-dark"">${text}</a></li>`;

const _buildNavButtons = () => pages.map(id => !isHidden(id) ? _navButton(getPageName(id), getHref(id), getOrder(id)) : '').reduce((accumulator, page) => accumulator + page, '');

export default () => `<nav>
    <div class="container">
        <a href="index.html" class="logo"><img id="logo" src="${logo.default}" alt="Sadie Lawson Photography Logo"></a>
        <div class="button-container right">
            <a  href="#" data-target="mobile-slider" class="sidenav-trigger"><i class="medium material-icons menu-icon primary-text-dark">menu</i></a>
        </div>
        <div class="nav-btn-container right hide-on-med-and-down">
            <ul>
                ${_buildNavButtons()}
            </ul>
        </div>
    </div>
</nav>
<ul id="mobile-slider" class="sidenav">
    <li class="logo">
        <div>
            <img src="${logo.default}" alt="Sadie Lawson Photography">
        </div>
    </li>
    ${_buildNavButtons()}
</ul>`;