import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumLists extends Component {
  state = {album: []};
  componentDidMount() {
    console.log('componentDidMount!!!');
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((responseData) => this.setState({album: responseData.data}));
  }
  renderAlbums() {
    return this.state.album.map((album) => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumLists;
