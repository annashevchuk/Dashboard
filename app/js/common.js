$( document ).ready(function() {

  $('.hamburger').on('click', function() {
  	$('.aside').toggleClass('aside__active');
  });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

})//end document.ready function