import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from 'AwesomeProject/src/screens/Home/reducer';

const rootReducer = combineReducers({
    home: homeReducer
});

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

export default configureStore;