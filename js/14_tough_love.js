$(document).ready(function(){

	var message=["这个习惯糟透了……要加油！",
				"别灰心，慢慢来，你能改掉的！",
				"这个习惯也不是很糟嘛",
				"不好的习惯……要改掉啊！"];
	$("form").on("submit",function(event){
		event.preventDefault();
		var getText=$(".text").val();
		if(getText==""){
			$("h1").html("你没有填坏习惯！！！");
		}else{
			$("h1").html("你的坏习惯是"+getText);
			$(".message").html(message[Math.floor(Math.random()*4)]);
		}
		
		
	});
});