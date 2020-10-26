import * as logo from '../../../resources/brandResources/sadie.png';
import * as cameraSvg from '../../../resources/icons/camera.svg';

console.log("Error.html");

export default () => `<div class="container">
    <div class="row"><img class="s8 offset-s2 col m4 offset-m4" src="${logo.default}" alt="SadieLawsonPhotography"></div>
    <h4 class="row primary-text-dark center">404 Not Found :(</h4>
    <div class="row"><img class="col s6 offset-s3" src="${cameraSvg.default}" alt="Whoops!"></div>
    <div class="row center primary-accent-text message">
        Whoops! That's embarrassing. It looks like the page you were looking for couldn't be found.
        <br><br>
        Click the button below to return to SadieLawsonPhotography.com
    </div>
    <div class="row center"><a href="index.html" class="btn waves-effect">Go Home</a></div>
</div>`;