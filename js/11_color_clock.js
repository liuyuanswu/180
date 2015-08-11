$(document).ready(function(){
	
	function getTime(){
		var now=new Date();
		var hour=now.getHours();
		var min=now.getMinutes();
		var sec=now.getSeconds();
		var color = timeColor(hour, min, sec);

		hour = formatTime(hour);
		min = formatTime(min);
		sec = formatTime(sec);

		$("#clock").html(hour + ":" + min + ":" + sec);
		$("body").css("background-color", "#" + color);
		$("#color").text(color);

		t=setTimeout(function(){getTime()}, 500);
	}

	function formatTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	function formatColor(i) {
		if (i.length < 2) {
			i = '0' + i;
		}
		return i;
	}

	function timeColor(hour, min, sec) {

		red = Math.round(255 * (hour / 23)).toString(16);
		green = Math.round(255 * (min / 59)).toString(16);
		blue = Math.round(255 * (sec / 59)).toString(16);

		red = formatColor(red);
		green = formatColor(green);
		blue = formatColor(blue);

		return (red + green + blue).toUpperCase();
	}
	getTime();

});
