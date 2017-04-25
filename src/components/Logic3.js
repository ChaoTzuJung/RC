import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements'
import FBSDK,{LoginManager} from 'react-native-fbsdk';
import { Linking } from 'react-native';


 
class Logic extends Component{
  constructor(props) {
    super(props);
    this.state = {
      keyboardType: 'default' // this is important
    };
  }
  _fbAuth(){
  LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
    if(result.isCancelled){
      console.log('Login isCancelled');
    }
    else{
      console.log('Login success: '+ result.grantedPermissions);
      Linking.openURL('src/components/Register.js');
    }
  }, function(error){
      console.log('An error occured: '+ error);
  }) 
}

  render(){
    const { container, mask, background, border, image_background, linearGradient, image_icon, TextStyle, ButtonStyle ,InputText, LoginButton, small_icon, BottonText1, BottonText2 } = styles;
    return(
      <ScrollView>
      <View style = {container}>
          
          <Image 
            source={require('../img/png/RC-icon@1x.png')} 
            style={image_icon} 
          />

          <Text style = {TextStyle}>
           REMOTE    CLASS
          </Text>
          
          <View style = {InputText}>
            <Image 
            source={require('../img/png/ios-person-outline-white.png')} 
            style={small_icon} 
            />
            <TextInput
            //value={this.state.username}
            //onChangeText={(text) => this.setState({username: text})}
            style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0}}
            placeholder={'Username'}
            placeholderStyle={{ fontFamily: "Arial", Color: 'white' }}
            maxLength={12}
            multiline={false}
            placeholderTextColor="white"
            //password={true}
            //keyboardType="number-pad"
            />
          </View> 
          <View style = {InputText}>
            <Image 
            source={require('../img/png/ios-unlocked-outline.png')} 
            style={small_icon}  
            />
             <TextInput
             style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0}}
            //value={this.state.username}
            //onChangeText={(text) => this.setState({username: text})}
            placeholder={'Password'}
            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
            maxLength={12}
            multiline={false}
            placeholderTextColor="white"
            password={true}
            //keyboardType="number-pad"
            />
           
          </View>

          <View style = {LoginButton}>
            <Button
              onPress={this._fbAuth}
              raised
              buttonStyle={{backgroundColor: '#35C4A4', borderRadius: 100,width: 335,height: 48,}}
              textStyle={{textAlign: 'center'}} 
              title='Get Started' />
          </View>
          <Text style = {BottonText1}>Create Acount?</Text>
          <Text style = {BottonText2}>Need Help?</Text> 
          <LinearGradient 
          colors={['#4BE4C2', 'rgba(151,220,190,0.5)']}
          start={{x: 0.01, y: 0.01}} end={{x: 0.4, y: 0.52}}
          style={linearGradient}>     
          </LinearGradient>

        <View style={[mask]}> 
        </View>

        <Image 
            source={require('../img/png/background.png')} 
            style={image_background} 
        />

      </View>
      </ScrollView>
    );
  }
};

const styles = {
  border:{
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red'
  },
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    position: 'relative',
  },
  mask:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 375,
    height: 667,
    //opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1

  },
  image_background:{
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0
  },
  image_icon:{
    position: 'absolute',
    top: 90,
    left: 102,
    zIndex: 3
  },
  linearGradient: {
    width: 375,
    height: 667,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    //fontFamily: 'Roboto',
    zIndex: 3,
    top: 235,
    left: 105,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  ButtonStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4
  },
  InputText: {
    borderRadius: 100,
    zIndex: 5,
    width: 335,
    height: 48,
    top: 363,
    left: 20,
    marginTop:10,
    backgroundColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'flex-start',
    flexDirection:'row',
    alignItems: 'center',
    //flexWrap:'wrap'
  },
  LoginButton: { 
    //borderRadius: 100,
    zIndex: 5,
    width: 335,
    height: 48,
    top: 363,
    left: 20,
    marginTop:35,
    backgroundColor: 'rgba(53,196,164,0)',
    justifyContent: 'center',
    flexDirection:'row',
    //flexWrap:'wrap',
    //alignItems: 'center',
  },
  small_icon:{
    //flex:1,
    flexDirection:'column',
    zIndex: 6,
    //borderWidth: 1,
    //borderStyle: 'solid',
    //borderColor: 'red',
    marginLeft: 10,
    marginRight:10,
  },
  BottonText1:{
    //flex:1,
    //flexDirection:'column',
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    zIndex: 7,
    position: 'absolute',
    top: 595,
    left: 40,
    backgroundColor: 'rgba(0,0,0,0)',
  },  
    BottonText2:{
    //flex:1,
    //flexDirection:'column',
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    zIndex: 7,
    position: 'absolute',
    top: 595,
    left: 256,
    backgroundColor: 'rgba(0,0,0,0)',
  }
};

export default Logic;