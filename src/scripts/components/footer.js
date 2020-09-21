import '../../css/footer.scss';

const _FACEBOOK_URL = "https://www.facebook.com/Sadie-Lawson-Photography-103120284452624";

const footerElement = `<footer class="page-footer">
    <div class="container">
        <div class="row">
                <a href="${_FACEBOOK_URL}" target="_blank" class="col offset-s5 s1"><i class="small material-icons">facebook</i></a>
                <a href="https://www.instagram.com" target="_blank" class="col s1"><div id="instagram-icon"></div></a>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Copyright &copy; 2020 Sadie Lawson Photography. All Rights Reserved
        </div>
    </div>
</footer>`;

const attachFooterToDocument = () => {
    const footerElementId = 'slp-footer';
    const footerDiv = document.getElementById(footerElementId);
    footerDiv.innerHTML = footerElement;
}

attachFooterToDocument();


//"build": "webpack --config webpack.dev.js"