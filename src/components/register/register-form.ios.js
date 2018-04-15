import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Buttons, ProfilePicture } from './common';
import PickerGender from './common/picker-gender';
import GenderButton from './common/gender-button';

class RegisterForm extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.picker) {
      setTimeout(() => {
        this.scrollView.scrollToEnd();
      }, 50);
    }
  }

  render() {
    const { navigator, picker } = this.props;

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
              <GenderButton />
              <Input placeholder="Password" />
              <Input placeholder="Retype password" />
              <ProfilePicture />
              <Buttons navigator={navigator} />
            </View>
            {picker ? <PickerGender /> : null}
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
  }
});

const mapStateToProps = (state, ownProps) => ({
  picker: state.register.picker
});

export default connect(mapStateToProps)(RegisterForm);
