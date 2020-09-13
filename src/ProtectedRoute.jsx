import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	const authorized = localStorage.getItem('authorized');

	return (
    <div>
      {authorized ? <Route {...rest} render={(props) => <Component {...rest} {...props} />} /> : <Redirect to="/" />}
    </div>
	)
};
