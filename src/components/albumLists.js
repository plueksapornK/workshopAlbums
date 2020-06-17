import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

class AlbumLists extends Component {
  state = {album: []};
  componentDidMount() {
    console.log('componentDidMount!!!');
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((responseData) => this.setState({album: responseData.data}));
  }
  render() {
    console.log(this.state.album);
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

export default AlbumLists;
