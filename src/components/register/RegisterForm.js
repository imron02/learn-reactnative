import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  PickerIOS,
  PickerItemIOS,
  TouchableOpacity,
  Text,
  Keyboard
} from 'react-native';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    // Modal state
    this.state = {
      picker: false,
      gender: 'male'
    }

    this.onGenderClick = this.onGenderClick.bind(this);
    this.onChooseGender = this.onChooseGender.bind(this);
  }

  renderCloseToolbar() {
    return (
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={this.onChooseGender}>
          <Text style={styles.closeButtonText}>Choose</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderPicker() {
    return (
      <View style={styles.pickerContainer}>
        <PickerIOS
          selectedValue={this.state.gender}
          onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}
        >
          <PickerIOS.Item label="Male" value={"male"} />
          <PickerIOS.Item label="Female" value={"female"} />
        </PickerIOS>
      </View>
    );
  }

  onChooseGender() {
    this.setState({ picker: false });
  }

  onGenderClick() {
    this.setState({ picker: true });

    Keyboard.dismiss();
  }

  genderValue(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <View style={styles.containter}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Full name"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />
        <TouchableOpacity style={styles.genderButton} onPress={this.onGenderClick}>
          <Text style={styles.genderText}>{this.genderValue(this.state.gender)}</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />
        <TextInput
          placeholder="Retype password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />

        {this.state.picker ? this.renderCloseToolbar() : null}
        {this.state.picker ? this.renderPicker() : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#FFF'
  },
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
  closeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopColor: '#e2e2e2',
    borderTopWidth: 1,
    backgroundColor: '#FFF',
    marginLeft: -20,
    marginRight: -20
  },
  closeButton: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  closeButtonText: {
    // color: '#FFF'
  },
  pickerContainer: {
    marginLeft: -20,
    marginRight: -20,
    marginTop: 0,
    backgroundColor: '#FFF',
    height: 300
  }
});

export default RegisterForm;