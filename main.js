//TO-DO-LIST
var addButton = document.getElementById('submitButton');
var list = document.querySelector('.list')
addButton.addEventListener('click', function(){
    var newItem = document.createElement("li");
    var newContent = document.getElementById("submitText").value;
    newItem.innerText = newContent;   document.getElementById("list").appendChild(newItem);
    newContent = "";
});


//TIMER
var seconds = 59; 
var minutes = 24;
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var totalTime = 0;
var appendTotalTime = document.getElementById("totalTime");

function start(){
  increaseNumber = setInterval(printX, 1000);
  //this function will execute every second
  function printX(){
    
    if (seconds>1){
      seconds--;
      appendSeconds.innerText = seconds;
      }
    
      else if (seconds<=1){
        seconds = 59;
        appendSeconds.innerText = seconds;
        minutes--;
        appendMinutes.innerText = minutes;}
  }
  }


function stop(){
  clearInterval(increaseNumber);
}

function reset(){
  seconds = 59;
  minutes = 24;
  hours = 0;
  appendSeconds.innerText = "0";
  appendMinutes.innerText = "0";
  appendHours.innerText = "0";
  
}

function save(){
  totalTime = seconds + minutes + hours;
  appendTotalTime.innerText = totalTime;
}
/*
function start(){
  var x = document.getElementById("seconds");
  x.innerText = "6";
}
*/
//I figured out how to change the text of an element.
// innerText will change the content of an element 
