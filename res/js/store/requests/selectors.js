/**
 * The external dependencies.
 */
import { pathOr } from 'ramda'

/**
 * Check request status
 *
 * @param  {Object}           state
 * @param  {String|Function}  request
 * @return {Boolean}
 */
export const isRequestRunning = (state, request) => pathOr(
    false,
    ['requests', 'items', request.toString(), 'running'],
    state
);

/**
 * Get request error response
 *
 * @param  {Object}           state
 * @param  {String|Function}  request
 * @return {Object|Null}
 */
export const getRequestError = (state, request) => pathOr(
    null,
    ['requests', 'items', request.toString(), 'error'],
    state
);

/**
 * Get request reponse
 *
 * @param  {Object}           state
 * @param  {String|Function}  request
 * @return {Object|Null}
 */
export const getRequestResponse = (state, request) => pathOr(
    null,
    ['requests', 'items', request.toString(), 'response'],
    state
);
