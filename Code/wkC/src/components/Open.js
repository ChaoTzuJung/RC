import React, { Component } from 'react';
import { ScrollView,View,Image,Text,TextInput   } from 'react-native';
import { Tile, List, ListItem,Button } from 'react-native-elements';

// Make a component
class Open extends Component {


  render() {
    const {TextStyle,TextStyle1,InputText2,container,InputText,TextStyle2,buttonStyle,buttonStyle2} = styles;
    return (
      <ScrollView>
        <View style = {container}>
          <Text style = {TextStyle}>課程標題(18字以內)</Text>
          <TextInput style = {InputText} />
           
          <Text style = {TextStyle1}>上傳課程的封面照片</Text>
          <View style = {buttonStyle}>
          <Button
              //onPress={this.goToUpload}
              raised
              buttonStyle={{backgroundColor: '#FF8050', borderRadius: 3,width: 60,height: 34,position: 'relative',marginTop:22,}}
              textStyle={{textAlign: 'center',color:'#fff',fontSize:14}} 
              title='上傳' />
          </View>
          <Text style = {TextStyle2}>簡短的課程描述(64字內)</Text>
          <TextInput style = {InputText2}/>
           <View style = {buttonStyle2}>
            <Button
              //onPress={this.goToUpload}
              raised
              buttonStyle={{backgroundColor: '#4A4A4A', borderRadius: 3,width: 90,height: 44,position: 'relative',marginTop:25,}}
              textStyle={{textAlign: 'center',color:'#fff',fontSize:18}} 
              title='下一步' />
           </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = {
    container:{
        backgroundColor:'#F3F4F6',
        width: 375,
        height: 667,
        flexDirection: 'column',
        justifyContent :'center',
       // alignItems: 'center',
        
    },
    InputText: {
      borderRadius: 3,
      borderColor:979797,
      borderWidth:1,
      width: 295,
      height: 52,
      marginTop:10,
      backgroundColor: 'rgba(255,255,255,1)',
      alignItems: 'center',
      marginLeft: 39
  },
  TextStyle:{
    position: 'relative',
    marginTop:-365,
    fontSize:14,
    color:'#000',
    marginLeft: 39
  },
 TextStyle1:{
    position: 'relative',
    marginTop:30,
    fontSize:14,
    color:'#000',
    marginLeft: 39
  },
  TextStyle2:{
     position: 'relative',
     marginTop:33,
     fontSize:14,
     color:'#000',
     marginLeft: 39,
     
  },
  buttonStyle:{
    marginLeft: 30
  },
  InputText2:{
      borderRadius: 3,
      borderColor:979797,
      borderWidth:1,
      width: 295,
      height: 202,
      marginTop: 13,
      marginBottom:-250,
      backgroundColor: 'rgba(255,255,255,1)',
      marginLeft: 39
  },
  buttonStyle2:{
    position: 'absolute',
    right: 30,
    bottom:92
    

  },
 

 
}

export default Open;
