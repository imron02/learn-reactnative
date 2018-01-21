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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
      <View style={styles.chooseButtonContainer}>
        <TouchableOpacity style={styles.chooseButton} onPress={this.onChooseGender}>
          <Text>Choose</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderPicker() {
    return (
      <View style={styles.pickerItem}>
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
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always" style={styles.container}>
        <View style={styles.formContainer}>
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
        </View>
        <View style={styles.pickerContainer}>
          {this.state.picker ? this.renderCloseToolbar() : null}
          {this.state.picker ? this.renderPicker() : null}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#3498db'
  },
  formContainer: {
    flex: 1
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
  chooseButtonContainer: {
    borderTopColor: '#e2e2e2',
    borderTopWidth: 1,
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  chooseButton: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  pickerContainer: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 70,
    marginLeft: -10,
    marginRight: -10
  },
  pickerItem: {
    backgroundColor: '#FFF'
  }
});

export default RegisterForm;