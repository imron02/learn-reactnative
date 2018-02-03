import { Provider } from 'react-redux';
import { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/components/screens';
import store from './src/stores/configureStore';
import { appInitialized } from './src/actions/app';

registerScreens(store, Provider);

// start the app
class App extends Component {
  constructor(props) {
    super(props);

    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appInitialized());
  }

  onStoreUpdate() {
    const { root } = store.getState().app;

    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
    switch (root) {
      case 'dashboard':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'flutterasia.LoginScreen',
            title: 'Login',
            navigatorStyle: {
              navBarHidden: true
            },
            navigatorButtons: {}
          }
        });
        break;
      case 'login':
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: 'Find Love',
              screen: 'flutterasia.TabHomeScreen',
              icon: require('./src/images/find-love.png'),
              title: 'Find Love'
            }
          ],
          appStyle: {
            tabBarBackgroundColor: '#3498db'
          },
        });
        break;
      default:
        console.error('Unknown app root');
        break;
    }
  }
}

export default App;
