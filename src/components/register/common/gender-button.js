import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { changePicker } from '../../../actions/register';

class GenderButton extends Component {
  onClick = () => {
    // Change picker
    const picker = !this.props.picker;

    // Update redux picker
    this.props.onChangePicker(picker);

    // Dismiss keyboard
    Keyboard.dismiss();
  }

  toUpperCase = string => string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    const value = this.toUpperCase(this.props.genderValue);

    return (
      <TouchableOpacity style={styles.button} onPress={this.onClick}>
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20
  },
  text: {
    color: '#FFF',
    paddingTop: 10,
    paddingHorizontal: 10
  },
});

const mapStateToProps = (state, ownProps) => ({
  picker: state.register.picker,
  genderValue: state.register.genderValue
});

const mapDispatchToProps = dispatch => ({
  onChangePicker: bool => dispatch(changePicker(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(GenderButton);
