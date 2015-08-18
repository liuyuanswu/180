$(document).ready(function(){
	$("form").on("submit",function(e){
		e.preventDefault();

		var months = [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ];
		var birthdate=$(".birthdate").val();
		
		if(birthdate==0){
			$(".container").html("你没有生日?!真是件怪事！");
		}
		else{
			birthdate = birthdate.split("-");

			var year=birthdate[0];
			var month=birthdate[1];
			var day=birthdate[2];

			var age=new Date().getFullYear()-year;


			$(".container").html(
				"<p>你生日是" +  year + "年" + months[parseInt(month)-1] + day + "日</p>" +
				"<p>你已经"+age+"岁了！</p>"
			);
		}
	});
});