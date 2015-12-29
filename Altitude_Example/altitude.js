var iss = require('iss');

var locator = iss.locationStream(25544,10);

locator.on('data',function(buffer){
   var json = buffer.toString('utf8'),
   data = JSON.parse(json);

   console.log("=======ISS Altitude=========")
   console.log("Altitude: " + data.altitude + " km");
});
