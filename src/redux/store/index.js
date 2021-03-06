import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const middleware = [thunk];
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
          ),
    );
}
