import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onRegister = this.onRegister.bind(this);
  }

  onLogin() {
    console.log(123);
  }

  onRegister() {
    this.props.navigation('Register');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          style={styles.input} 
        />
        <TextInput 
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry={true}
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          style={styles.input} 
        />
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonTextLogin}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onRegister}>
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

export default LoginForm;