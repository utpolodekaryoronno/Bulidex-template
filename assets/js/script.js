$(document).ready(function(){
	
	// menubar
	$('.menu-bar').click(function(){
		$('.menu').slideToggle(1000);
	});

	// banner-area
	// owlCarousel
	$(".banner-area").owlCarousel({
		items:1,
		loop:true,
		nav:true,
		autoplay:true,
		autoplaySpeed:3000,
		smartSpeed:1500,
	});
	
	// wow.js
	new WOW().init();


	// VideoPopUp
	$('#vidBox').VideoPopUp({
		backgroundColor: "#17212a",
		opener: "trigger",
		maxweight: "700",
		type: 'iframe',
		idvideo: "example" 
	});

	// hero-area2
	// counter up
	$('.count-num').rCounter({
    duration: 30
  });

});
