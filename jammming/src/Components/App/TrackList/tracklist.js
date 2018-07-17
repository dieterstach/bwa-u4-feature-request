import React from 'react';
import './tracklist.css';

class TrackList extends Component {
  removeTrack() {
    this.props.track.bind(this.props.onRemove)
  }
  render() {
    return (
      <div className="TrackList">
    <Track onRemove={this.props.onRemove} isRemoval={true} onAdd={this.props.onAdd} track={this.props.tracks.map(tracks)}/>
    <div className="name">{this.props.track.name}</div>
    <div className="artist">{this.props.track.artist}</div>
    <div className="album">{this.props.track.album}</div>
</div>
    )
  }
}
export default TrackList;
