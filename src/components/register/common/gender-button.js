import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class GenderButton extends Component {

  render() {
    const { click, value } = this.props;

    return (
      <TouchableOpacity style={styles.genderButton} onPress={click}>
        <Text style={styles.genderText}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  genderButton: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20
  },
  genderText: {
    color: '#FFF',
    paddingTop: 10,
    paddingHorizontal: 10
  },
});

export default GenderButton;