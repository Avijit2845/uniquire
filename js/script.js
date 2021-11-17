
//When the user scrolls down 200px from the top of the document, the header would be sticky
	document.addEventListener("DOMContentLoaded", function(){
	  window.addEventListener('scroll', function() {
		  if (window.scrollY > 200) {
			document.getElementById('header').classList.add('fixed-top', 'shadow');
			// add padding top to show content behind navbar
			navbar_height = document.querySelector('.header').offsetHeight;
			document.body.style.paddingTop = navbar_height + 'px';
		  } else {
			document.getElementById('header').classList.remove('fixed-top', 'shadow');
			 // remove padding top from body
			document.body.style.paddingTop = '0';
		  } 
	  });
	});

//When the user click wallet icon, execute this script 
	$(document).ready(function(){
		$(".main-wallet, .user-icon, .mobile-menuBtn, .place-bid-btn").click(function(){
			 $("body").toggleClass("overflow-hidden");
		});
	});
	
	
//When the user click close button, execute this script 	
	$(document).ready(function(){
		$(".funds-maintenance-closeBtn, .ADV-closeBtn, .menu-closeBtn, .modal-bid-close").click(function(){
			 $("body").removeClass("overflow-hidden");
			 $("#funds-maintenance, #authentication-section, #menu-item, .product-modal-bid").removeClass("show");
		});
	});
	
	
	
		
//hot Collections carousel
jQuery("#banner-slider").owlCarousel({
  autoplay: true, 
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
      items:3
    }
  }
});
