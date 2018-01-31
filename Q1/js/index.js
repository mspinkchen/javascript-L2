"use strict";

  var state = true;
  function toggleLight(){
    var image = document.getElementById("image");
    state = !state;
    image.src = state? "img/on.jpg" : "img/off.jpg";
  }

var id = "";
var timeLeft = "";

function setTime(){
  var time = document.getElementById('time').value;
  if (time == ""){
    alert('尚未輸入倒數時間');  

  } else if (isNaN(time)) {
    alert('請輸入數字');
         
  }else {
    timeLeft = time;
    id = setInterval(countDownTimer, 800);
    document.getElementById("timer").innerHTML = timeLeft;
    document.getElementById("time").value = "";
  }
}



function countDownTimer() {
  if (timeLeft <= 0) {
    document.getElementById("image").src = "img/off.jpg";
    clearInterval(id);
  }
  document.getElementById("timer").innerHTML = timeLeft;
  timeLeft--;
}







