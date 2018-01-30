import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input } from './common';
import PickerGender from './common/picker-gender';
import GenderButton from './common/gender-button';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = { profilURI: null };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.picker) {
      setTimeout(() => {
        this.scrollView.scrollToEnd();
      }, 50);
    }
  }

  _backToLogin = () => {
    this.props.navigator.pop();
  }

  _onPhoto = () => {
    ImagePicker.openPicker({
      width: 170,
      height: 170,
      cropping: true,
      mediaType: 'photo',
      cropperCircleOverlay: true
    }).then(image => this.setState({ profilURI: image.path }))
      .catch(error => console.log(error));
  }

  render() {
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
              <TouchableOpacity
                style={styles.photoContainer}
                onPress={this._onPhoto}
              >
                {this.state.profilURI
                  ? <Image
                    style={styles.profilURI}
                    source={{ uri: this.state.profilURI }}
                  />
                  : <Text style={styles.photoText}>Add Photo</Text>}
                {/* <Image
                  style={styles.profilURI}
                  source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.buttonTextRegister}>REGISTER</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._backToLogin}>
                <Text style={styles.buttonTextRegister}>Already have an account? Log In</Text>
              </TouchableOpacity>
            </View>
            {this.props.picker ? <PickerGender /> : null}
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
  profilURI: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50
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

const mapStateToProps = (state, ownProps) => ({
  picker: state.register.picker
});

export default connect(mapStateToProps)(RegisterForm);
