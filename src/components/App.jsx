class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {currentVid: exampleVideoData[0], videoList: exampleVideoData };
    // this.state = {currentVid: {}, videoList: [] };
    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    this.onSearchEntryChange = _.debounce(this.onSearchEntryChange.bind(this), 500);
  }

  componentDidMount () {
    this.props.searchYouTube({max: 5, query: 'react', key: window.YOUTUBE_API_KEY}, (function(data) {
      this.setState({videoList: data, currentVid: data[0]});
    }).bind(this));
  }

  onVideoListEntryClick (clickedVideo) {
    this.setState({currentVid: clickedVideo});
  }

  onSearchEntryChange (input) {
    this.props.searchYouTube({max: 5, query: input, key: window.YOUTUBE_API_KEY}, (function(data) {
      this.setState({videoList: data, currentVid: data[0]});
    }).bind(this));
  }

  render () {
    return (
      <div>
        <Nav searchHandler = {this.onSearchEntryChange} />
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


