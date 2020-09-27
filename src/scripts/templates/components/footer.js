import contactInfo from '../../../../resources/data/contact-info';

const footerHTML = `<footer class="page-footer">
    <div class="container">
        <div class="row">
                <a href="${contactInfo.facebook}" target="_blank" class="col offset-s5 s1"><i class="small material-icons">facebook</i></a>
                <a href="${contactInfo.instagram}" target="_blank" class="col s1"><div id="instagram-icon"></div></a>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Copyright &copy; 2020 Sadie Lawson Photography. All Rights Reserved
        </div>
    </div>
</footer>`;

export default () => footerHTML;