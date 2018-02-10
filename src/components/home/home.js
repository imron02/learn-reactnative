import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
    <Text>Nearby</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]}>
    <Text>Match</Text>
  </View>
);

class TabHome extends Component {
  static navigatorStyle = {
    navBarTextColor: 'rgba(255,255,255,0.7)',
    navBarBackgroundColor: '#3498db',
    topBarElevationShadowEnabled: false
  };

  state = {
    index: 0,
    routes: [
      { key: 'findLove', title: 'Find Love' },
      { key: 'match', title: 'Match' },
      { key: 'chat', title: 'Chat' },
      { key: 'nearby', title: 'Nearby' },
      { key: 'profile', title: 'Profile' },
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      scrollEnabled
      {...props}
      labelStyle={styles.label}
    />
  );

  _renderScene = SceneMap({
    nearby: FirstRoute,
    match: SecondRoute,
    findLove: FirstRoute,
    chat: SecondRoute,
    profile: FirstRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        useNativeDriver
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: '#fff',
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default TabHome;
