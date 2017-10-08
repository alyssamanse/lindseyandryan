$(document).ready(function(){

	// Initialize parallax feature in Materialize
    $('.parallax').parallax();

    // Initialize slider feature in Materialize
  	$('.slider').slider();

  	// Initialize carousel feature in Materialize
  	$('.carousel.carousel-slider').carousel({fullWidth: true});

  	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$(".your-clock").TimeCircles(
		{ time: {
		    Days: { color: "#f0d1c3" },
		    Hours: { color: "#f0d1c3" },
		    Minutes: { color: "#f0d1c3" },
		    Seconds: { color: "#f0d1c3" }
		}}
	); 

});