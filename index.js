import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumLists from './src/components/AlbumLists';

const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Albums'} />
    <AlbumLists />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
