/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
  }
  // Game Item Objects
var walker = {
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0,

}

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionWalker();
    redrawWalker();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = -5;
      //console.log("Left pressed");
    }
    else if (event.which === KEY.RIGHT){
      walker.speedX = 5;
      //return console.log("Right pressed")
    } else if (event.which === KEY.UP){
      walker.speedY = 5;
      //return console.log("Up pressed");
    } else if (event.which === KEY.DOWN){
      walker.speedY = -5;
      //return console.log("Down pressed")
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionWalker(){
positionX += speedX;
positionY += speedY;
}
  function redrawWalker(){
$("#walker").css("LEFT", positionX);
$("#walker").css("RIGHT", positionX);
$("#walker").css("UP", positionY);
$("#walker").css("DOWN", positionY);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
