import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

export default CardSection;
