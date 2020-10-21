import getHeader from "./components/paralax-header";
import {getPageImage, getPageName, PAGE_IDS} from "../../../resources/data/site-pages";

export default () => `${getHeader(getPageImage(PAGE_IDS.INDEX), getPageName(PAGE_IDS.INDEX), '')}`;