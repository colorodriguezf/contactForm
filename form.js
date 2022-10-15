"use strict"
$(document).ready(function() {
    console.log("entro");

});

$('.js-input').keyup(function() {
    if( $(this).val()) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });
