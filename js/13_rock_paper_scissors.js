$(document).ready(function(){
	var choices=['rock','sci','pap'];
	var comChoice,userChoice;

	$(".guess").hide();
	$(".button").on("click",start);


	function start(){
		
		userChoice=this.id;
		// $("#message").html(userChoice);
		comChoice=choices[Math.floor(Math.random()*3)];
		// $("#message").html(comChoice);

		$(".guess").hide();
		$('.hand').show();
		shake();
	}
	function shake(){
		var i=3;
		count();
		// setTimeout(function(){
		// 	$("#message").text("3");
		// },0);
		// setTimeout(function(){
		// 	$("#message").text("2");
		// },500);
		// setTimeout(function(){
		// 	$("#message").text("1");
		// },1000);
		function count(){
			$(".hand").addClass("shake");
			$("#message").text(i);

			if(i==0){
				whoWin();
			}
			else{
				i -= 1;
				setTimeout(count,500);
				
			}
		}	
	}
	function whoWin(){
		$(".hand").removeClass("shake");
		$("#message").text("shoot");

		$(".hand").hide();
		$(".user." + userChoice).show();
		$(".com." + comChoice).show();

		setTimeout(function() {
			if(comChoice==userChoice){
				$("#message").text("Tie!");
			}
			else if(comChoice=="sci" && userChoice=="rock" || comChoice=="rock" && userChoice=="pap" || comChoice=="pap" && userChoice=="sci"){
				$("#message").text("You Win!");
			}
			else{
				$("#message").text("You Lose!");
			}
		},400);
	}
})