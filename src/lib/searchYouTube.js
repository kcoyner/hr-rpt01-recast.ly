//import window.YOUTUBE_API_KEY from "../config/youtube.js";

var searchYouTube = (options, callback) => {

};

window.searchYouTube = searchYouTube;

var settings = {
  url: 'https://www.googleapis.com/youtube/v3/search',
  method: 'GET',
  data: {maxResults: 5, part: 'snippet', key: 'AIzaSyDuR1apyail37bXQBpjzz75x1FSeOuy95o', q: 'surfing'},
  success: function(data) {
    console.log(data);
  },
  error: function() {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('recast.ly: Failed to get videos');
  }
};

var test = $.ajax(settings);



// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint

// Accept an options object with the following properties:
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5  API: maxResults
// key - an authorized YouTube Browser API key

// Only GET embeddable videos


// // GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key={YOUR_API_KEY}
// //
// app.fetch = function() {
//   $.ajax({
//     url: app.server,
//     type: 'GET',
//     data: where = {
//       'order': '-createdAt',
//       'limit': '15'
//     },
//     contentType: 'application/json',
//     success: function(data) {
//       console.log(data);
//       app.renderDropDown(data);
//       app.renderMessage(data);
//     },
//     error: function() {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to get message');
//     }
//   });
// };

