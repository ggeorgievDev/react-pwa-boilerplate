/**
 * The external dependencies.
 */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { assoc } from 'ramda';

/**
 * The internal dependencies.
 */
import {
    initRequest,
    endRequest,
    endRequestWithError,
    resetRequests
} from './actions';

/**
 * Track the app requests
 *
 * @type   {Function}
 * @return {Object}
 */
export const items = handleActions({
    [initRequest]: (state, { payload: { id } }) => assoc(id, {
        running: true,
        error: null,
        success: null,
    }, state),
    [endRequest]: (state, { payload: { id, successMessage = '' } }) => assoc(id, {
        running: false,
        error: null,
        success: successMessage,
    }, state),
    [endRequestWithError]: (state, { payload: { id, error } }) => assoc(id, {
        running: false,
        error,
        success: null,
    }, state),
    [resetRequests]: (state, { payload }) => ({}),
}, {});

export default combineReducers({
    items
});
