export default (title, content='', image='') => `<div class="parallax-container">
    <div class="parallax">
        <img src="" alt="" class="primary-dark">
        <div class="container white-text">
            <div class="row">
                <h1 class=" s12 center-align page-title">${title}</h1>
            </div>
            ${content}
        </div>
    </div>
</div>`;