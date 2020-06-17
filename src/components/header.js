import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  // const {headerText} = props;
  return (
    <View style={styles.header}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {fontSize: 20},
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingTop: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
};

export default Header;
