//TO-DO-LIST
var addButton = document.getElementById('submitButton');
//var list = document.querySelector('.list')
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


function stop(){
  clearInterval(increaseNumber);
}

function reset(){
  seconds = 59;
  minutes = 24;
  appendSeconds.innerText = "59";
  appendMinutes.innerText = "24";
}

function save(){
  totalTime = seconds + minutes + hours;
  appendTotalTime.innerText = totalTime;
}



/*

//function to be performed when the item is clicked on
function itemClicked(){
  li.style.textDecoration = "strikethrough";
}

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
