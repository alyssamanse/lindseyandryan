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
		    Days: { color: "#C0C8CF" },
		    Hours: { color: "#C0C8CF" },
		    Minutes: { color: "#C0C8CF" },
		    Seconds: { color: "#C0C8CF" }
		}}
	); 

});