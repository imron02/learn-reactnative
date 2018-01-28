import React, { Component } from 'react';
import { StyleSheet, PickerIOS, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { changeGender, changePicker } from '../../../actions/register';

class PickerGender extends Component {
  onValueChange = (itemValue, itemIndex) => {
    this.props.onChangeGender(itemValue, itemIndex);
  };

  onClick = () => {
    let picker = !this.props.picker;
    this.props.onChangePicer(picker);
  }

  render() {
    const { genderValue } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.onClick}>
            <Text>Choose</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pickerItem}>
          <PickerIOS
            selectedValue={genderValue}
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
    backgroundColor: '#cacdd2',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  button: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  pickerItem: {
    backgroundColor: '#cacdd2',
    marginLeft: -10,
    marginRight: -10
  }
});

mapStateToProps = (state, ownProps) => {
  return {
    picker: state.register.picker,
    genderValue: state.register.genderValue,
    genderItem: state.register.genderItem
  };
}

mapDispatchToProps = (dispatch) => {
  return {
    onChangeGender: (value, index) => dispatch(changeGender(value, index)),
    onChangePicer: (bool) => dispatch(changePicker(bool))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PickerGender);