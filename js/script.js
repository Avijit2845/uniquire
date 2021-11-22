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
	
function dateCountDown(){
// Set the date we're counting down to
var countDownDate = new Date("Nov 26, 2021 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = "<div class='count-col'><p class='number'>" + days + "</p><p>Days</p></div>" 
  + "<div class='count-col'><p class='number'>" + hours + "</p><p>Hours</p></div>" + 
  "<div class='count-col'><p class='number'>" + minutes + "</p><p>Mins</p></div>" + "<div class='count-col'><p class='number'>"
  + seconds + "</p><p>Secs</p></div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}