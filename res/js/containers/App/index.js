/**
 * The external dependencies.
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * The internal dependencies.
 */
import Router from '../Router';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Router />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;