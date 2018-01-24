import React, { Component } from 'react';
import RegisterForm from './register-form';

class Register extends Component {
  static navigationOptions = {
    title: 'Register',
    headerTintColor: 'rgba(255,255,255,0.7)',
    headerStyle: {
      backgroundColor: '#3498db',
      borderBottomColor: '#2F95D6',
      borderBottomWidth: 3,
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RegisterForm />
    );
  }
}

export default Register;