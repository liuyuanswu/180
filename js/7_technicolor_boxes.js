$(document).ready(function(){
	var color="white";
	$(".row").children(".col").on("mouseover",function(){
		color="#" + Math.random().toString(16).slice(2,8);
		$(this).css("background-color",color);
		$(this).css("box-shadow","0 0 3px #fff");
		$(this).css('z-index', "100000");
	});
	$(".row").children(".col").on("mouseout",function(){
		$(this).css("box-shadow","none");
		$(this).css('z-index', "1");
	});
});