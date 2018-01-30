import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Buttons extends Component {
  render() {
    const { styleBtn, label, click } = this.props;

    return (
      <TouchableOpacity style={styleBtn ? styles.buttonLogin : null} onPress={click}>
        <Text style={styles.buttonTextLogin}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonTextLogin: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFF'
  }
});

export default Buttons;
