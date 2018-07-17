import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [name, artist, album, id]};
    this.state = {playlistName: ' '};
    this.state = {playlistTracks: [name, artist, album, id]}
    this.bind(addTrack());
    this.bind(removeTrack());
    this.bind(updatePlaylistName());
    this.bind(savePlaylist());
    this.bind(search());
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return this.track;
}
  }

  removeTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return this.track;
  }

  updatePlaylistName(name) {
    this.state = {name}
  }

  savePlaylist() {
    var uri[trackURIs]
  }

  search(term) {
    console.log(term);
  }




  render() {
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch={this.state.search}/>
      <div className="App-playlist">
        <SearchResults onAdd={this.addTrack()} searchResults={this.state.searchResults}>
        <Playlist onSave={this.state.savePlaylist} onChangeName={this.state.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
