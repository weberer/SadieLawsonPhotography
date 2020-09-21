import '../../css/header.scss';

const navButton = (text, page) => `<li><a href="${page}" class="waves-effect waves-light btn-flat">${text}</a></li>`;

const headerElement = `<nav class="navbar-fixed white">
    <div class="nav-wrapper">
        <div class="nav-content">
            <div class="container">
                <img id="logo" class="brand-logo left" src="../resources/logo1.jpg" alt="Sadie Lawson Photography">
                <div class="button-container right">
                    <button class="btn-flat hide-on-large-only waves-effect waves-light"><i class="medium material-icons menu-icon">menu</i></button>
                </div>
                <ul class="right hide-on-med-and-down">
                  ${navButton('Prices', 'prices.html')}
                  ${navButton('Contact', 'contact.html')}
                  ${navButton('About', 'about.html')}
                  ${navButton('Home', 'index.html')}
                </ul>
            </div>
        </div>
    </div>
</nav>`;

const attachHeaderToDocument = () => {
    const headerElementId = 'slp-header';
    const headerDiv = document.getElementById(headerElementId);
    headerDiv.innerHTML = headerElement;
}

attachHeaderToDocument();