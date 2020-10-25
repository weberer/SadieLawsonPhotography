import 'materialize-loader!../../materialize.config';
import '../css/main.scss';
import './templates/components/footer-init'
import './templates/components/paralax-header-init';
import * as url from '../../resources/brandResources/favicon.png';
import initHeader from './templates/components/header-init';
import M from "materialize-css";

initHeader();

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elements, {});

    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {});

    const tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips, {});
});

document.addEventListener('DOMContentLoaded', function() {
});

const setFavicon = () => {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url.default;
    document.getElementsByTagName('head')[0].appendChild(link);
}

setFavicon();