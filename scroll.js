
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".head_nav").css("background" , "linear-gradient(to right, rgba(255,0,0,0), black");
	  }

	  else{
		  $(".head_nav").css("background" , "transparent");  	
	  }
  })
})





