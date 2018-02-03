import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TabHome extends Component {
  static navigatorStyle = {
    navBarTextColor: 'rgba(255,255,255,0.7)',
    navBarBackgroundColor: '#3498db',
    navBarButtonColor: 'rgba(255,255,255,0.7)',
    statusBarTextColorScheme: 'light'
  };

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}


export default TabHome;
