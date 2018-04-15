/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppWithNavigationState from './app/navigator/navigationConfiguration';
import AppReducer from './app/reducer';
import { middleware } from './app/utils/navigation';

const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
