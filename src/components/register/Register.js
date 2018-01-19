import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

  render() {
    return (
      <View style={styles.container}>
        <View>
          <RegisterForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  }
});

export default Register;