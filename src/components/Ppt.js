import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tile, List, ListItem, Button, Avatar } from 'react-native-elements';

// Make a component
class Ppt extends Component {
  goToGoPpt1 = () => {
      this.props.navigation.navigate('GoPpt1', {  });
   };
  goToGoPpt2 = () => {
      this.props.navigation.navigate('GoPpt2', {  });
   };

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
              <Text style={styles.bigtext } onPress={() => this.goToGoPpt1()}>音樂賞析</Text>
              <Text style={styles.midtext}  onPress={() => this.goToGoPpt1()}>紀美仰</Text>
              <Text style={styles.smalltext} onPress={() => this.goToGoPpt1()}>第1-2節課(120分鐘)</Text>
              
            </View>
           <Image source={require('../img/ios7-arrow-forward.png')} style={styles.image_icon}/>
          </View>

          <View style={MyPPt} >
            
            <Avatar
              onPress={() => this.goToGoPpt()}
              width={66}
              height={66}
              source={require('../Class_img/Bitmap.png')}
              activeOpacity={0.7}
              containerStyle={{ position: 'absolute', top: 11, left: 11 }}//圖片底下的底圖移動
            />
            <View style={styles.alltext}>
              <Text style={styles.bigtext} onPress={() => this.goToGoPpt2()}>跨平台APP設計</Text>
              <Text style={styles.midtext}   onPress={() => this.goToGoPpt2()}>俞齊山</Text>
              <Text style={styles.smalltext} onPress={() => this.goToGoPpt2()}>第2-4節課(180分鐘)</Text>
              
            </View>
            <Image source={require('../img/ios7-arrow-forward.png')}  style={styles.image_icon} />
          </View>



           <View style={MyPPt}>
            <Avatar
              width={66}
              height={66}
              source={require('../Class_img/C.png')}
              activeOpacity={0.7}
              containerStyle={{ position: 'absolute', top: 11, left: 11 }}//圖片底下的底圖移動
            />
            <View style={styles.alltext}>
              <Text style={styles.bigtext} >程式設計(上)</Text>
              <Text style={styles.midtext}>王學武</Text>
              <Text style={styles.smalltext}>第2-4節課(180分鐘)</Text>
              
            </View>
           <Image source={require('../img/ios7-arrow-forward.png')} style={styles.image_icon}/>
          </View>

          
           <View style={MyPPt}>
            <Avatar
              width={66}
              height={66}
              source={require('../Class_img/Ai.png')}
              activeOpacity={0.7}
              containerStyle={{ position: 'absolute', top: 11, left: 11 }}//圖片底下的底圖移動
            />
            <View style={styles.alltext}>
              <Text style={styles.bigtext} >使用者經驗設計</Text>
              <Text style={styles.midtext}>許一珍</Text>
              <Text style={styles.smalltext}>第2-4節課(180分鐘)</Text>
              
            </View>
           <Image source={require('../img/ios7-arrow-forward.png')} style={styles.image_icon}/>
          </View>
           <View style={MyPPt}>
            <Avatar
              width={66}
              height={66}
              source={require('../Class_img/network.png')}
              activeOpacity={0.7}
              containerStyle={{ position: 'absolute', top: 11, left: 11 }}//圖片底下的底圖移動
            />
            <View style={styles.alltext}>
              <Text style={styles.bigtext} >網站前端設計與開發</Text>
              <Text style={styles.midtext}>俞齊山</Text>
              <Text style={styles.smalltext}>第2-4節課(180分鐘)</Text>
              
            </View>
           <Image source={require('../img/ios7-arrow-forward.png')} style={styles.image_icon}/>
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

export default Ppt;
