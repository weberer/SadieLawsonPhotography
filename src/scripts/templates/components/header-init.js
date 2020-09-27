import '../../../css/components/header.scss';
import M from 'materialize-css';

const initHeader = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elements, {});
    });
}

export default initHeader;
