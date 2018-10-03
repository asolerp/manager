import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

export default class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBfoobwvdZy-kWkeqxdfczodBvI41VnpLU',
      authDomain: 'manager-4d1ad.firebaseapp.com',
      databaseURL: 'https://manager-4d1ad.firebaseio.com',
      projectId: 'manager-4d1ad',
      storageBucket: '',
      messagingSenderId: '392325816435'
    };
    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
        <Provider store={ store }>
          <Router/>
      </Provider>
    );
  }
}