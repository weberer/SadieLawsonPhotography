import getHeader from "./components/paralax-header";
import {getPageImage, getPageName, PAGE_IDS} from "../../../resources/data/site-pages";
import buildTestimonials from "./components/testimonial";

export default () => `${getHeader(getPageImage(PAGE_IDS.INDEX), getPageName(PAGE_IDS.INDEX), '')}
    <div id="investment-carousel" class="carousel carousel-slider">
        <a class="carousel-item" href="#one!"><img src="../resources/photos/carousel/BabyandChildExperience.png"></a>
        <a class="carousel-item" href="#two!"><img src="../resources/photos/carousel/BabyandChildExperience2.png"></a>
        <a class="carousel-item" href="#three!"><img src="../resources/photos/carousel/BabyandChildExperience3.png"></a>
        <a class="carousel-item" href="#four!"><img src="../resources/photos/carousel/BabyandChildExperience4.png"></a>
        <a class="carousel-item" href="#five!"><img src="../resources/photos/carousel/BabyandChildExperience5.png"></a>
        <div class="carousel-fixed-item carousel-button-container">
            <a class="carousel-previous waves-effect" href="#"><i class="primary-text-dark material-icons">chevron_left</i></a>
            <span class="carousel-padding"></span>
            <a class="carousel-next waves-effect" href="#"><i class="primary-text-dark material-icons">chevron_right</i></a>
        </div>
    </div>
    <div class="container">
        <div class="row">${buildTestimonials()}</div>
    </div>`;