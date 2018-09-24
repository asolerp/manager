import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

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
    return (
        <Provider store={ createStore(reducers)}>
          <LoginForm/>
      </Provider>
    );
  }
}