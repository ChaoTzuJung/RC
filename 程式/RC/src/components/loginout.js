import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';

import { Button } from 'react-native-elements'
import  Login2  from 'Login2';


 
class loginout extends Component{
  
  render(){
  const { container, mask, background, border, image_background, linearGradient, image_icon, TextStyle, ButtonStyle ,InputText, LoginButton, small_icon, BottonText1, BottonText2 } = styles;
    return(
      <Navigator intialRoute = {{id: 'Login2'}} renderScene = {this.navgatorRenderScene}/>   
    );
  }
  navgatorRenderScene(router, navigator){
      _navigator = navigator;
      switch(router.id){
          case 'Login2':
            return(<Logic2 navigator = {navigator} /> );
      }
  }

};

const styles = {
 
};

export default loginout;