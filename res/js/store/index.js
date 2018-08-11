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
 * Combine imported reducers
 */
const reducer = combineReducers({});

/**
 * Create Sage Midddleware
 */
const saga = createSagaMiddleware();
const enhancer = applyMiddleware(saga);

/**
 * Export created store
 */
export default createStore(
    reducer,
    {},
    enhancer
);