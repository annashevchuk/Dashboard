$( document ).ready(function() {

  $('.hamburger').on('click', function() {
  	$('.aside').toggleClass('aside__active');
  });

$(function () {
  $('[data-toggle="tooltip"]').tooltip({
  	template: '<div class="tooltip red" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
})

$(function () {
  $('[data-toggle="blue"]').tooltip({
  	template: '<div class="tooltip blue" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
})

$(function() {
    jQuery('.scrollbar-inner').scrollbar({
    	stepScrolling: false,
    });
});


})//end document.ready function
