import { combineReducers } from 'redux';
import navReducer from './navigation';

const AppReducer = combineReducers({
  nav: navReducer
});

export default AppReducer;
