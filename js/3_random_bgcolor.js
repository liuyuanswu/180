$("document").ready(function(){
	function randomColor(){
		return "#" +　Math.random().toString(16).slice(2,8);
	};

	$("a").on("click",function(){
		$("body").css("background-color",randomColor());
	});
});