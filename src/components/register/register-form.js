import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  PickerIOS,
  Picker,
  TouchableOpacity,
  Text,
  Keyboard,
  ScrollView,
  Platform,
  ActionSheetIOS,
  CameraRoll
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
        <TouchableOpacity style={styles.genderButton} onPress={this.onGenderClick}>
          <Text style={styles.genderText}>{this.genderValue(this.state.gender)}</Text>
        </TouchableOpacity>
      );
    }

    if (Platform.OS == 'android') {
      return (
        <View style={styles.pickerAndroidContainer}>
          <Picker
            mode="dropdown"
            style={styles.pickerAndroid}
            selectedValue={this.state.gender}
            onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
            <Picker.Item label="Select" value={"select"} />
            <Picker.Item label="Male" value={"male"} />
            <Picker.Item label="Female" value={"female"} />
          </Picker>
        </View>
      );
    }
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
          onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
          <PickerIOS.Item label="Select" value={"select"} />
          <PickerIOS.Item label="Male" value={"male"} />
          <PickerIOS.Item label="Female" value={"female"} />
        </PickerIOS>
      </View>
    );
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
              <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                keyboardType="email-address"
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input} />
              <TextInput
                placeholder="Full name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input} />
              {this.renderButtonPicker()}
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input} />
              <TextInput
                placeholder="Retype password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input} />
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
            <View style={styles.pickerContainer}>
              {this.state.picker ? this.renderCloseToolbar() : null}
              {this.state.picker ? this.renderPicker() : null}
            </View>
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
    marginTop: 5
  },
  pickerItem: {
    backgroundColor: '#FFF',
    marginLeft: -10,
    marginRight: -10
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
  pickerAndroidContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
  },
  pickerAndroid: {
    height: 40,
    color: '#FFF'
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
  },
  buttonTextRegister: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFF'
  }
});

export default RegisterForm;