import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, ScrollView, TextInput, Text, Image,TouchableOpacity,Dimensions, Animated} from 'react-native';  
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Confirm from '../components/Confirm';
import Expo,{ Facebook, Components,} from 'expo';
import Hr from 'react-native-hr';

//設定螢幕大小配合手機大小，const是全域宣告，this position是物件
const {width, height} = Dimensions.get('window')
// Make a component
class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
    goToCreateStack= () => {
      this.props.navigation.navigate('CreateScreen', {  });
  };
    goToTab = () => {
      this.props.navigation.navigate('TabRouter');
   };
  state = {
    username: null,
    password: null,
    error: ' ',
    loading: false,
    // UI toggle switch
    showModal: false,
    showSpinner: false,
    // tokens
    FB_token: null,
    //google_idToken: null,
    //google_accessToken: null,
    // login status
    status: 'Not Login...',
  };

  googleLogin = async () => {
    console.log('trying login Google ...');
    let result = await Expo.Google.logInAsync({
      androidClientId: '619517647764-hnbmkmb2ips6mbcgknk7r2lfsl2v6q7s.apps.googleusercontent.com',
      iosClientId: '562957536885-003t5pq822514uhtce4m4imp3qh1l4pf.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    let google_idToken = 0, google_accessToken = 0;
    console.log('waiting for result ...');
    console.log(`Google Login ${result.type}`);
    if (result.type === 'success') {
      google_idToken = result.idToken;
      google_accessToken = result.accessToken;
    } else {
      return;
    }
// Save Google Token locally
  console.log(`google_idToken = ${google_idToken}, google_accessToken = ${google_accessToken}`);
  await AsyncStorage.setItem('google_idToken', google_idToken);
  await AsyncStorage.setItem('google_accessToken', google_accessToken);
  await this.setState({ google_accessToken, google_idToken });

  // Firebase Google Token Login
  
    const credential = firebase.auth.GoogleAuthProvider.credential(google_idToken, google_accessToken);
    console.log(`credential=${credential}`);
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`Google currentUser = ${currentUser.uid}`);
      this.props.navigation.navigate('UserScreen');
    } catch (e2) {
      console.log('Firebase Google login fail ...');
      console.log(`error code is ${e2.code}`);
      console.log(`error message = ${e2.message}`);
      await AsyncStorage.removeItem('google_idToken');
      await AsyncStorage.removeItem('google_accessToken');
      return;
    }
 } 
 
  facebookLogin = async () => {
    console.log('Testing token....');
    let FB_token = await AsyncStorage.getItem('fb_token');

    if (FB_token) {
      console.log('Already having a token...');
      this.setState({ FB_token });

    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };

    doFacebookLogin = async () => {
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
    let FB_token = token; 
    await AsyncStorage.setItem('fb_token', FB_token);
    this.setState({ FB_token });
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    this.setState({ status: `Hello ${(await response.json()).name}` });
    console.log(response);

    const credential = firebase.auth.FacebookAuthProvider.credential(FB_token);
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


onSignIn = async () => {
    const { username, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
      this.props.navigation.navigate('UserScreen');
    } catch (err1) {
      this.setState({ showModal: true });//可以改成錯誤的訊息
    }
  }

onCreateUser = async () => {
    const { username, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(username, password);
      this.setState({ showModal: false });
      console.log('go')
      this.props.navigation.navigate('CreateScreen');
    } catch (err) {
      this.props.navigation.navigate('CreateScreen');
      this.setState({
        username: '',
        password: '',
        error: err.message,
        loading: false,
        showModal: false
      });
    }
  }

  onCLoseModal = () => {
    this.setState({
      username: '',
      password: '',
      error: '',
      loading: false,
      showModal: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{marginTop: height*0.0375,}} />;
    }
    return (
      <Button
        onPress={this.onSignIn}
        raised
        buttonStyle={styles.LoginButton}
        textStyle={{textAlign: 'center'}} 
        title='Get Started' />
    );
  }

  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
    
  }
  
  render() {
    return (
      <ScrollView>
        <View style = {styles.container}>
            <Image source={require('../img/png/RC-icon@1x.png')} style={styles.image_icon} />
            <Text style = {styles.TextStyle}> REMOTE    CLASS</Text>
            {/*用一個大的View包住2個textInput來控制輸入框的樣式，且textInput規定外面必須放兩層View*/}        
            <View style = {styles.formStyle}>
            {/*第2個View是TextInput外觀且內包住icon與打字區*/}{/*justifyContent與flexDirection用來讓icon與inputtext水平*/}{/*alignItems讓原本偏上的icon往下置中*/}
            <View style = {{width: width-40,height: height*0.072, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius:25,fontSize: 20,justifyContent: 'flex-start',flexDirection:'row',alignItems:'center',}}>
              <Image source={require('../img/png/ios-person-outline-white.png')} style={styles.small_icon}/>             
              <TextInput            
                style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0,}}
                placeholder={'Username'}
                placeholderStyle={{ fontFamily: "Arial", color: 'red'}}
                maxLength={30}
                multiline={false}
                placeholderTextColor="white"
                value={this.state.username}
                onChangeText={username => this.setState({ username })}  
              /> 
            </View>   
            <View style = {{width: width-40,height: height*0.072, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius:25,fontSize: 20,justifyContent: 'flex-start',flexDirection:'row',alignItems:'center',marginTop: height*0.015,}}> 
              <Image source={require('../img/png/ios-unlocked-outline.png')} style={styles.small_icon}/>
              <TextInput
                style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0,}}
                placeholder={'Password'}
                placeholderStyle={{ fontFamily: "Arial", color: 'red',}}
                maxLength={12}
                multiline={false}
                placeholderTextColor="white"
                password={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View> 
            
              {this.renderButton()}
            </View>
            <View style = {{flexDirection: 'row',zIndex: 5,justifyContent:'space-between',marginTop: height*0.0225}}>
              <Text style = {styles.BottonText1} onPress={() => this.goToCreateStack()}>Create Acount</Text>
              <Text style = {styles.BottonText2} >Need Help?</Text>
            </View>
            <FormValidationMessage style={{backgroundColor:'rgba(0,0,0,0)', height: height*0.015}}>{this.state.error}</FormValidationMessage>
            <View style = {{flexDirection: 'column',zIndex: 5,justifyContent:'space-around'}}>
              <Text style = {styles.BottonText3} >or sign in with</Text>
              <View style = {{flexDirection: 'column',zIndex: 5,justifyContent:'center'}}>
                <View style = {{flexDirection: 'row',zIndex: 5,justifyContent:'center', marginTop: height*0.015}}>
                  <TouchableOpacity onPress={this.googleLogin} style = {{marginRight: 8}}>
                    <Image source={require('../img/LoginScreen/google-plus.png')} style={styles.googleIcon}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.facebookLogin} style = {{marginLeft: 8}}>
                    <Image source={require('../img/LoginScreen/facebook.png')} style={styles.fbIcon} />
                  </TouchableOpacity>
                </View>
                <Hr lineColor='#0' lineStyle={{height: 0.5, width: 10,marginTop: height*0.015, marginLeft:0.306*width, marginRight: 0.306*width,backgroundColor: "#00FFBF"}} />
                <Text style = {styles.BottonText4} >FORGOT  PASSWORD?</Text>
              </View>
            </View>
          {/*漸層50%綠*/}
           <Components.LinearGradient 
            colors={['#4BE4C2', 'rgba(151,220,190,0.5)']}
            start={{x: 0.01, y: 0.01}} end={{x: 0.4, y: 0.52}}
            style={styles.linearGradient}>     
          </Components.LinearGradient>
          {/*透明度50%黑*/}
          <View style={styles.mask}></View>
          {/*背景圖片*/}
          <Image source={require('../img/png/background.png')} style={styles.image_background}/>
          <Confirm
            title='Are you sure to create a new user?'
            visible={this.state.showModal}
            onAccept={this.onCreateUser}
            onDecline={this.onCLoseModal}
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    position: 'relative'
  },
  image_icon:{

    marginTop: height*0.135,
    marginLeft: width*0.27,
    zIndex: 3,
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginTop: height*0.009,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 3,
    textAlign: 'center',
  },
  image_background: {
    width: width,
    height: height,
    position: 'absolute',
    zIndex: -1
  },
  fbIcon: {
    width:44,
    height:44,

  },
  googleIcon: {
    width:44,
    height:44,
  },
  mask:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
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
    zIndex: 2
  },
  formStyle: {
    zIndex: 5,
    marginTop: height*0.09,
    alignItems: 'center',//讓輸入框放在螢幕正中間
  },
  small_icon:{
    flexDirection:'column',
    zIndex: 6,
    marginLeft: width*0.015,
    marginRight: width*0.015,
  },  
  LoginButton: { 
    
    zIndex: 8,
    width: width-40,
    height: height*0.072,
    marginTop: height*0.0375,
    backgroundColor: '#35C4A4',
    justifyContent: 'center',
    flexDirection:'row',
    borderRadius: 100,
  },
  BottonText1:{
    marginLeft:width*0.06,
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
  },  
  BottonText2:{
    marginRight: width*0.06,
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  BottonText3:{
    flexDirection: 'row',
    justifyContent:'center',
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: '#00FFBF',
    zIndex: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
  },
  BottonText4:{
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#86FFE1',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: height*0.018
  },
};

export default LoginScreen;





