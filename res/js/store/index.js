/**
 * The external dependencies.
 */
import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

/**
 * The internal dependencies.
 */
import requestsReducer from './requests/reducer';

/**
 * Combine imported reducers
 */
const reducer = combineReducers({
    requests: requestsReducer,
});

/**
 * Create Sage Midddleware
 */
const saga = createSagaMiddleware();
const enhancer = applyMiddleware(saga);

/**
 * Create store
 */
const store = createStore(
    reducer,
    {},
    enhancer
);

export default store;