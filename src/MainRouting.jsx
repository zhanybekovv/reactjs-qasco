import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Employee } from './Employee';
import { Dashboard } from './Dashboard';
import { ProtectedRoute } from './ProtectedRoute';
import {Settings} from './Settings'
import { UserCard } from './UserCard';
export const MainRouting = () => {
	const authorized = localStorage.getItem('authorized');
	const [ loggedIn, setLoggedIn ] = useState(authorized);
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					{authorized ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
				</Route>
                <Route exact path="/login">
                    {authorized ? <Redirect to="/dashboard" /> : <Login/>}
                </Route>
				<ProtectedRoute exact path="/dashboard" component={Dashboard} />
				<ProtectedRoute exact path="/employee" component={Employee} />
				<ProtectedRoute exact path="/settings" component={Settings}/>
				<ProtectedRoute path="/employee/:id" component={UserCard}/>
			</Switch>
		</Router>
	);
};
