import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Employee } from './Employee';
import { Dashboard } from './Dashboard';
import { ProtectedRoute } from './ProtectedRoute';

export const MainRouting = () => {
	const authorized = localStorage.getItem('authorized');
	const [ loggedIn, setLoggedIn ] = useState(authorized);
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					{authorized ? <Redirect to="/dashboard" /> : <Login />}
				</Route>
				<ProtectedRoute exact path="/dashboard" component={Dashboard} />
				<ProtectedRoute exact path="/employee" component={Employee} />
			</Switch>
		</Router>
	);
};
