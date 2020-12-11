import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { login } from './actions/auth';

export const history = createBrowserHistory();

const store = configureStore(); 

firebase.auth().onAuthStateChanged(user => {
  if(user) {  
    console.log('login');
    const uid = store.getState().auth.userInfo.uid
    // firebase.auth().signOut()
    store.dispatch(login(uid));
  } else {
    console.log('logout');
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>   
      <Provider store={store}>
        <App />
      </Provider>  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
