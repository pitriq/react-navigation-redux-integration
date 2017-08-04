import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import AppWithNavigationState from './src/navigators/AppNavigator';


class App extends React.Component {

    store = configureStore()

    render() {
        console.log(this.store.getState())
        return (
          <Provider store={this.store}>
            <AppWithNavigationState />
          </Provider>
        );
    }
}

export default App;
