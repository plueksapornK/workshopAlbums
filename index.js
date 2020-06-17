import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumLists from './src/components/albumLists';

const App = () => (
  <>
    <Header headerText={'Hi there'} />
    <AlbumLists />
  </>
);

AppRegistry.registerComponent('albums', () => App);
