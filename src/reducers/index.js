import { combineReducers } from 'redux';
import navReducer from './nav';
import authReducer from './auth';

const AppReducer = combineReducers({
    nav: navReducer,
    auth: authReducer,
});

export default AppReducer;
