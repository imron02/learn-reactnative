import React, { Component } from 'react';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import { addListener } from '../utils/navigation';
import TabBarTop from '../utils/tabbarTop';

// Screen
import FindLoveScreen from '../components/findlove';

// Utils
import Color from '../utils/color';

// Navigator config
export const AppNavigator = TabNavigator(
  {
    FindLove: {
      screen: FindLoveScreen,
      navigationOptions: {
        tabBarLabel: 'Find Love',
      }
    },
    Match: {
      screen: FindLoveScreen,
      navigationOptions: {
        tabBarLabel: 'Match',
      }
    },
    Chat: {
      screen: FindLoveScreen,
      navigationOptions: {
        tabBarLabel: 'Chat',
      }
    },
  },
  {
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      style: { backgroundColor: Color.RED, elevation: 0 },
      upperCaseLabel: true,
      indicatorStyle: { backgroundColor: Color.WHITE },
      labelStyle: { fontWeight: 'bold' }
    },
  }
);

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('FindLove'));

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);