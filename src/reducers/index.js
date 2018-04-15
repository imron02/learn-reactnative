import { combineReducers } from 'redux';
import auth from './auth';
import app from './app';
import register from './register';

const rootReducer = combineReducers({
  auth,
  app,
  register
});

export default rootReducer;
