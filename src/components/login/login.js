import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import LoginForm from './login-form';

class Login extends Component {
  static navigatorStyle = {
    navBarTextColor: 'rgba(255,255,255,0.7)',
    navBarBackgroundColor: '#3498db',
    navBarButtonColor: 'rgba(255,255,255,0.7)',
    statusBarTextColorScheme: 'light'
  };

  hideKeyboard() {
    Keyboard.dismiss();
  }

  render() {
    const { navigator } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardContainer}>
          <TouchableWithoutFeedback onPress={this.hideKeyboard}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../images/github.png')}
              />
              <Text style={styles.title}>Get Your Professional and Perfect Soulmate</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.hideKeyboard}>
            <View style={styles.formContainer}>
              <LoginForm navigator={navigator} />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  keyboardContainer: {
    flex: 1
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: 1,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});

export default Login;
