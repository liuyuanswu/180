$(document).ready(function(){

	$("img").on("click",function(){
		$(this).css("animation","jiggler"+Math.floor(Math.random()*6)+" 1s");
	});

});