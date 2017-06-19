import React, { Component } from 'react';
import { ScrollView ,View ,Image ,Text ,TouchableHightLight, Modal, TextInput,Dimensions, Animated  } from 'react-native';
import { Tile, List, ListItem, Button, Icon } from 'react-native-elements';
//import Card from '../components/Card';
class ClassScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style = {styles.container}>
        
      </ScrollView>
    );
  }
}

const styles = {
    container:{
        flex: 1,
        backgroundColor:'#F3F4F6'

    },
   image_icon:{
    width:269,
    height:300,
    position: 'absolute',
    top: 70,
    left: 53,
    zIndex: 3
  },
  TextStyle:{
    position: 'absolute',
    top: 400,
    left: 113,
    color:'#B7BBBF',
    fontSize:18,
    //marginTop:36,
    //marginLeft:113
  },
  TextStyle1:{
    position: 'absolute',
    top: 425,
    left: 113,
    color:'#B7BBBF',
    fontSize:18,
    //marginTop:36,
    //marginLeft:113
  },
  AddButton: { 
    //borderRadius: 100,
    //zIndex: 5,
    width: 200,
    height: 44,
    top: 486,
    left: 88,
    

    justifyContent: 'center',
    flexDirection:'row',

  },
  InputText: {
    borderRadius: 50,
    zIndex: 5,
    width: 300,
    height: 30,
    marginLeft:38,
    marginTop:42,
    backgroundColor: 'rgba(255,255,255,1)',
    justifyContent: 'flex-start',
    flexDirection:'row',
    alignItems: 'center',

  },
  photogrid:{
       flex:1,
       padding: 2,
       flexDirection:'row',
       flexWrap: 'wrap'
    },
    imagewrap:{
      padding: 2,
      height: 120,
      width: (Dimensions.get('window').width / 2) - 2,
    }
}
export default ClassScreen;