import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ScrollView,View,Image,Text,TextInput,ActivityIndicator,Picker } from 'react-native';
import { Tile, List, ListItem,Button,Avatar } from 'react-native-elements';

// Make a component
class Setting extends Component {
  state = {
    username: null,
    email: null,
    password: null,
    my_class: null,
    student_id: null,
    college: 'null',
    saving: false
  };

  async componentWillMount() {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let password = snapshot.val().password;
      let my_class = snapshot.val().my_class;
      let student_id = snapshot.val().student_id;
      let college = snapshot.val().college;

      this.setState({ username, email, password, my_class, student_id, college });
    } catch (err) { }
  }  

  onSaveInfo = async () => {
    this.setState({ saving: true });
    const { currentUser } = firebase.auth();
    const { username, email, password, my_class, student_id, college } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.set({ username, email, password, my_class, student_id, college });
    this.setState({ saving: false });
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
        // <Text style = {BottonText1}>SAVE</Text>
        // <Text style = {BottonText2}>EDIT</Text>
        <Button
            
            style={styles.BottonText1 }
            title='Save'
            onPress={this.onSaveInfo}
        />
    );
  }

  render() {
    const {TextStyle,AvatarStyle,AddButton,container,InputText,small_icon} = styles;
    return (
      <ScrollView>  
                    <Picker
                        style={{}}
                        selectedValue={this.state.college}
                        onValueChange={college => this.setState({ college })}
                     >
                        <Picker.Item label="國立臺北教育大學" value="國立臺北教育大學" />
                        <Picker.Item label="台灣大學" value="台灣大學" />
                        <Picker.Item label="臺灣科技大學" value="臺灣科技大學" />
                        <Picker.Item label="臺灣師範大學" value="臺灣師範大學" />
                     </Picker>
        <View style = {container}>
            
           <Avatar width={102} height={102} rounded source={require('../img/profile.jpg')} activeOpacity={0.7} containerStyle={{zIndex: 6,}}/>{/*圖片底下的底圖移動*/}
           <View style={InputText}>
                        <Image
                            source={require('../img/png/ios-person-outline-white.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0,borderWidth: 1 }}
                            placeholder={'Username'}
                            placeholderStyle={{ fontFamily: "Arial", Color: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            value={this.state.username}
                            onChangeText={username => this.setState({ username })}
                        />
                    </View>


                    <View style={InputText}>
                        <Image
                            source={require('../img/png/ios-email-outline_white@1x.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 ,borderWidth: 1}}
                            placeholder={'Email'}
                            placeholderStyle={{ fontFamily: "Arial", Color: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>

                    <View style={InputText}>
                        <Image
                            source={require('../img/png/ios-unlocked-outline.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0,borderWidth: 1 }}
                            placeholder={'Password'}
                            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password,borderWidth: 1 })}
                        />
                     </View>
                      <View style={InputText}>
                        <Image
                            source={require('../img/StudentName.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0,borderWidth: 1 }}
                            placeholder={'MyClass'}
                            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            value={this.state.my_class}
                            onChangeText={my_class => this.setState({ my_class })}
                        />
                     </View>   
                         
                      <View style={InputText}>
                        <Image
                            source={require('../img/studentID.png')}
                            style={small_icon}
                        />
                        <TextInput
                            style={{ flex: 1, zIndex: 6, fontSize: 20, position: 'relative', top: 0, left: 0 ,borderWidth: 1}}
                            placeholder={'StudentID'}
                            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
                            maxLength={12}
                            multiline={false}
                            placeholderTextColor="white"
                            value={this.state.student_id}
                            onChangeText={student_id => this.setState({ student_id })}
                        />
                     </View>

                    
                     
                {this.renderButton()}
        </View>
      </ScrollView>
    );
  }
}
const styles = {
    container:{
        flexDirection: 'column',//由上到下
        //justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'#3CCEB0',
        flex: 1,
        borderWidth: 1
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
        //top: 115,
        //left: 20,
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
    marginBottom: 0,
    backgroundColor:'red'
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
    borderWidth: 1
    //ShadowColor:'#000',
    //ShadowOffset:{width:0,height:2}
  },  
  

 
}

export default Setting;
