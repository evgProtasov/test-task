'use strict';


function pageWidth() {
    var widthWindow = window.innerWidth;
    var form = document.getElementById('form');
    var button = document.getElementsByClassName('filter__button');

    if (widthWindow < 769) {
        form.classList.add('hidden');
        button[0].classList.remove('hidden');
    }
    
    else {
        form.classList.remove('hidden');
        button[0].classList.add('hidden');
    }
}

window.addEventListener('resize', function() {
    pageWidth();
  });