// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFuntion){
  for (let r = 0; r < image.length; r++){
const row = image[r];
for (let c = 0; c < row.length; c++);{

  var rgbString = row[c]; 

  //let color = $square.css("background-color");
  const rgbNumbers = rgbStringToArray(rgbString);

 filterFunction(rgbNumbers); 
  rgbNumbers[RED] = 255 - rgbNumbers[0];
  rgbNumbers[GREEN] = rgbNumbers[2];
  rgbNumbers[BLUE] += 50;
 
  rgbString = rgbArrayToString(rgbNumbers);

  image[r][c] = rgbString;
 
  //$square.css("background-color", color);
};
  };
};

// TODO 7: Create the applyFilterNoBackground function
function applyFliterNoBackground(){
  var h = image[0][0];
  for (let r = 0; r < image.length; r++){
    var row = image[r];
    /*if ( h === image[0]){
      
    }*/
    for (let c = 0; c < row.length; c++);{
    
      var rgbString = row[c]; 
    if (rgbString !== h){
      var rgbNumbers = rgbStringToArray(rgbString);

    
      //let color = $square.css("background-color");
      
    
     filterFunction(rgbNumbers); 
     rgbString = rgbArrayToString(rgbNumbers);
     row[c] = rgbString;
    }
      /*rgbNumbers[RED] = 255 - rgbNumbers[0];
      rgbNumbers[GREEN] = rgbNumbers[2];
      rgbNumbers[BLUE] += 50;
     
      
    
      image[r][c] = rgbString;
     
      //$square.css("background-color", color);*/
    };
      };
}

// TODO 5: Create the keepInBounds function
function keepInBounds(g){
  const g = Math.random();
  const result = (g < 0 ? 0 : g > 255 ? 255 : g);
  
}

// TODO 3: Create reddify function
function reddify(l){
  l[RED] = 200;
};

// TODO 6: Create more filter functions
function decreaseBlue(u){
var u = BLUE - 50;
};
u = keepInBounds(u - 50);

function increaseGreenByBlue(v){
var v = GREEN + BLUE;
}
v = keepInBounds(u + v);
// CHALLENGE code goes below here
