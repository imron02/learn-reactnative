import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {

  render() {
    const { placeholder } = this.props;

    return (
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.7)"
        keyboardType="email-address"
        underlineColorAndroid='rgba(0,0,0,0)'
        style={styles.input} />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#FFF'
  },
});

export { Input };