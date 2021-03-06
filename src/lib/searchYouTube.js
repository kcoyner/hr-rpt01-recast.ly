var searchYouTube = (options, callback) => {
  var settings = {
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      'maxResults': options.max,
      'q': options.query,
      'key': options.key,
      'part': 'snippet',
      'videoEmbeddable': true,
      'type': 'video'
    },

    complete: function(data) {
      callback(data.responseJSON.items);
    }

  };
  $.ajax(settings);

};



window.searchYouTube = searchYouTube;





// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint

// Accept an options object with the following properties:
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5  API: maxResults
// key - an authorized YouTube Browser API key

// Only GET embeddable videos


// GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key={YOUR_API_KEY}
