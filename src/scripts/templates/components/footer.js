const _FACEBOOK_URL = 'https://www.facebook.com/Sadie-Lawson-Photography-103120284452624';
const _INSTAGRAM_URL = 'https://www.instagram.com';

const footerHTML = `<footer class="page-footer">
    <div class="container">
        <div class="row">
                <a href="${_FACEBOOK_URL}" target="_blank" class="col offset-s5 s1"><i class="small material-icons">facebook</i></a>
                <a href="${_INSTAGRAM_URL}" target="_blank" class="col s1"><div id="instagram-icon"></div></a>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Copyright &copy; 2020 Sadie Lawson Photography. All Rights Reserved
        </div>
    </div>
</footer>`;

export default () => footerHTML;