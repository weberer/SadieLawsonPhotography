import '../css/about.scss';
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';

// Just pass your jquery instance and you're done
datepickerFactory($);

$(function() {
    $("#datepicker").datepicker();
});