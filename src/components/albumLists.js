import React, {Component} from 'react';
import {Text, View} from 'react-native';

class AlbumLists extends Component {
  componentDidMount() {
    console.log('componentDidMount!!!');
  }
  render() {
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

export default AlbumLists;
