import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class Buttons extends Component {
  _backToLogin = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._backToLogin}>
          <Text style={styles.buttonText}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFF'
  }
});

export default Buttons;
