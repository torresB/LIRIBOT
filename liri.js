var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

require("dotenv").config();
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
spotify.search({ type: 'track', query: 'All the Small Things' }
, function(err, data) {
  if (err) {
    console.log('Error occurred: ' + err);
    return;
  }
 
console.log(data); 
});