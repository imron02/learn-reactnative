import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { changePicker } from '../../../actions/register';

class GenderButton extends Component {
  constructor(props) {
    super(props);
  }

  toUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onClick = () => {
    // Change picker
    let picker = !this.props.picker;

    // Update redux picker
    this.props.onChangePicker(picker);

    // Dismiss keyboard
    Keyboard.dismiss();
  }

  render() {
    let value = this.toUpperCase(this.props.genderValue);

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

mapStateToProps = (state, ownProps) => {
  return {
    picker: state.register.picker,
    genderValue: state.register.genderValue
  };
}

mapDispatchToProps = (dispatch) => {
  return {
    onChangePicker: (bool) => dispatch(changePicker(bool))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderButton);