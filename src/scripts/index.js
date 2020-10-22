document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel.carousel-slider');
    M.Carousel.init(carousels, {
        fullWidth: true,
        indicators: true,
        duration: 200
    });

    const materializedCarousel = document.getElementById('investment-carousel');
    const nextButton = document.getElementsByClassName('carousel-next')[0];
    const previousButton = document.getElementsByClassName('carousel-previous')[0];

    nextButton.addEventListener('click', e => {
        e.preventDefault();
        materializedCarousel.M_Carousel.next();
    });

    previousButton.addEventListener('click', e => {
        e.preventDefault();
        materializedCarousel.M_Carousel.prev();
    });
});