import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDtail = (props) => {
  const {
    album: {title, thumbnail_image, artist, image},
  } = props;
  return (
    <>
      <Card>
        <CardSection>
          <View style={styles.imageContainer}>
            <Image style={styles.thumbnail} source={{uri: thumbnail_image}} />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={styles.image} source={{uri: image}} />
        </CardSection>
        <CardSection>
          <Button />
        </CardSection>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 18,
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
});
export default AlbumDtail;
