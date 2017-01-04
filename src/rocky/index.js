//Include our time library
var rocky = require('rocky');

//Every minute we update
rocky.on('minutechange', function(event) {
  rocky.requestDraw();
});

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;
  
  //radius of the circle is based on the hour (smaller as hours is higher)
  
  //Angle drawn is based on the minute (minute 60 is a complete circle)
  
  
});