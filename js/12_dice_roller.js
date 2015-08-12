$(document).ready(function(){

	$("#button").on("click",draw1());

	var ctx,dx,dy;
	var dicex=50,dicey=50;
	var dicewidth=100,diceheight=100;
	var dotrad=6;
	var dotx,doty;


	function throwDice(){
		var ch=1+Math.floor(Math.random()*6);
		dx=dicex;
		dy=dicey;
		drawDice(ch);
		dx=dicex+150;
		drawDice(ch);
	}

	function drawDice(n){
		var canvas=$("#dice").attr("id");
		ctx=canvas.getContext("2d");
		
		ctx.lineWidth=5;
		ctx.clearRect(dx,dy,dicewidth,diceheight);
		ctx.strokeRect(dx,dy,dicewidth,diceheight);

		ctx.fillStyle="#096";
		switch(n){
			case 1:
				draw1();
				break;
			case 2:
				draw2();
				break;
			case 3:
				draw2();
				draw1();
				break;
			case 4:
				draw4();
				break;
			case 5:
				draw4();
				draw1();
				break;
			case 6:
				draw4();
				drawmid();
				break;
		}

	}

	function draw1(){
		ctx.beginPath();

		dotx=dx+.5*dicewidth;
		doty=dy+.5*diceheight;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);

		ctx.closePath();
		ctx.fill();
	}
	function draw2(){
		ctx.beginPath();

		dotx=dx+3*dotrad;
		doty=dy+3*dotrad;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);
		dotx=dx+dicewidth-3*dotrad;
		doty=dy+diceheight-3*dotrad;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);

		ctx.closePath();
		ctx.fill();
	}
	function draw4(){
		ctx.beginPath();

		dotx=dx+3*dotrad;
		doty=dy+3*dotrad;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);
		dotx=dx+dicewidth-3*dotrad;
		doty=dy+diceheight-3*dotrad;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);
		dotx=dx+3*dotrad;
		doty=dy+diceheight-3*dotrad;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);
		dotx=dx+dicewidth-3*dotrad;
		doty=dy+3*dotrad;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);

		ctx.closePath();
		ctx.fill();
	}
	function drawmid(){
		ctx.beginPath();

		dotx=dx+3*dotrad;
		doty=dy+.5*diceheight;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);
		dotx=dx+dicewidth-3*dotrad;
		doty=dy+.5*diceheight;
		ctx.arc(dotx,doty,dotrad,Math.PI*2);

		ctx.closePath();
		ctx.fill();
	}
});