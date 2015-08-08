$(document).ready(function(){
	$(".bshadow").on("click",function(){
		var shadow=$(this).css("box-shadow").split("px");
		var blur=shadow[2];
		var spread=shadow[3];
		var nblur=parseInt(blur)+1;
		var nspread=parseInt(spread)+3;

		$(this).css("box-shadow","0 0 "+nblur+"px "+nspread+"px #666");
	});

	$(".tshadow").on("click",function(event){
		var shadow=$(this).css("text-shadow").split("px");
		var vshadow=shadow[1];
		var blur=shadow[2];
		var nvshadow=parseInt(vshadow)+1;
		var nblur=parseInt(blur)+1;

		event.stopPropagation();
		$(this).css("text-shadow","0 "+nvshadow+"px "+nblur+"px #666");
	});
});