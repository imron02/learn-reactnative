import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

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
    const { goBack } = this.props.navigation;
    return (
      <RegisterForm goBack={goBack} />
    );
  }
}

export default Register;