import '../css/components/testimonial.scss';

const CAROUSEL_CYCLE_TIME = 7000;
const CAROUSEL_ID = 'investment-carousel';
const NEXT_BTN_CLASS = 'carousel-next';
const PREV_BTN_CLASS = 'carousel-previous';

const getCarouselInterval = carousel => setInterval(() => carousel.next(), CAROUSEL_CYCLE_TIME);

const handleCarouselBtnClick = function(interval, carousel, onClick) {
    clearInterval(interval)
    carousel[onClick]();
    return getCarouselInterval(carousel);
};

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel.carousel-slider');
    M.Carousel.init(carousels, {
        fullWidth: true,
        indicators: true,
        duration: 200
    });

    const carouselEl = document.getElementById(CAROUSEL_ID);
    const carousel = carouselEl.M_Carousel;
    const nextButton = carouselEl.getElementsByClassName(NEXT_BTN_CLASS)[0];
    const previousButton = carouselEl.getElementsByClassName(PREV_BTN_CLASS)[0];
    let carouselInterval = getCarouselInterval(carousel);

    nextButton.addEventListener('click', e => {
        e.preventDefault();
        carouselInterval = handleCarouselBtnClick(carouselInterval, carousel, 'next');
    });

    previousButton.addEventListener('click', e => {
        e.preventDefault();
        carouselInterval = handleCarouselBtnClick(carouselInterval, carousel, 'prev');
    });
});