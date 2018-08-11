/**
 * The external dependencies.
 */
import '../sass/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * The internal dependencies.
 */
import store from './store';
import App from './containers/App';

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('app'));