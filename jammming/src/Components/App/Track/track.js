import React from 'react';
import './track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.bind(this.addTrack())
    this.bind(this.removeTrack())
  }
  render() {
    addTrack() {
      this.props.onAdd(this.props.track)
    }
    return (
      <div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a onClick={this.addTrack} className="Track-action"> + </a>
  <a onClick={this.removeTrack} className="Track-action"> - </a>
</div>
    )
  }
}
export default Track;
