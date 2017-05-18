import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tile, List, ListItem, Button, Avatar } from 'react-native-elements';

// Make a component
class GoPpt2 extends Component {


  render() {
    const { TextStyle, TextStyle1, AddButton, container, block, MyPPt } = styles;
    return (
      <ScrollView>
        <View style={container}>

          <View style={MyPPt}>
            <Avatar
              width={66}
              height={66}
              source={require('../Class_img/music.png')}
              activeOpacity={0.7}
              containerStyle={{ position: 'absolute', top: 11, left: 11 }}//圖片底下的底圖移動
            />
            <View style={styles.alltext}>
              <Text style={styles.bigtext} >wk1.pptx</Text>
              <Text style={styles.midtext}>俞齊山</Text>
              <Text style={styles.smalltext}>第2-4節課(180分鐘)</Text>
              
            </View>

          </View>
          <View style={MyPPt}>
            <Avatar
              width={66}
              height={66}
              source={require('../Class_img/Bitmap.png')}
              activeOpacity={0.7}
              containerStyle={{ position: 'absolute', top: 11, left: 11 }}//圖片底下的底圖移動
            />
            <View style={styles.alltext}>
              <Text style={styles.bigtext} >wk2.pptx</Text>
              <Text style={styles.midtext}>俞齊山</Text>
              <Text style={styles.smalltext}>第2-4節課(180分鐘)</Text>
              
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
  },
  image_icon:{
    width:30,
    height:30,
    marginTop: 30,
    marginRight: -320,

  }


  
}

export default GoPpt2;
