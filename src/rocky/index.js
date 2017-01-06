//Include our time library
var rocky = require('rocky');

//Global variables for this

//set up defaults
var lineThickness = 6;
var margin = 3; //Account for area of the screen beneath the bezel
var innerMargin = 10;
var gap=1;
var colors = ['screamingreen','inchworm','yellow'];
var backgroundColor = 'black';
var startOutside = true;

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
    lineThickness=settings.lineThickness;
    gap=settings.gapThickness;
    startOutside=settings.startOutside;
    
    var colorsToUse = [true,settings.clr2On,settings.clr3On,settings.clr4On,settings.clr5On,settings.clr6On,settings.clr7On,settings.clr8On,settings.clr9On,settings.clr10On,settings.clr11On,settings.clr12On];
    colors =  [cssColor(settings.clr1),
               cssColor(settings.clr2),
               cssColor(settings.clr3),
               cssColor(settings.clr4),
               cssColor(settings.clr5),
               cssColor(settings.clr6),
               cssColor(settings.clr7),
               cssColor(settings.clr8),
               cssColor(settings.clr9),
               cssColor(settings.clr10),
               cssColor(settings.clr11),
               cssColor(settings.clr12)];
    for (var j=colorsToUse.length-1; j>=0; j--)
      {
        if ( !colorsToUse[j] ){
          colors.splice(j,1);
        }
      }
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
  
  //Draw the background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, w, h);
  
  //Draw circles up to the current hour
  var thisHour = d.getHours() % 12;
  var colorCycle=0;
  var colorUp=1;
  for ( var i=0; i <  thisHour; i++){
    
    var r = (Math.min(w, h) / 2) - (i * lineThickness) - margin - (lineThickness/2) - (gap*i);
    
    if (!startOutside){
      //r= innerMargin + ((12-i) * lineThickness) + (lineThickness/2);// - (gap*(12-i));
      r = (Math.min(w, h) / 2) - r;
    }
    
    //Draw some circles for past hours
    ctx.strokeStyle = colors[colorCycle];
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, (2 * Math.PI), false); 
    ctx.stroke();
    
    //Change the color for next time
    colorCycle = colorCycle+colorUp;
    if(colorCycle===0||colorCycle==colors.length-1) {
      colorUp = colorUp * -1;
    }
    
  }
  
  // Radius changes every hour
  var radius = (Math.min(w, h) / 2) - ( thisHour * lineThickness) - margin - (lineThickness/2) - (gap*thisHour);
  
  if (!startOutside){
    //radius= innerMargin + ((12-thisHour) * lineThickness) + (lineThickness/2); - (gap*(12-thisHour));
    radius = (Math.min(w, h) / 2)-radius;
    }
  
  // Calculate the minute angle
  var minuteFraction = d.getMinutes() / 60;
  
  //Render our partial circle that represents the minutes
  ctx.strokeStyle = colors[colorCycle];
  ctx.beginPath();
  ctx.arc(cx, cy, radius, (1.5 * Math.PI), ((2 * Math.PI * minuteFraction)-(0.5*Math.PI)), false); 
  ctx.stroke();
});

rocky.on('message', function(event) {
  settings = event.data;
  rocky.requestDraw();
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