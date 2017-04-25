import React, { Component } from 'react';
import { 
  AppRegistry,
  View 
} from 'react-native';
//import Logic3 from './src/components/Logic3.js'
//import Logic from './src/components/Logic.js'
//import Create from './src/components/Create.js'
import App from './src/App'


const RC = () => { 
  const { container } = styles;
   return( 
    <View style={ container } > 
      <Create/>
    </View>
   );
};

const styles = {
  container: {
    flex: 1,
  }
};

AppRegistry.registerComponent('RC', () => App);






