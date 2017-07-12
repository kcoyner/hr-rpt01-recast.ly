const key = window.YOUTUBE_API_KEY;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {currentVid: null, videoList: [] };
    // this.state = {currentVid: exampleVideoData[0], videoList: [] };
    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    searchYouTube({max: 1, query: 'react', key: key}, function(data) {
      console.log('Search results YouTube data:' + data);
      this.setState({ videoList: data, currentVid: videoList[0] });
    });
  }

  componentDidMount () {

  }

  onVideoListEntryClick (clickedVideo) {
    this.setState({currentVid: clickedVideo});
  }


  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVid} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} clickHandler={this.onVideoListEntryClick} />
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


