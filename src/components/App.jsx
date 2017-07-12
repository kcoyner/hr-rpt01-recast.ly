class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {currentVid: {}, videoList: [] };
    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    props.searchYouTube({max: 10, query: 'react', key: window.YOUTUBE_API_KEY}, function(data) { console.log('searching!' + data); });
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


