import { Provider } from 'react-redux';
import { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/components/screens';
import store from './src/stores/configureStore';

registerScreens(store, Provider);

// start the app
class App extends Component {
  constructor(props) {
    super(props);

    this.startApp();
  }

  startApp(root) {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'flutterasia.TabsScreen',
        title: 'Login',
        navigatorStyle: {
          navBarHidden: true
        },
        navigatorButtons: {}
      }
    });
  }
}

export default App;
