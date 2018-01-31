import { Navigation } from 'react-native-navigation';
import Login from './login/login';
import Register from './register/register';

export default function registerScreens(store, Provider) {
  Navigation.registerComponent('flutterasia.LoginScreen', () => Login, store, Provider);
  Navigation.registerComponent('flutterasia.RegisterScreen', () => Register, store, Provider);
}
