import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { LoginStack, DrawerRouter } from './Router';
import MyProjects from './components/MyProjects';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
       apiKey: "AIzaSyAQNi74LFH7kqNg5q9yThjbD5qPX8amXL8",
       authDomain: "remoteclass-fd52f.firebaseapp.com",
       databaseURL: "https://remoteclass-fd52f.firebaseio.com",
       projectId: "remoteclass-fd52f",
       storageBucket: "remoteclass-fd52f.appspot.com",
       messagingSenderId: "423245665647"
    });
  }

  render() {
    return (
      //<MyProjects/>
      <DrawerRouter />
      //<LoginStack />
    );
  }
}


export default App;


