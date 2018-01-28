import React, { Component } from 'react';
import { StyleSheet, PickerIOS, View, TouchableOpacity, Text } from 'react-native';

class PickerGender extends Component {
  onValueChange = (itemValue, itemIndex) => {
    this.props.onValueChange(itemValue, itemIndex);
  };

  render() {
    const { click, selectedValue } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={click}>
            <Text>Choose</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pickerItem}>
          <PickerIOS
            selectedValue={selectedValue}
            onValueChange={this.onValueChange}>
            <PickerIOS.Item label="Select" value={"select"} />
            <PickerIOS.Item label="Male" value={"male"} />
            <PickerIOS.Item label="Female" value={"female"} />
          </PickerIOS>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5
  },
  buttonContainer: {
    borderTopColor: '#e2e2e2',
    borderTopWidth: 1,
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  button: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  pickerItem: {
    backgroundColor: '#FFF',
    marginLeft: -10,
    marginRight: -10
  }
});

export default PickerGender;