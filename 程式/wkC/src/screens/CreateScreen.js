import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage,Dimensions, Animated } from 'react-native';    
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon, FormValidationMessage } from 'react-native-elements'
import { Facebook, Components } from 'expo';
import * as firebase from 'firebase';
import Hr from 'react-native-hr';
//設定螢幕大小配合手機大小，const是全域宣告，this position是物件
const {width, height} = Dimensions.get('window')
class CreateScreen extends Component {
    constructor(props) {
        super(props);
    }
    /*返回鍵的叉叉是寫在Router.js的headerBar內*/
    goToBack = (props) => {
        this.props.navigation.navigate('LoginScreen');
   };
    state = {
        username: null,
        email: null,
        password: null,
        error: ' ',
        loading: false,
    };
    
    facebookLogin = async () => {
    console.log('Testing token....');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('Already having a token...');
      this.setState({ token });

    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };

    doFacebookLogin = async () => {
    console.log('Testing token....');
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '397148994004190',
      {
        permissions: ['public_profile'],
        behavior: 'web'
      });

    if (type === 'cancel') {
      console.log('Login Fail!!');
      return;
    }

    await AsyncStorage.setItem('fb_token', token);
    this.setState({ token });
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    this.setState({ status: `Hello ${(await response.json()).name}` });
    console.log(response);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`currentUser = ${currentUser.uid}`);
      this.props.navigation.navigate('UserScreen');
    } catch (err) {
      this.props.navigation.navigate('UserScreen');
    }
  };

    onCreateUser = async () => {
    const { email, password, } = this.state;
    try { 
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.props.navigation.navigate('UserScreen');
    } catch (err) {
        this.setState({
            username: '',
            email: '',
            password: '',
            error: err.message,
            loading: false,
        });
      }
    }
    renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{marginTop: height*0.045}} />
    }
    return (
      <View style={styles.LoginButton}>
        <Button
            onPress={this.onCreateUser}
            raised
            buttonStyle={{ backgroundColor: 'rgba(0,0,0,0)', borderRadius: 100, borderColor: 'white', borderWidth: 1, width: width-40, height: height*0.072 }}
            textStyle={{ textAlign: 'center' }}
            title='Continue' />
      </View>
    );
  }
   render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.TextStyle}> {/*marginTop因為relative所以下的數值是針對父元件container*/}
                    CREATE ACCOUNT
                </Text>
                <FormValidationMessage style={{ zIndex: 6,backgroundColor:'rgba(0,0,0,0)',height: height*0.15}} >{this.state.error}</FormValidationMessage>
                <View style={{marginTop: height*0.0375, zIndex: 6, alignItems: 'center'}}>{/*marginTop因為relative所以下的數值是針對父元件container，不是CREATE ACCOUNT*/}
                    <View style={styles.InputText}>
                        <Image source={require('../img/png/ios-person-outline-white.png')} style={styles.small_icon}/>
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'Username'}
                            placeholderStyle={{ fontFamily: "Arial", Color: 'white' }}
                            maxLength={30}
                            multiline={false}
                            placeholderTextColor="white"
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={this.state.username}
                            onChangeText = {username => this.setState({ username })}
                        />
                    </View>
                    <View style={styles.InputText}>
                        <Image
                            source={require('../img/png/ios-email-outline_white@1x.png')}
                            style={styles.small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'Email'}
                            placeholderStyle={{ fontFamily: "Arial", Color: 'white' }}
                            maxLength={30}
                            multiline={false}
                            placeholderTextColor="white"
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='password'
                            value={this.state.email} 
                            onChangeText = {email => this.setState({ email })}  
                        />
                    </View>
                    <View style={styles.InputText}>
                        <Image
                            source={require('../img/png/ios-unlocked-outline.png')}
                            style={styles.small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 }}
                            placeholder={'Password'}
                            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
                            maxLength={30}
                            multiline={false}
                            placeholderTextColor="white"
                            password={true}
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='password'
                            value={this.state.password}
                            onChangeText = {password => this.setState({ password })}    
                        />
                    </View>
                    {this.renderButton()}
                    
                    <Hr lineColor='white' text='or sign up with' lineStyle={{backgroundColor:'rgba(255,255,255,1)',marginTop: 15}} textStyle={{backgroundColor:'rgba(0,0,0,0)',color: "white", fontSize: 14,fontStyle:'italic',textAlign: 'center',marginTop:15}}/>
                    <View style={{ flexDirection:'row', justifyContent:'space-around', alignItems: 'space-around',width:width ,height: 30, marginTop: height*0.0375}} >
                        <TouchableOpacity>
                            <View  style={{ zIndex: 6, fontSize: 20, position: 'relative',backgroundColor: '#DD4B39',width: 115,height: 30, borderRadius: 3,flexDirection:'row', alignItems: 'center', marginLeft: width*0.12}}>
                                <Image source={require('../img/png/social-googleplus-outline.png')}  style={{width:22 , height: 22, left: 4, position: 'absolute'}}/>
                                {/*直線*/}
                                <View style={{backgroundColor:'rgba(255,255,255,0.5)',width: 0.5,height:23,marginLeft: 30}}></View>
                                <Text style={{fontSize: 14, color: 'white', marginLeft: 17}}>Google</Text>
                            </View> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.facebookLogin}>
                            <View  style={{ zIndex: 6, fontSize: 20, position: 'relative',backgroundColor: '#475993',width: 115, height: 30, borderRadius: 3, flexDirection:'row', alignItems: 'center',marginRight: width*0.12 }}>
                                <Image source={require('../img/png/social-facebook.png')} style={{ width:22 , height: 22, left: 4,position: 'absolute'}}/>
                                {/*直線*/}
                                <View style={{backgroundColor:'rgba(255,255,255,0.5)',width: 0.5,height:23, marginLeft: 30}}></View>
                                <Text style={{fontSize: 14, color: 'white', marginLeft: 11}}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
               
                    <Components.LinearGradient
                        colors={['rgba(75,228,169,1)', 'rgba(97,226,173,0.86)', 'rgba(151,220,182,0.5)']}
                        start={{ x: 0.016, y: 0.0164 }} end={{ x: 0.965, y: 0.95 }}
                        locations={[0.15, 0.3, 0.9]}
                        style={styles.linearGradient}>
                    </Components.LinearGradient>

                    <Image
                        source={require('../img/png/background_blur.png')}
                        style={styles.image_background}
                    />

                </View>
            </ScrollView>
        );
    }
};

const styles = {
    container: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    mask: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
    image_background: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
    },
    linearGradient: {
        width: width,
        height: height,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
    },
        TextStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        marginTop: height*0.12,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        zIndex: 6,
        textAlign: 'center',
    },
    ButtonStyle: {
        zIndex: 6,
    },
    InputText: {
        borderRadius: 100,
        zIndex: 5,
        width: width-40,
        height: height*0.072,
        marginTop: height*0.0375,
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    LoginButton: {
        marginTop: height*0.0525,
        marginButton: height*0.015
    },
    small_icon: {
        flexDirection: 'column',
        zIndex: 6,
        marginLeft: height*0.015,
        marginRight: height*0.015,
    },

};

export default CreateScreen;