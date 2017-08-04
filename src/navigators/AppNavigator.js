import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SplashScreen from '../containers/SplashScreen';
import LoginScreen from '../containers/LoginScreen';
import MainScreen from '../containers/MainScreen';

export const AppNavigator = StackNavigator(
    {
        Splash: { screen: SplashScreen},
        Login: { screen: LoginScreen },
        Main: { screen: MainScreen },
    },
    { headerMode: 'screen' }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
