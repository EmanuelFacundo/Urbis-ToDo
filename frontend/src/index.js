import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'


import './index.css';
import reportWebVitals from './reportWebVitals';
import reducers from './main/reducers'
import Routes from './main/Routes';
import Menu from './components/menu/Menu';

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)


ReactDOM.render(
  <Provider store={store}>
    <Menu />
    <Routes/>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();