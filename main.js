      //TIMER

var seconds = 59; 
var minutes = 24;
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");


      //START BUTTON

function start(){
  increaseNumber = setInterval(printX, 1000);
  document.getElementById("start").disabled = true;
  //this function will execute every second
  function printX(){
    
    if (seconds>1){
      seconds--;
      appendSeconds.innerText = seconds;
     
      if(seconds<10){
        appendSeconds.innerText = "0" + seconds;}
      }
    
      else if (seconds<=1){
        seconds = 59;
        appendSeconds.innerText = seconds;
        minutes--;
        appendMinutes.innerText = minutes;
        if(minutes<10){
          appendMinutes.innerText = "0" + minutes;}
        if(seconds == 00 && minutes == 00){ //ends the timer on zero 
          clearInterval(increaseNumber);
          alert("time is up");
        }
        
      }
  }
}



      //STOP BUTTON

function stop(){
  clearInterval(increaseNumber);
  document.getElementById("start").disabled = false;
}



      //RESET BUTTON

function reset(){
  seconds = 59;
  minutes = 24;
  appendSeconds.innerText = "59";
  appendMinutes.innerText = "24";
}



      //ADD LIST ITEM


var addButton = document.getElementById('submitButton'); //variable created for button
addButton.addEventListener('click', function(){ 
    var newItem = document.createElement("li"); //creates new list item
    var newContent = document.getElementById("submitText").value; //creates a variable with the data from input
    newItem.innerText = newContent; //changes the text of the new list item to that of the input
    document.getElementById("list").appendChild(newItem); //adds the list element to the DOM
    newContent.value = "";
});




      //REMOVE LIST ITEM


document.addEventListener('click', function remove(event) {
  if (event.target.tagName === "LI"){
    console.log(event.target);
    event.target.remove();
  }
});
