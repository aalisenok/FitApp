'use strict';

// burger

let nav = document.querySelector('.nav');
let burger = document.querySelector('.burger');

nav.classList.remove('nav--no-js');
burger.addEventListener('click', () => {
    if (nav.classList.contains('nav--closed')) {
        nav.classList.remove('nav--closed');
        nav.classList.add('nav--opened');
        burger.classList.add('animate');
    } else {
        nav.classList.add('nav--closed');
        nav.classList.remove('nav--opened');
        burger.classList.remove('animate');
    }
});
$(document).ready(function () {
    svg4everybody({});
});
