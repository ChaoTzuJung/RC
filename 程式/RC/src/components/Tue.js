import React, { Component } from 'react';
import { ScrollView,View,Image,Text,TouchableHightLight,Modal,TextInput,Dimensions   } from 'react-native';
import { Tile, List, Icon,Button } from 'react-native-elements';


// Make a component
class Tue extends Component {
constructor(props) {
    super(props);
    this.state = {modalVisible: false};
}
       
    setModalVisible(visible){this.setState({modalVisible: visible});};

  render() {

    const {image_icon,TextStyle,TextStyle1,AddButton,container} = styles;
    return (

         <ScrollView>
        <View>


          <Modal
          animationType={"none"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 0,backgroundColor:'rgba(0,0,0,0.5)',flex:1,}}>
          <View>
               <View style = {styles.InputText}>
                <Icon  name='search' size={16}  iconStyle={{ marginLeft: 5,marginTop:5 }} />
                  <TextInput
                 //onChangeText={(text)=>this.search(text)} value={this.state.text}
                  style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0}}
                  placeholder={'Username'}
                  placeholderStyle={{ fontFamily: "Arial"}}
                  placeholderTextColor="gray"
                  />
                  <Icon  name='cancel' size={16}  iconStyle={{ marginRight:10,marginTop:5 }}  onPress={() => {this.setModalVisible(!this.state.modalVisible)}}  />
              </View> 
          </View>
             
         </View>
        </Modal>

          <Image style={image_icon}source={require('../img/AddClass.png')}/>
       
            <Text style={TextStyle}>還沒加入課程嗎？</Text>
            <Text style={TextStyle1}>趕快選擇課程吧！</Text>
            <View style = {AddButton}>
              
            <Button
              onPress={() => {this.setModalVisible(true)}}
              raised
              buttonStyle={{backgroundColor: '#FF8050', borderRadius: 3,  width: 200,height: 44,} }
              textStyle={{textAlign: 'center'}} 
              title='加入課程' />

          </View>  
         
        </View>
  
      </ScrollView>
    );
  }
}
const styles = {
       container:{
    borderWidth: 1,
    borderColor: 'black',

    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    },
   image_icon:{
    width:269,
    height:300,
    position: 'absolute',
    top: 70,
    left: 53,
    zIndex: 3
  },
  TextStyle:{
    position: 'absolute',
    top: 400,
    left: 113,
    color:'#B7BBBF',
    fontSize:18,
    //marginTop:36,
    //marginLeft:113
  },
  TextStyle1:{
    position: 'absolute',
    top: 425,
    left: 113,
    color:'#B7BBBF',
    fontSize:18,
    //marginTop:36,
    //marginLeft:113
  },
  AddButton: { 
    //borderRadius: 100,
    //zIndex: 5,
    width: 200,
    height: 44,
    top: 486,
    left: 88,
    

    justifyContent: 'center',
    flexDirection:'row',

  },
  InputText: {
    borderRadius: 50,
    zIndex: 5,
    width: 300,
    height: 30,
    marginLeft:38,
    marginTop:42,
    backgroundColor: 'rgba(255,255,255,1)',
    justifyContent: 'flex-start',
    flexDirection:'row',
    alignItems: 'center',

  },
  photogrid:{
       flex:1,
       padding: 2,
       flexDirection:'row',
       flexWrap: 'wrap'
    },
    imagewrap:{
      padding: 2,
      height: 120,
      width: (Dimensions.get('window').width / 2) - 2,
    }
}

export default Tue;
