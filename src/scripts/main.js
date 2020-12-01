import 'materialize-loader!../../materialize.config';
import '../css/main.scss';
import './templates/components/init/footer-init'
import './templates/components/init/paralax-header-init';
import * as url from '../../resources/brandResources/favicon.png';
import initHeader from './templates/components/init/header-init';
import M from "materialize-css";

const _clearModalForms = modalEl => {
    const forms = modalEl.getElementsByTagName('form')
    for(const form of forms) {
        form.reset();
    }
}

initHeader();

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elements, {});

    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {
        "onCloseEnd": _clearModalForms
    });

    const tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips, {});
});

document.addEventListener('DOMContentLoaded', function() {
});

const setFavicon = () => {
    const head = document.getElementsByTagName('head')[0];
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url.default;
    head.appendChild(link);
}

setFavicon();