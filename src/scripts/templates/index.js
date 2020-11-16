import getHeader from "./components/paralax-header";
import {getPageName, PAGE_IDS} from "../../../resources/data/site-pages";
import * as sadiePhoto from '../../../resources/photos/meetSadie/sadie.jpg';
import * as family from '../../../resources/photos/meetSadie/family.jpg';

export default () => `${getHeader(getPageName(PAGE_IDS.INDEX))}
    <div class="container">
        <div id="meet-sadie">
            <h5 class="center primary-text-dark">Hi I'm Sadie!</h5>
            <p>
                <img id="sadie-photo" src="${sadiePhoto.default}" alt="Meet Me">
                Photography came to me at a time when I needed it most - it was like walking into what I was created to do. 
                It fits me; my personality and my strengths.
                I live passionately, all in. I want today to be different than yesterday and full of excitement for tomorrow. 
                Capturing moments as they happen and creating relationships is what photography means to me. 
                When you choose me as your photographer, you are choosing a friend to capture the most intimate moments of your life.
                The people closest to me would describe me as energetic, personable, and the right amount of sass. 
                When I am not behind the camera, I am a mom to a two year old little girl and two cats, the wife to an amazing husband 
                (who is my number 1 fan and biggest supporter), and full time social worker.
                <br><br>
                <img id="family-photo" src="${family.default}" alt="Meet My Family">
                Thank you for taking the time to “meet me”. I can’t wait to be a part of your life journey!
            </p>
        </div>
        <!--<div class="divider"></div>
        <div id="faq">
            <h5 class="center primary-text-dark">Frequently Asked Questions</h5>
        </div>-->
    </div>
`;