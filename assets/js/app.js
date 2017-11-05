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

	$("#alyssa").typeIt({
		strings: ["Maid of Honor", "Lifelong Roommate", "Co-Skeeball Champion"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#brigitte").typeIt({
		strings: ["Matron of Honor", "Literally the Nicest Person You'll Ever Meet", "Kerbey Queso Connoisseur"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#sorelle").typeIt({
		strings: ["Bridesmaid", "Mac and Cheese Lover", "Friend from Life"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#haelee").typeIt({
		strings: ["Bridesmaid", "CP Big Nasty MVP", "Chopped Champion"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#danielle").typeIt({
		strings: ["Bridesmaid", "Lollapalooza Pirate", "Game Night Hostess with the Mostest"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#sarah").typeIt({
		strings: ["Bridesmaid", "Sole Female Survivor of the Bates Brothers", "Future Sister-in-Law"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#adrian").typeIt({
		strings: ["Bridesman", "DJ Yo AJ", "Hot Cheetos and Taki's Spokesman"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 


	$("#zack").typeIt({
		strings: ["Bridesman", "Co-Runner Up for Every Annual Cookie Decorating Championship", "Homecoming Date 08'"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#kyle").typeIt({
		strings: ["Best Man", "Would you rather be feared or loved? Easy. I want people to fear how much they love me."],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#adam").typeIt({
		strings: ["Best Man", "Dilly Dilly!"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#connor").typeIt({
		strings: ["Groomsman", "Private equity,", "...public liability"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#cameron").typeIt({
		strings: ["Groomsman", "Cameron, 26", "-Loves taking showers sitting down", "-Hates how his wife folds laundry", "-Owns 130 pairs of shoes"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#andy").typeIt({
		strings: ["Groomsman", "Andrew & Ryan have been friends since high school, where Ryan could not convince him to join the volleyball team", "He is the short groomsman"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#nate").typeIt({
		strings: ["Groomsman", " Ryan has been there to make up for Nate’s deficiencies since 4th grade", "..hopefully Nate can return the favor for Ryan and Lindsey’s big day"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 

	$("#rob").typeIt({
		strings: ["Groomsman", "Young gentlemen living in DC", "Known Ryan since his SigEpic days at USC", "Can always rock a black vneck", "Yes ladies, he's single!"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	}); 


	$("#john").typeIt({
		strings: ["Groomsman", "Three-time kickball champion", "Wants to be a pilot when he grows up", "Dog owner, wine lover, terrible golfer"],
		speed: 150, 
		loop: true,
		loopDelay: 3000,
		deleteSpeed: 100,
		cursor: false
	});

});