import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { LoginStack, DrawerRouter } from './Router';
import MyProjects from './components/MyProjects';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
       apiKey: "AIzaSyBOBEwUwDpvMNcvXtQQYkOtv8PIyzSPZgs",
      authDomain: "react-narive-rc.firebaseapp.com",
      databaseURL: "https://react-narive-rc.firebaseio.com",
      projectId: "react-narive-rc",
      storageBucket: "react-narive-rc.appspot.com",
      messagingSenderId: "562957536885"
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


