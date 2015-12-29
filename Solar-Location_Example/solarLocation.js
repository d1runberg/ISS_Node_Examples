var iss = require('iss');

var locator = iss.locationStream(25544,10);

locator.on('data',function(buffer){
   var json = buffer.toString('utf8'),
   data = JSON.parse(json);

   console.log("=======ISS Solar Location=========")
   console.log("Solar Latitude: " + data.solar_lat);
   console.log("Solar Longitude: " + data.solar_lon);
});
