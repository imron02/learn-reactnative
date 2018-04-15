import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigator/navigationConfiguration';

const mainAction = AppNavigator.router.getActionForPathAndParams('FindLove');
const mainState = AppNavigator.router.getStateForAction(mainAction);
const initialNavState = AppNavigator.router.getStateForAction(
  mainState
);

const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;