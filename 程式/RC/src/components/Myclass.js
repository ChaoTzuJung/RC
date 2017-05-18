import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tile, List, ListItem, Button, Avatar } from 'react-native-elements';

// Make a component
class Myclass extends Component {


  render() {
    const { TextStyle, TextStyle1, AddButton, container, block, MyPPt } = styles;
    return (
      <ScrollView>
        <View style={container}>
          <View style={block} >
          </View>

          <View style={MyPPt}>
            <Avatar
              width={66}
              height={66}
              source={require('../img/music.png')}
              activeOpacity={0.7}
              containerStyle={{ position: 'absolute', top: 11, left: 11 }}//圖片底下的底圖移動
            />
            <View style={styles.alltext}>
              <Text style={styles.bigtext} >認識和弦.pptx</Text>
              <Text style={styles.midtext}>紀美仰</Text>
              <Text style={styles.smalltext}>第1-2節課(120分鐘)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = {
  container: {
    backgroundColor: '#F3F4F6',
    width: 375,
    height: 667,
  },
  block: {
    backgroundColor: '#3CCEB0',
    width: 375,
    height: 60,
  },
  MyPPt: {
    backgroundColor: '#fff',
    width: 375,
    height: 88,
    flexDirection: 'row',
    justifyContent :'space-around'
  },
  bigtext:{
    color:'#000',
    fontSize:18,
    fontWeight:'700',
    marginTop: 11,
    marginLeft:0,
    paddingLeft:0,

  },
  midtext:{
  color:'#000',
  fontSize:14,
  fontWeight:'400',
  marginTop: 3,
   marginLeft:0,
  paddingLeft:0,
  
  },
  smalltext:{
    color:'#9B9B9B',
    fontSize:10,
    fontWeight:'400',
    marginTop: 3,
    marginLeft:0,
    paddingLeft:0,
  },
  alltext:{
     position: 'absolute',left:90  
  }


  
}

export default Myclass;
