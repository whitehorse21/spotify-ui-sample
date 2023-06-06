import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './store/rootReducer';
import { Provider } from 'react-redux';

import './assets/styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);