import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, ScrollView, TextInput, Text, Image,} from 'react-native';  
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Confirm from '../components/Confirm';
import { Facebook, Components } from 'expo';

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
    showModal: false
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
      this.props.navigation.navigate('CreateScreen');
    } catch (err) {
      this.setState({
        email: '',
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
      return <ActivityIndicator size='large' style={{marginTop: 30}} />;
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
  
  render() {
    return (
      <ScrollView>
        <View style = {styles.container}>
            <Image source={require('../img/png/RC-icon@1x.png')} style={styles.image_icon} />
            <Text style = {styles.TextStyle}> REMOTE    CLASS</Text>
            {/*用一個大的View包住2個textInput來控制輸入框的樣式，且textInput規定外面必須放兩層View*/}        
            <View style = {styles.formStyle}>
            {/*第2個View是TextInput外觀且內包住icon與打字區*/}{/*justifyContent與flexDirection用來讓icon與inputtext水平*/}{/*alignItems讓原本偏上的icon往下置中*/}
            <View style = {{width: 335,height: 48, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius:25,fontSize: 20,justifyContent: 'flex-start',flexDirection:'row',alignItems:'center'}}>
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
            <View style = {{width: 335,height: 48, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius:25,fontSize: 20,justifyContent: 'flex-start',flexDirection:'row',alignItems:'center',marginTop:10,}}> 
              <Image source={require('../img/png/ios-unlocked-outline.png')} style={styles.small_icon}/>
              <TextInput
                style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0}}
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
              <FormValidationMessage style={{backgroundColor:'rgba(0,0,0,0)'}}>{this.state.error}</FormValidationMessage>
            </View>
            <Text style = {styles.BottonText1} onPress={() => this.goToCreateStack()}>Create Acount</Text>
            <Text style = {styles.BottonText2} >Need Help?</Text>
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
    position: 'relative',
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    zIndex: 3,
    top: 235,
    left: 105,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  image_background: {
    position: 'absolute',
    zIndex: -1
  },
  image_icon:{
    position: 'absolute',
    top: 90,
    left: 102,
    zIndex: 3
  },
  mask:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 375,
    height: 667,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
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
  formStyle: {
    zIndex: 5,
    marginTop: 363,
    alignItems: 'center',//讓輸入框放在螢幕正中間
  },
  small_icon:{
    flexDirection:'column',
    zIndex: 6,
    marginLeft: 10,
    marginRight:10,
  },  
  LoginButton: { 
    zIndex: 8,
    width: 335,
    height: 48,
    marginTop:35,
    backgroundColor: '#35C4A4',
    justifyContent: 'center',
    flexDirection:'row',
    borderRadius: 100,
  },
  BottonText1:{
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
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    zIndex: 7,
    position: 'absolute',
    top: 595,
    left: 256,
    backgroundColor: 'rgba(0,0,0,0)',
  },
};

export default LoginScreen;





