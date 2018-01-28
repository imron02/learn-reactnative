import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

class PickerGender extends Component {

  render() {
    const { value } = this.props;

    return (
      <View style={styles.pickerContainer}>
        <Picker
          mode="dropdown"
          style={styles.picker}
          onValueChange={value}>
          <Picker.Item label="Select" value={"select"} />
          <Picker.Item label="Male" value={"male"} />
          <Picker.Item label="Female" value={"female"} />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
  },
  picker: {
    height: 40,
    color: '#FFF'
  },
});

export default PickerGender;