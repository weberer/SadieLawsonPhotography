import testimonials from "../../../../resources/data/testimonials";

export default data => `<div class="testimonial row s12">
    <div class="testimonial-img-container"><img src="${data.image}" alt="${data.alt}"></div>
    <div class="testimonial-text-container"><div class="testimonial-text card">${data.text}</div></div>
</div>`;