import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { appDashboard } from '../../actions/app';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    };
  }

  _login = () => {
    this.props.onLogin(this.state.username, this.state.password);

    // Change root view
    console.log(this.props, 444);
    this.props.goToDashboard();
  }

  _register = () => {
    this.props.navigator.push({
      screen: 'flutterasia.RegisterScreen',
      title: 'Register',
      navigatorStyle: {
        navBarTextColor: 'rgba(255,255,255,0.7)',
        navBarBackgroundColor: '#3498db',
        navBarButtonColor: 'rgba(255,255,255,0.7)',
        statusBarTextColorScheme: 'light'
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text) => this.setState({ username: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid='rgba(0,0,0,0)'
          secureTextEntry={true}
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          onChangeText={(text) => this.setState({ password: text })}
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={this._login}>
          <Text style={styles.buttonTextLogin}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._register}>
          <Text style={styles.buttonTextLogin}>New to Flutter Asia? Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonLogin: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonTextLogin: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFF'
  }
});

mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, password) => dispatch(login(username, password)),
    goToDashboard: () => dispatch(appDashboard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);