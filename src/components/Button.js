import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    alignSelf: 'center',
    fontSize: 16,
    paddingVertical: 10,
    color: '#007aff',
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Button;
