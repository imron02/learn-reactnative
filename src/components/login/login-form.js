import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { appDashboard } from '../../actions/app';
import { Input, Buttons } from './common';

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
    this.props.goToDashboard();
  }

  _register = () => {
    this.props.navigator.push({
      screen: 'flutterasia.RegisterScreen',
      title: 'Register'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username or email"
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={text => this.setState({ username: text })}
        />
        <Input
          inputRef={input => this.passwordInput = input}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="go"
          onChangeText={text => this.setState({ password: text })}
        />
        <Buttons
          styleBtn={true}
          label="LOGIN"
          click={this._login}
        />
        <Buttons
          label="New to Flutter Asia? Sign up"
          click={this._register}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(login(username, password)),
  goToDashboard: () => dispatch(appDashboard())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
