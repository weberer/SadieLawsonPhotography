import getHeader from "./components/paralax-header";
import {getPageImage, getPageName, PAGE_IDS} from "../../../resources/data/site-pages";

export default () => `${getHeader(getPageImage(PAGE_IDS.INDEX), getPageName(PAGE_IDS.INDEX), '')}
<div class="container">
    <div class="row">
        <div id="investment-carousel" class="carousel carousel-slider center">
            <a class="btn-flat carousel-previous carousel-fixed-item primary-text-dark" href="#"><i class="material-icons">chevron_left</i></a>
            <a class="carousel-item" href="#one!"><img src="../resources/photos/carousel/BabyandChildExperience.png"></a>
            <a class="carousel-item" href="#two!"><img src="../resources/photos/carousel/BabyandChildExperience2.png"></a>
            <a class="carousel-item" href="#three!"><img src="../resources/photos/carousel/BabyandChildExperience3.png"></a>
            <a class="carousel-item" href="#four!"><img src="../resources/photos/carousel/BabyandChildExperience4.png"></a>
            <a class="carousel-item" href="#five!"><img src="../resources/photos/carousel/BabyandChildExperience5.png"></a>
            <div class="carousel-fixed-item carousel-next-container"><a class="btn-flat carousel-next primary-text-dark" href="#"><i class="material-icons">chevron_right</i></a></div>
          </div>
      </div>
</div>`;