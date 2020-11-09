import {getHref} from "../../resources/data/site-pages";

const setRedirect = () => {
    const head = document.getElementsByTagName('head')[0];
    const redirect = document.querySelector("meta[http-equiv*='refresh']");
    const pageId = redirect.id;

    redirect.content = '0';
    redirect.content = `0; URL=${getHref(pageId)}`;
    head.appendChild(redirect);
}

setRedirect();