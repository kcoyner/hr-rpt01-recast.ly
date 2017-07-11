// TODO: Render the `App` component to the DOM


var settings = {
  url: 'https://www.googleapis.com/youtube/v3/search',
  method: 'GET',
  // data: {maxResults: 5, part: 'snippet', key: 'AIzaSyDuR1apyail37bXQBpjzz75x1FSeOuy95o', q: 'coyner'},
  // data: {maxResults: 5, part: 'snippet', q: 'kevin coyner', key: 'YOUTUBE_API_KEY'},
  data: {maxResults: 5, part: 'snippet', q: 'kevin coyner'},
  success: function(data) {
    console.log(data);
  },
  error: function() {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('recast.ly: Failed to get videos');
  }
};

var test = $.ajax(settings);


//var apiKey = process.env.$YOUTUBE_API;
//console.log(apiKey);


ReactDOM.render( <App />, app );
