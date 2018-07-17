import React from 'react';
import './searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.bind(this.search());
    this.bind(this.handleTermChange());
  }


  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.state.term = event;
  }



  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    )
  }
}
export default SearchBar;
