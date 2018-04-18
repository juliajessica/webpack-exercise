import { Sum } from './scripts.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#add-form').submit(function(event) {
    event.preventDefault();
    let a = parseInt($('#firstNum').val());
    let b = parseInt($('#secondNum').val());
    let solution = new Sum(a, b);
    solution = solution.calculator();
    $("#solution").text(solution);
  });
});
