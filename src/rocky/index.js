//This file is started from this: https://developer.pebble.com/tutorials/js-watchface-tutorial/part1/
//Include our time library
var rocky = require('rocky');

//Global variables for this

var lineThickness = 2;
var colors = ["#00FF00","#00eF00","#00dF00","#00cF00","#00bF00","#00aF00","#009F00","#008F00","#007F00","#006F00","#005F00","#004F00","#003F00","#002F00","#001F00","#000F00","#000000"];

function fractionToRadian(fraction) {
  return fraction * 2 * Math.PI;
}

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
  
  for ( var i=0; i < d.getHours(); i++){
    var r = (Math.min(w, h) / 2) - (i * lineThickness);
    ctx.fillStyle = colors[i];
    ctx.rockyFillRadial(cx, cy, 0, r , 0, 2 * Math.PI); 
  }
  
  // Radius changes every hour
  var radius = (Math.min(w, h)) / 2 - (d.getHours() * lineThickness);

  // Calculate the minute hand angle
  var minuteFraction = (d.getMinutes()) / 60;
  var minuteAngle = fractionToRadian(minuteFraction);
  
  // Draw the minute hand
  ctx.fillStyle = colors[d.getHours()];
  ctx.rockyFillRadial(cx, cy, 0, radius , 0, minuteAngle); 

});