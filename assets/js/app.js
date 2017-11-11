$(document).ready(function(){

	// Initialize parallax feature in Materialize
    $('.parallax').parallax();

    // Initialize slider feature in Materialize
  	$('.slider').slider();

  	// Initialize carousel feature in Materialize
  	$('.carousel.carousel-slider').carousel({fullWidth: true});

  	// Initialize collapse button
  	$(".button-collapse").sideNav({
  		menuWidth: 250, 
      	closeOnClick: true
  	});

  	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
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
		strings: ["Alyssa, 26", "-Maid of Honor", "-Most Likely to Win Bachelor Fantasy", "-Co-Skeeball Champion"],
		speed: 100, 
		cursor: false
	}); 

	$("#brigitte").typeIt({
		strings: ["Brigitte, 26", "-Matron of Honor", "-Most Likely to Always Bring the Wine", "-Kerbey Queso Connoisseur"],
		speed: 100, 
		cursor: false
	}); 

	$("#sorelle").typeIt({
		strings: ["SoRelle, 27", "-Bridesmaid", "-Mac and Cheese Lover", "-Friend from Life"],
		speed: 100, 
		cursor: false
	}); 

	$("#haelee").typeIt({
		strings: ["Haelee, 25", "-Bridesmaid", "-CP Big Nasty MVP", "-Chopped Champion"],
		speed: 100, 
		cursor: false
	}); 

	$("#danielle").typeIt({
		strings: ["Danielle, 26", "-Bridesmaid", "-Lollapalooza Pirate", "-First Round Game Night Draft Pick"],
		speed: 100, 
		cursor: false
	}); 

	$("#sarah").typeIt({
		strings: ["Sarah, 22", "-Bridesmaid", "-Sole Female Survivor of the Bates Brothers", "-Future Sister-in-Law"],
		speed: 100, 
		cursor: false
	}); 

	$("#adrian").typeIt({
		strings: ["Adrian, 27", "-Bridesman", "-Moonlights as DJ Javi", "-Hot Cheetos and Taki's Spokesman"],
		speed: 100, 
		cursor: false
	}); 


	$("#zack").typeIt({
		strings: ["Zack, 26", "-Bridesman", "-Beer Bike Champion", "-Homecoming Date 08'"],
		speed: 100, 
		cursor: false
	}); 

	$("#kyle").typeIt({
		strings: ["Best Man", "Would you rather be feared or loved? Easy. I want people to fear how much they love me."],
		speed: 100, 
		cursor: false
	}); 

	$("#adam").typeIt({
		strings: ["Best Man", " ", "Dilly Dilly!"],
		speed: 100, 
		cursor: false
	}); 

	$("#connor").typeIt({
		strings: ["Groomsman", "Private equity,", "...public liability"],
		speed: 100, 
		cursor: false
	}); 

	$("#cameron").typeIt({
		strings: ["Groomsman", "Cameron, 26", "-Loves taking showers sitting down", "-Hates how his wife folds laundry", "-Owns 130 pairs of shoes"],
		speed: 100, 
		cursor: false
	}); 

	$("#andy").typeIt({
		strings: ["Groomsman", "Andrew & Ryan have been friends since high school", "Ryan could not convince him to join the volleyball team", "...he is the short groomsman"],
		speed: 100, 
		cursor: false
	}); 

	$("#nate").typeIt({
		strings: ["Groomsman", " Ryan has been there to make up for Nate’s deficiencies since 4th grade", "..hopefully Nate can return the favor for Ryan and Lindsey’s big day"],
		speed: 100, 
		cursor: false
	}); 

	$("#rob").typeIt({
		strings: ["Groomsman", "Young gentlemen living in DC", "Known Ryan since his SigEpic days at USC", "Can always rock a black v-neck", " ", "Yes ladies, he's single!"],
		speed: 100, 
		cursor: false
	}); 


	$("#john").typeIt({
		strings: ["Groomsman", "Three-time kickball champion", "Wants to be a pilot when he grows up", "Dog owner, wine lover, terrible golfer"],
		speed: 100, 
		cursor: false
	});

});