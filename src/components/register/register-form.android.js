import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Buttons, ProfilePicture } from './common';
import PickerGender from './common/picker-gender';

class RegisterForm extends Component {
  render() {
    const { nav } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          ref={scrollView => this.scrollView = scrollView}
        >
          <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
            <View style={styles.formContainer}>
              <Input placeholder="Email" />
              <Input placeholder="Full name" />
              <PickerGender />
              <Input placeholder="Password" />
              <Input placeholder="Retype password" />
              <ProfilePicture />
              <Buttons nav={nav} />
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
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
  }
});

export default RegisterForm;
