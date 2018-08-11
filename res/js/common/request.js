/**
 * The external dependencies.
 */
import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import {
    initRequest,
    endRequest,
    endRequestWithError
} from '../store/requests/actions';

export default function*(options) {
    const {
        endpoint,
        method = 'get',
        params = [],
        requestAction,
        receiveAction,
        receiveActionParams = [],
        successMessage = ''
    } = options;

    try {
        // Start tracking of the network request.
        yield put(initRequest(requestAction.type));

        const { data } = yield call([axios, method], [ endpoint, ...params]);

        // Update the store with the results.
        yield put(receiveAction(data, ...receiveActionParams));

        // Stop tracking of the network request.
        yield put(endRequest(requestAction.type, successMessage));
    } catch (e) {
        // Stop tracking of the network request and store the error.
        yield put(endRequestWithError(requestAction.type, e));
    }
}
