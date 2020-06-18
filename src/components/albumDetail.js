import React from 'react';
import {Text, View, Image} from 'react-native';

const AlbumDtail = (props) => {
  const {album} = props;
  return (
    <View>
      <Text>{album.title}</Text>
    </View>
  );
};

export default AlbumDtail;
