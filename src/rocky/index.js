//Include our time library
var rocky = require('rocky');

//Global variables for this

var lineThickness = 6;
var gap=1;

//Some color options
//All green
//var colors = ['mintgreen','inchworm','springbud','screamingreen','brightGreen','malachite','green','maygreen','kellygreen','jaegergreen','islamicgreen','darkgreen'];
//rainbowy
//var colors = ['green','mediumaquamarine','cyan','bluemoon','electricultramarine','vividviolet','magenta','folly','red','orange','yellow','springbud'];
//Alternating Red to yellow
//var colors = ['red','orange','chromeyellow','yellow'];
//Alternating Green to violet
//var colors = ['vividcerulean','bluemoon','electricultramarine'];

//Lighter colors
var colors = ['screamingreen','inchworm','yellow'];
//Every minute we update
rocky.on('minutechange', function(event) {
  rocky.requestDraw();
});

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;
  //Get our date/time
  var d = new Date();

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
    var r = (Math.min(w, h) / 2) - (i * lineThickness);    
    
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
  var radius = (Math.min(w, h) / 2) - ( thisHour * lineThickness);
  
  // Calculate the minute angle
  var minuteFraction = d.getMinutes() / 60;
  
  //Render our partial circle that represents the minutes
  ctx.strokeStyle = colors[colorCycle];
  ctx.beginPath();
  ctx.arc(cx, cy, (radius-(lineThickness/2)-(gap*thisHour)), (1.5 * Math.PI), ((2 * Math.PI * minuteFraction)-(0.5*Math.PI)), false); 
  ctx.stroke();
});