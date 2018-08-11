/**
 * The external dependancies
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * The internal dependancies
 */
import Home from '../../pages/Home';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home}/>
	</Switch>
);

export default Router;