//When the user scrolls down 200px from the top of the document, the header would be sticky
	document.addEventListener("DOMContentLoaded", function(){
	  window.addEventListener('scroll', function() {
		  if (window.scrollY > 250) {
			document.getElementById('mastheader').classList.add('sticky-header');
		  } else if(window.scrollY < 50) {
			document.getElementById('mastheader').classList.remove('sticky-header');			
		  } 
		  
	  });
	});
	
	
//When the user click wallet icon, execute this script 
	$(document).ready(function(){
		$(".main-wallet, .user-icon").click(function(){
			 $("body").toggleClass("overflow-hidden");
		});
	});
	
	
//When the user click close button, execute this script 	
	$(document).ready(function(){
		$(".funds-maintenance-closeBtn, .ADV-closeBtn").click(function(){
			 $("body").removeClass("overflow-hidden");
			 $("#funds-maintenance, #authentication-section").removeClass("show");
		});
	});
	
	$(document).ready(function(){
		$(".menu-closeBtn").click(function(){
			 $(".main-menu").removeClass("show");
		});
	});	
	
function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("29 December 2021 23:59:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days, #days").html("<p class='number'>" + days + "</p><p>Days</p>");
			$("#hours, #hours").html("<p class='number'>" + hours + "</p><p>Hours</p>");
			$("#minutes, #minutes").html("<p class='number'>" + minutes + "</p><p>Mins</p>");
			$("#seconds, #seconds").html("<p class='number'>" + seconds + "</p><p>Secs</p>");		

	}

setInterval(function() { makeTimer(); }, 1000);

		
//featured galleries carousel
jQuery("#featured-galleries-slider").owlCarousel({
  autoplay: false, 
  margin: 0,
  loop: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 1200,
  smartSpeed: 300,
  nav: true,
  dots: false,
  autoplayHoverPause:true,
  responsive: {
    0: {		
      items: 1
    },

    600: {		
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items:4
    }
  }
});

//trendings artists carousel
jQuery("#trendings-artists-slider").owlCarousel({
  autoplay: false, 
  margin: 0,
  loop: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 1200,
  smartSpeed: 300,
  nav: true,
  dots: false,
  autoplayHoverPause:true,
  responsive: {
    0: {		
      items: 2
    },

    600: {		
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items:6
    }
  }
});


//leading artists carousel
jQuery("#leading-artists-slider").owlCarousel({
  autoplay: false, 
  margin: 0,
  loop: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 1200,
  smartSpeed: 300,
  nav: true,
  dots: false,
  autoplayHoverPause:true,
  responsive: {
    0: {		
      items: 1
    },

    600: {		
      items: 1
    },

    1024: {
      items: 2
    },

    1366: {
      items:3
    }
  }
});