var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

require("dotenv").config();
 

function spotifySong(song) {
    if (song === " "){
        song = ""
    }
}
 
spotify.search({ type: 'track', query: song}
, function(err, data) {
  if (err) {
    console.log('Error occurred: ' + err);
    return;
  }
 
  var song = data.tracks.items[0];
  console.log ("Artist---------");
  for (i=0; i<song.artist.length; i++){
      console.log(song.artist[i].name);
  }
console.log(data); 
});