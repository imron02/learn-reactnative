import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
  ScrollView,
  Platform
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input } from './common';
import PickerGender from './common/picker-gender'
import GenderButton from './common/gender-button'

class RegisterForm extends Component {
  contentHeight = 0;

  constructor(props) {
    super(props);

    // Default state
    this.state = {
      picker: false,
      gender: 'select'
    };
  }

  renderButtonPicker() {
    if (Platform.OS == 'ios') {
      return (
        <GenderButton click={this.onGenderClick} value={this.genderValue(this.state.gender)} />
      );
    }

    // if (Platform.OS == 'android') {
    //   return (
    //     <PickerGender value={(itemValue, itemIndex) => this.setState({ gender: itemValue })} />
    //     // <View style={styles.pickerAndroidContainer}>
    //     //   <Picker
    //     //     mode="dropdown"
    //     //     style={styles.pickerAndroid}
    //     //     selectedValue={this.state.gender}
    //     //     onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
    //     //     <Picker.Item label="Select" value={"select"} />
    //     //     <Picker.Item label="Male" value={"male"} />
    //     //     <Picker.Item label="Female" value={"female"} />
    //     //   </Picker>
    //     // </View>
    //   );
    // }
  }

  renderPickerIOS() {
    if (Platform.OS == 'ios') {
      return (
        <PickerGender
          click={this.onChooseGender}
          selectedValue={this.state.gender}
          onValueChange={(value, index) => this.setState({ gender: value })} />
      );
    }
  }

  onChooseGender = () => {
    this.setState({ picker: false });
  }

  onGenderClick = () => {
    this.setState({ picker: true });

    setTimeout(() => {
      this.scrollView.scrollToEnd();
    }, 50);

    Keyboard.dismiss();
  }

  genderValue = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  _backToLogin = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always"
          ref={(scrollView) => this.scrollView = scrollView}>
          <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
            <View style={styles.formContainer}>
              <Input placeholder="Email" />
              <Input placeholder="Full name" />
              {this.renderButtonPicker()}
              <Input placeholder="Password" />
              <Input placeholder="Retype password" />
              <TouchableOpacity
                style={styles.photoContainer}
                onPress={this.onPhoto}>
                <Text style={styles.photoText}>Add Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.buttonTextRegister}>REGISTER</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._backToLogin}>
                <Text style={styles.buttonTextRegister}>Already have an account? Log In</Text>
              </TouchableOpacity>
            </View>
            {this.state.picker ? this.renderPickerIOS() : null}
          </KeyboardAwareScrollView>
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  formContainer: {
    flex: 1,
    padding: 10
  },
  photoContainer: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  photoText: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 45,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)'
  },
  buttonRegister: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonTextRegister: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFF'
  }
});

export default RegisterForm;