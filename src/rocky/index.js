//This file is started from this: https://developer.pebble.com/tutorials/js-watchface-tutorial/part1/
//Include our time library
var rocky = require('rocky');

//Global variables for this

var lineThickness = 6;
//All green
//var colors = ['mintgreen','inchworm','springbud','screamingreen','brightGreen','malachite','green','maygreen','kellygreen','jaegergreen','islamicgreen','darkgreen'];
//rainbowy
//var colors = ['green','mediumaquamarine','cyan','bluemoon','electricultramarine','vividviolet','magenta','folly','red','orange','yellow','springbud'];
//Alternating Red to yellow
//var colors = ['red','orange','chromeyellow','yellow','chromeyellow','orange','red','orange','chromeyellow','yellow','chromeyellow','orange','red'];
//Alternating Green to violet
var colors = ['vividcerulean','bluemoon','electricultramarine','bluemoon','vividcerulean','bluemoon','electricultramarine','bluemoon','vividcerulean','bluemoon','electricultramarine','bluemoon'];
//Every minute we update
rocky.on('minutechange', function(event) {
  rocky.requestDraw();
});

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;

  var d = new Date();

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Determine the center point of the display
  // and the max size of watch hands
  var cx = w / 2;
  var cy = h / 2;
  
  //Draw circles up to the current hour
  var thisHour = d.getHours() % 12;
  for ( var i=0; i <=  thisHour; i++){
    var r = (Math.min(w, h) / 2) - (i * lineThickness);
    ctx.fillStyle = colors[i];
    
    if (i==thisHour) {
      ctx.fillStyle = 'black';
    } 
    ctx.rockyFillRadial(cx, cy, 0, r , 0, 2 * Math.PI); 
    //console.log("Drawing circle "+ r);
  }
  
  // Radius changes every hour
  var radius = (Math.min(w, h) / 2) - ( thisHour * lineThickness);
  
  // Calculate the minute hand angle
  var minuteFraction = d.getMinutes() / 60;
  //var minuteAngle = fractionToRadian(minuteFraction);
  // console.log("current hour: "+ thisHour);
  //console.log("current minute: "+ d.getMinutes());
  // console.log("current minuteFr: "+ minuteFraction);
  // Draw the minute hand
  //ctx.fillStyle = colors[thisHour];
  //ctx.rockyFillRadial(cx, cy, (radius-lineThickness), radius , 0, (2 * Math.PI * minuteFraction)); 
  ctx.lineWidth = lineThickness;
  ctx.strokeStyle = colors[thisHour];
  ctx.beginPath();
  ctx.arc(cx, cy, (radius-(lineThickness/2)), (1.5 * Math.PI), ((2 * Math.PI * minuteFraction)-(0.5*Math.PI)), false); 
  ctx.stroke();
});