import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap";
import {MainRouting} from './components/MainRouting'
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
