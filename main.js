var addButton = document.getElementById('submitButton');
//ADD BUTTON
addButton.addEventListener('click', function(){
    var newItem = document.createElement("li");
    var newX = document.createElement("button");
    newX.id = "xButton";
    var newContent = document.getElementById("submitText").value;
    newItem.innerText = newContent;
    document.getElementById("list").appendChild(newItem);
    newItem.appendChild(newX);
    newContent = "";
});

//Append delete button to list item



//TIMER
var seconds = 59; 
var minutes = 24;
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var totalTime = 0;
var appendTotalTime = document.getElementById("totalTime");
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

//Remove an item that is clicked
document.addEventListener('click', function handleClick(event) {
  if (event.target.tagName === "LI"){
    console.log(event.target);
    event.target.remove();
  }
});


/*
//function to be performed when the item is clicked on
function itemClicked(){
  li.style.textDecoration = "strikethrough";
}

//Create an array that stores the li values

//
//Find the li within a range of li's 
//scan through the possibilities to find the right one




RANDOM BLOCKS OF CODE

FUNCTION FOR SORTING THROUGH A LIST THAT WAS COPIED IN ORDER TO TRY TO IMPLEMENT IT WITH THE LIST ITEM STRIKETHROUGH FUNCTION

const list = document.getElementById("list");
var listItem = document.getElementsByTagName("li");
for (var i = 0 ; i < list.length; i++) {
   comment[i].addEventListener('click' , showComment , false ) ; 
    li.addEventListener("click", itemClicked);
}


Function for when a list item is clicked:
1. list item is clicked
2. function is initiated
3. find the list item that is clicked
4. put a strike through it



document.addEventListener(click, function(ev){
  if(ev.target.tagName = "Li"){
    ev.target.style.textDecoration = "strikethrough";
  }
})



if (appendSeconds == 57, appendMinutes == 24){
  function alarm(){
    window.alert("Time is up");}
  }


function start(){
  var x = document.getElementById("seconds");
  x.innerText = "6";
}
*/
//I figured out how to change the text of an element.
// innerText will change the content of an element 
