import '../css/header.scss';
const Header = () => {
    const headerElement = `<div id="header">
    <img id="logo" src="../resources/logo.jpg" alt="Sadie Lawson Photography">
    <span id="header-links">
        <a href="prices.html" class="waves-effect waves-light btn">Prices</a>
        <a href="contact.html" class="waves-effect waves-light btn">Contact Us</a>
    </span>
</div>`;

    document.body.innerHTML = document.body.innerHTML + headerElement;
}

Header();