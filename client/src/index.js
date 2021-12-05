import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './store';

import App from './App';

const middleware = [thunk];

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
