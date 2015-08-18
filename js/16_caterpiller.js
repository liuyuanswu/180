$(document).ready(function(){

	$(document).on({

		mousemove:function(event){

			$(".container").html("<div class='move'><div>");
			$(".move").css("position","relative");
			$(".move").css("left",event.pageX);
			$(".move").css("top",event.pageY);

		},
		click:function(e){
			$(".move").css("animation","enlarge 1s");
		}

	});

});