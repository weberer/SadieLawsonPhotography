import '../../../../css/components/header.scss';

export default () => {
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elements, {});
    });
}
