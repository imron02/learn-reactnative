import React, { Component } from 'react';
import RegisterForm from './register-form';

class Register extends Component {
  static navigatorStyle = {
    navBarTextColor: 'rgba(255,255,255,0.7)',
    navBarBackgroundColor: '#3498db',
    navBarButtonColor: 'rgba(255,255,255,0.7)',
    statusBarTextColorScheme: 'light'
  };

  render() {
    const { navigator } = this.props;

    return (
      <RegisterForm navigator={navigator} />
    );
  }
}

export default Register;
