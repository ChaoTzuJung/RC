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






class Create extends Component {
    constructor(props) {
        super(props);
        const { 
            title,
            artist,
            price,
            url,
            image,
            descriptions
            } = props.navigation.state.params;


    }

     goToTab = () => {
      this.props.navigation.navigate('TabRouter');
   };
   goToBack = (props) => {
      this.props.navigation.navigate('Logic');
   };
    render() {
        const { container, mask, background, border, image_background, linearGradient, image_icon, TextStyle, ButtonStyle, InputText, LoginButton, small_icon, BottonText1, BottonText2 } = styles;
        return (
            <ScrollView>
                <View style={container}>

                    <Text style={TextStyle}>
                        CREATE ACCOUNT
                    </Text>

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
                            password={true}
                        />

                    </View>
                    <View style={LoginButton}>
                        <Button
                            onPress={this.goToTab}
                            raised
                            buttonStyle={{ backgroundColor: 'rgba(0,0,0,0)', borderRadius: 100, borderColor: 'white', borderWidth: 1, width: 335, height: 48, }}
                            textStyle={{ textAlign: 'center' }}
                            title='Continue' />
                    </View>

                    <Text style={BottonText1}>Terms ＆ Conditions</Text>

                    <LinearGradient
                        colors={['rgba(75,228,169,1)', 'rgba(97,226,173,0.86)', 'rgba(151,220,182,0.5)']}
                        start={{ x: 0.016, y: 0.0164 }} end={{ x: 0.965, y: 0.95 }}
                        locations={[0.15, 0.3, 0.9]}
                        style={linearGradient}>
                    </LinearGradient>

                    <Image
                        source={require('../img/png/background_blur.png')}
                        style={image_background}
                    />

                </View>
            </ScrollView>
        );
    }
};

const styles = {
    border: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'red'
    },
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
        zIndex: 4
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

export default Create;