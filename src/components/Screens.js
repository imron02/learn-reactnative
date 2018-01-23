import { Navigation } from 'react-native-navigation';
import Login from './Login/Login';
import Register from './Register/Register';

export function registerScreens() {
  Navigation.registerComponent('flutterasia.LoginScreen', () => Login);
  Navigation.registerComponent('flutterasia.RegisterScreen', () => Register);
}