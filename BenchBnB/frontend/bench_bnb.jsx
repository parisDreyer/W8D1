import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import configureStore from './store/store';
import * as SessionUtils from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.SessionUtils = SessionUtils;
  const root = document.getElementById('root');
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

});
