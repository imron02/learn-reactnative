/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import Register from './src/components/register/Register';

const Flutter = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
});

export default class App extends Component {
  render() {
    return (
      // <Login />
      <Flutter />
    );
  }
}
