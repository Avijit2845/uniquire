
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
	
