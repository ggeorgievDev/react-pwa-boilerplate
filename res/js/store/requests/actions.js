/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Init request tracking
 *
 * @type   {Function}
 * @param  {String|Function} action
 * @return {Object}
 */
export const initRequest = createAction('REQUESTS_INIT_REQUEST', action => ({
    id: action.toString(),
}));

/**
 * End Request
 *
 * @type   {Function}
 * @param  {String|Function} action
 * @return {Object}
 */
export const endRequest = createAction('REQUESTS_END_REQUEST', (action, successMessage = '') => ({
    id: action.toString(),
    successMessage
}));

/**
 * End request with an error
 *
 * @type   {Function}
 * @param  {String|Function} action
 * @param  {String|Object}   error
 * @return {Object}
 */
export const endRequestWithError = createAction('REQUESTS_END_REQUEST_WITH_ERROR', (action, error = '') => ({
    id: action.toString(),
    error: error.toString(),
}));

/**
 * Reset tracked requests
 *
 * @type   {Function}
 * @return {Object}
 */
export const resetRequests = createAction('REQUESTS_RESET');