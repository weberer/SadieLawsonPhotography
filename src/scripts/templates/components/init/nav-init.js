import '../../../materialize/sidenav';

export default () => {
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elements, {});
    });
}
