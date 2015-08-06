$(document).ready(function(){
	var day=new Date().getDay();
	var week=[
			'星期日 伤day',
			'星期一 忙day',
			'星期二 求死day',
			'星期三 未死day',
			'星期四 受死day',
			'星期五 福来day',
			'星期六 洒脱day'
			];
	$("#" + day).attr("id","today");
	$("#today_welcome").html(week[day]);
});