import React, { Component } from 'react';
import { ScrollView,View,Image,Text,TextInput   } from 'react-native';
import { Tile, List, ListItem,Button,Avatar } from 'react-native-elements';

// Make a component
class Setting extends Component {


  render() {
    const {TextStyle,AvatarStyle,AddButton,container,InputText,small_icon,BottonText1,BottonText2} = styles;
    return (
      <ScrollView>
 
        <View style = {container}>
          <Avatar
            width={102}
            height={102}
            rounded       
            source={require('../img/profile.jpg')}
            activeOpacity={0.7}
            containerStyle={{position: 'absolute', top: 20, left: 137}}//圖片底下的底圖移動
            //avatarStyle={{position: 'absolute', top: 20, left: 137}}//圖片移動
            //overlayContainerStyle={{ ShadowColor:'#000',ShadowOffset:{width:0,height:2}}}//圖片底下的底圖改色 
          />
           <View style={InputText}>
                        <Image
                            source={require('../img/png/ios-person-outline-white.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'Username'}
                            placeholderStyle={{ fontFamily: "Arial", Color: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                        />
                    </View>


                    <View style={InputText}>
                        <Image
                            source={require('../img/png/ios-email-outline_white@1x.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'Email'}
                            placeholderStyle={{ fontFamily: "Arial", Color: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={InputText}>
                        <Image
                            source={require('../img/png/ios-unlocked-outline.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'Password'}
                            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            
                        />
                     </View>
                      <View style={InputText}>
                        <Image
                            source={require('../img/StudentName.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'Studentname'}
                            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            password={true}
                        />
                     </View>   
                      <View style={InputText}>
                        <Image
                            source={require('../img/schoolname.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'Schoolname'}
                            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            password={true}
                        />
                     </View>   
                      <View style={InputText}>
                        <Image
                            source={require('../img/studentID.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'StudentID'}
                            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            password={true}
                        />
                     </View>
                     <Text style = {BottonText1}>SAVE</Text>
                     <Text style = {BottonText2}>EDIT</Text>

        </View>
      </ScrollView>
    );
  }
}
const styles = {
    container:{
        backgroundColor:'#3CCEB0',
        flex: 1,
        width: 375,
        height: 667,
    },
    AvatarStyle:{
     ShadowColor:'#000',
     ShadowOffset:{width:0,height:2}
    },
        InputText: {
        borderRadius: 100,
        zIndex: 5,
        width: 335,
        height: 48,
        top: 115,
        left: 20,
        marginTop: 25,
        backgroundColor: '#00A380',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',

    },
        small_icon: {
        flexDirection: 'column',
        zIndex: 6,
        marginLeft: 10,
        marginRight: 10,
    },
    BottonText1:{
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    position: 'absolute',
    top: 565,
    left: 18,
    //ShadowColor:'#000',
    //ShadowOffset:{width:0,height:2}
   
  }, 
BottonText2:{
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    position: 'absolute',
    top: 565,
    right: 18,
    //ShadowColor:'#000',
    //ShadowOffset:{width:0,height:2}
  },  
  

 
}

export default Setting;
