//Include our time library
var rocky = require('rocky');

//Global variables for this

//set up defaults
var lineThickness = 6;
var margin = 3; //Account for area of the screen beneath the bezel
var gap=1;
var colors = ['screamingreen','inchworm','yellow'];

var settings = null;

//Every minute we update
rocky.on('minutechange', function(event) {
  rocky.requestDraw();
});

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;
  //Get our date/time
  var d = new Date();

  //Apply settings
  if (settings) {
    backgroundColor = cssColor(settings.BackgroundColor);
  }
  
  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  
  //Set our line width
  ctx.lineWidth = lineThickness;
  
  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Determine the center point of the display
  // and the max size of watch hands
  var cx = w / 2;
  var cy = h / 2;
  
  //Draw circles up to the current hour
  var thisHour = d.getHours() % 12;
  var colorCycle=0;
  var colorUp=1;
  for ( var i=0; i <  thisHour; i++){
    var r = (Math.min(w, h) / 2) - (i * lineThickness) - margin;    
    //Draw some circles for past hours
    ctx.strokeStyle = colors[colorCycle];
    ctx.beginPath();
    ctx.arc(cx, cy, (r-(lineThickness/2)-(gap*i)), 0, (2 * Math.PI), false); 
    ctx.stroke();
    
    //Change the color for next time
    colorCycle = colorCycle+colorUp;
    if(colorCycle===0||colorCycle==colors.length-1) {
      colorUp = colorUp * -1;
    }
    
  }
  
  // Radius changes every hour
  var radius = (Math.min(w, h) / 2) - ( thisHour * lineThickness) - margin;
  
  // Calculate the minute angle
  var minuteFraction = d.getMinutes() / 60;
  
  //Render our partial circle that represents the minutes
  ctx.strokeStyle = colors[colorCycle];
  ctx.beginPath();
  ctx.arc(cx, cy, (radius-(lineThickness/2)-(gap*thisHour)), (1.5 * Math.PI), ((2 * Math.PI * minuteFraction)-(0.5*Math.PI)), false); 
  ctx.stroke();
});

rocky.on('message', function(event) {
  settings = event.data;
});

rocky.postMessage({command: 'settings'});

// Borrowed from Clay.js

/**
 * @param {string|boolean|number} color
 * @returns {string}
 */
function cssColor(color) {
  if (typeof color === 'number') {
    color = color.toString(16);
  } else if (!color) {
    return 'transparent';
  }

  color = padColorString(color);

  return '#' + color;
}

/**
 * @param {string} color
 * @return {string}
 */
function padColorString(color) {
  color = color.toLowerCase();

  while (color.length < 6) {
    color = '0' + color;
  }

  return color;
}