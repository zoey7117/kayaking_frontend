import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import tripsReducer from './reducers/tripsReducer';
import commentsReducer from './reducers/commentsReducer';
import dictionaryReducer from './reducers/dictionaryReducer';
import { BrowserRouter as Router } from 'react-router-dom';

const reducer = combineReducers({
	trips: tripsReducer,
	comments: commentsReducer,
	words: dictionaryReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
