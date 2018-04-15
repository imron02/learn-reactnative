import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { changeGender } from '../../../actions/register';

class PickerGender extends Component {
  onValueChange = (itemValue, itemIndex) => {
    this.props.onChangeGender(itemValue, itemIndex);
  };

  render() {
    const { genderValue } = this.props;

    return (
      <View style={styles.container}>
        <Picker
          mode="dropdown"
          style={styles.picker}
          selectedValue={genderValue}
          onValueChange={this.onValueChange}
        >
          <Picker.Item label="Select" value="select" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
  },
  picker: {
    height: 40,
    color: '#FFF'
  },
});

const mapStateToProps = (state, ownProps) => ({
  picker: state.register.picker,
  genderValue: state.register.genderValue,
  genderItem: state.register.genderItem
});

const mapDispatchToProps = dispatch => ({
  onChangeGender: (value, index) => dispatch(changeGender(value, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(PickerGender);
