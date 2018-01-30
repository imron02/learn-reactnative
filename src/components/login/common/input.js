import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {
  render() {
    const {
      inputRef,
      placeholder,
      keyboardType,
      autoCorrect,
      secureTextEntry,
      returnKeyType,
      onSubmitEditing,
      onChangeText
    } = this.props;

    return (
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid="rgba(0,0,0,0)"
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  }
});

export default Input;
