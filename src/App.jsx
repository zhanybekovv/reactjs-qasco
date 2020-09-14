import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Login } from './Login';
import {MainRouting} from './MainRouting'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {rootReducer} from './store/reducers'
const store = createStore(rootReducer, applyMiddleware( thunk))

export const App = () => {
	return (
		<Provider store={store}>
            <MainRouting/>
		</Provider>
	);
};
