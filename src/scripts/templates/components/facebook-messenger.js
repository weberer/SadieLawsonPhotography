//<!-- Load Facebook SDK for JavaScript -->
export default () => `<div id="fb-root"></div>
<script>
    window.fbAsyncInit = function() {
    FB.init({
        xfbml            : true,
        version          : 'v9.0'
    });
};
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!-- Your Chat Plugin code -->
<div class="fb-customerchat"
     attribution=setup_tool
     page_id="103120284452624"
     theme_color="#d2b1ab"
     logged_in_greeting="Hi, Thanks for reaching out to Sadie Lawson Photography! How can I help you?"
     logged_out_greeting="Hi, Thanks for reaching out to Sadie Lawson Photography! How can I help you?">
</div>`