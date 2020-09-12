import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Login } from './Login';

export const App = () => {
	return (
		<div>
            <div className="d-flex justify-content-center">
			    <Login />
            </div>
		</div>
	);
};
