/**
 * The external dependencies.
 */
import '../sass/main.scss';
import React from 'react';
import { render } from 'react-dom';

/**
 * The internal dependencies.
 */
import App from './containers/App';

render(<App />), document.getElementById('app');