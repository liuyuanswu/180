$(document).ready(function(){
  var level=1;

  $("#ball").on("click",function(){
    
    if (level<10) {
      speedUp(this);
      showMessage();
    }else{
      $(this).hide();
      $("#message_container").show();
      $("#level").hide();
      $("#message").css("font-size","20px");
      $("#message").html("剽悍的手速不需要解释！");
    };  

  });

  function speedUp(elm){
    var speed = $(elm).css('animation-duration');
    var newSpeed = (speed.split('s'))[0] - 1;
    $(elm).css('animation-duration', newSpeed + 's');
  }

  function showMessage(){
    level += 1;
    $("#message").html("well done!");
    $("#level").html("next level:"+level);
    $("#message_container").show();
    $("#ball").hide();

    setTimeout(function() { 
      $('#message_container').hide();
      $('#ball').show();
     }, 3000);
  }
  
});