import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';    
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon, FormValidationMessage } from 'react-native-elements'
import { Components } from 'expo';
import * as firebase from 'firebase';

class CreateScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        username: null,
        email: null,
        password: null,
        error: ' ',
        loading: false,
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
      return <ActivityIndicator size='large' style={{marginTop: 30}} />;
    }
    return (
      <View style={styles.LoginButton} onPress={this.onCreateUser}>
        <Button
            onPress={this.onCreateUser}
            raised
            buttonStyle={{ backgroundColor: 'rgba(0,0,0,0)', borderRadius: 100, borderColor: 'white', borderWidth: 1, width: 335, height: 48 }}
            textStyle={{ textAlign: 'center' }}
            title='Continue' />
      </View>
    );
  }

/*返回鍵的叉叉是寫在Router.js的headerBar內*/
goToBack = (props) => {
        this.props.navigation.navigate('LoginScreen');
   };
   render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>
                    CREATE ACCOUNT
                </Text>
                <View style={{zIndex: 9, position: 'absolute', top: 30, left: 0,}}> 
                    <View style={styles.InputText}>
                    <Image
                        source={require('../img/png/ios-person-outline-white.png')}
                        style={styles.small_icon}
                    />
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
                </View>
                {this.renderButton()}
                <FormValidationMessage style={{ zIndex: 12,backgroundColor:'rgba(0,0,0,0)'}} >{this.state.error}</FormValidationMessage>
                    <Text style={styles.BottonText1}>Terms ＆ Conditions</Text>

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
    },
    mask: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 375,
        height: 667,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1

    },
    image_background: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
    },
    image_icon: {
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
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        zIndex: 3,
        top: 130,
        left: 72.5,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    ButtonStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        borderWidth: 1,
    },
    InputText: {
        borderRadius: 100,
        zIndex: 5,
        width: 335,
        height: 48,
        top: 230,
        left: 20,
        marginTop: 25,
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',

    },
    LoginButton: {
        //borderRadius: 100,
        zIndex: 5,
        width: 335,
        height: 48,
        top: 518,
        left: 20,
        marginTop: 0,
        backgroundColor: 'rgba(53,196,164,0)',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',

    },
    small_icon: {
        flexDirection: 'column',
        zIndex: 6,
        marginLeft: 10,
        marginRight: 10,
    },
    BottonText1: {
        fontSize: 14,
        fontWeight: 'normal',
        fontFamily: 'Arial',
        color: 'white',
        zIndex: 7,
        position: 'absolute',
        top: 583,
        left: 129,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    BottonText2: {
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

export default CreateScreen;