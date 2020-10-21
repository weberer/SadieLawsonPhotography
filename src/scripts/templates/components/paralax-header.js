export default (image, title, content='') => `<div class="parallax-container">
    <div class="parallax">
        <!--<img src="${image}" alt="Contact Me">-->
        <img src="" alt="" class="primary-extra-dark">
        <div class="container white-text">
            <div class="row">
                <h1 class=" s12 center-align page-title">${title}</h1>
            </div>
            ${content}
        </div>
    </div>
</div>`;