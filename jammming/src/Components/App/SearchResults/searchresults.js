import React from 'react';
import './searchresults.css';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList onAdd={this.props.onAdd} tracks={this.props.searchResults}>
      </div>
    )
  }
}
export default SearchResults;
