import contactInfo from '../../../../resources/data/contact-info';
import * as instagramUrl from '../../../../resources/icons/instagram.png';
import * as pixisetUrl from '../../../../resources/icons/pixiset.png';

const footerHTML = `<footer class="page-footer">
    <div class="container">
        <div class="row">
            <div class="icon-container col center s4 offset-s4 m3 offset-m4 l2 offset-l5">
                <a href="${contactInfo.facebook}" target="_blank" class=""><i class="small material-icons">facebook</i></a>
                <!--<a href="${contactInfo.instagram}" target="_blank" class=""><img src="${instagramUrl.default}" id="instagram-icon" alt="Facebook"></a>-->
                <a href="${contactInfo.pixieset}" target="_blank" class=""><img src="${pixisetUrl.default}" id="pixiset-icon" alt="Pixiset"></a>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Copyright &copy; 2020 Sadie Lawson Photography. All Rights Reserved
        </div>
    </div>
</footer>`;

export default () => footerHTML;