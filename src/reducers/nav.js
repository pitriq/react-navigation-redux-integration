import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import {
    NAVIGATION_GOTO_LOGIN,
    NAVIGATION_GOTO_MAIN,
} from '../constants';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Splash');
const initialNavState = AppNavigator.router.getStateForAction(
    firstAction
);

export default function navReducer(state = initialNavState, action) {
  switch (action.type) {
    case NAVIGATION_GOTO_LOGIN:
      return (
          AppNavigator.router.getStateForAction(
              // reset nav state so as to prevent the user from navigating out
              // of the login screen
              NavigationActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Login'}),
                  ]
              }),
              state
          )
        )
    case NAVIGATION_GOTO_MAIN:
      return (
          AppNavigator.router.getStateForAction(
              // reset nav state so as to prevent the user from navigating back
              // to the splash screen
              NavigationActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Main'}),
                  ]
              }),
              state
          )
        )
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }

  return state;
}
