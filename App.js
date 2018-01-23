/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/components/Screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'flutterasia.LoginScreen',
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true
    },
    navigatorButtons: {}
  }
});
