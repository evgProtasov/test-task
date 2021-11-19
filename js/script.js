'use strict';

$( function() {
    $("#slider-range").slider({
      range: true,
      step: 100,
      min: 1000,
      max: 50000,
      values: [ 1200, 30000 ],
      slide: function( event, ui ) {
        $("#amount1").val("от " + ui.values[0]);
        $("#amount2").val("до " + ui.values[1]);
      }
    });
    $( "#amount1" ).val("от " + $( "#slider-range" ).slider("values", 0 ));
    $( "#amount2" ).val("до " +$( "#slider-range" ).slider( "values", 1 ));
  });
   

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