import priceList from '../../../resources/data/price-list';

const _buildOption = data => `<option value="${data.id}">${data.name}</option>`;

const _buildOptions = () =>  priceList.map(item => _buildOption(item)).reduce((collector, option) => collector + option, '');

const _contactContent = `
        <div class="parallax-container">
            <div class="parallax">
                <img src="../resources/photos/other/other-2.jpg" alt="Contact Me">
                <div class="container white-text"> 
                    <div class="row">
                        <h1 class=" s12 center-align page-title">Contact</h1>
                    </div>
                    <div class="row">
                        <h5 class="col s12 page-subtitle center-align">(555) 555-5555</h5>
                        <h5 class="col s12 page-subtitle center-align">sadie@sadielawsonphotography.com</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="section white row">
            <form class="col s12 m10 offset-m2">
                <div class="row">
                    <div class="input-field col s12 m5">
                        <input id="first_name" type="text" class="validate" required>
                        <label for="first_name">First Name</label>
                        <span class="helper-text" data-error="Please enter your First Name"></span>
                    </div>
                    <div class="input-field col s12 m5">
                        <input id="last_name" type="text" class="validate" required>
                        <label for="last_name">Last Name</label>
                        <span class="helper-text" data-error="Please enter your Last Name"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 m10">
                        <input id="email" type="email" class="validate" required>
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="Please enter a valid email"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 m5">
                        <select>
                            <option value disabled selected>Select Option</option>
                            ${_buildOptions()}
                            <option value="other">Other</option>
                        </select>
                        <label>Session you are Inquiring About</label>
                        <span class="helper-text" data-error="Please select a session type"></span>
                    </div>
                    <div class="input-field col s12 m5">
                        <select>
                            <option value disabled selected>Select Option</option>
                            <option value="text">Text</option>
                            <option value="call">Phone Call</option>
                            <option value="email">Email</option>
                        </select>
                        <label>Preferred Contact Method</label>
                        <span class="helper-text" data-error="Please select a preferred contact method"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s10">
                        <textarea id="message" class="materialize-textarea" required data-length="1000"></textarea>
                        <label for="message">Message</label>
                        <span class="helper-text" data-error="Please enter a message"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col offset-s9 offset-m8 offset-l9">
                    <input type="submit" class="btn waves-effect">
                    </div>
                </div>
            </form>
        </div>
    </div>`;

export default () => _contactContent;