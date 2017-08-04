import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native';
import './ReactotronConfig'
import AppReducer from '../reducers';

export default function configureStore() {
    const middleware = applyMiddleware(thunk)
    if (__DEV__) {
        console.log('dev');
        return Reactotron.createStore(AppReducer,compose(middleware))
    } else {
        console.log('production');
        const storeWithMiddlewares = compose(middleware)(createStore);
        return storeWithMiddlewares(AppReducer);
    }
}
