import React from 'react';
import './playlist.css';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.bind(handleNameChange());
  }


  handleNameChange('New Playlist') {
    this.onChangeName('New Playlist')
  }


  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playlistTracks}/>
        <a onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
export default Playlist;
