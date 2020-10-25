import testimonials from "../../../../resources/data/testimonials";

console.log("testimonial-template.js");

const buildTestimonial = data => `<div class="testimonial row s12">
    <div class="testimonial-img-container"><img src="${data.image}" alt="${data.alt}"></div>
    <div class="testimonial-text-container"><div class="testimonial-text card">${data.text}</div></div>
</div>`;

const buildTestimonials = () => `<div class="testimonials">
    <h5 class="primary-text-dark center">Here's What People are Saying...</h5>
    ${testimonials.reduce((accumulator, testimonial) => accumulator + buildTestimonial(testimonial), '')}
</div>`;

export default buildTestimonials;