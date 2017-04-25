import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View,TextInput,Image,TouchableWithoutFeedback} from 'react-native';
import { Card, PricingCard, Tile, Button, Icon,Avatar } from 'react-native-elements';
class Seacher extends Component{

  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 0,backgroundColor:'rgba(255,255,255,1)',flex:1}}>
        <Modal
          animationType={"none"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 0,backgroundColor:'rgba(0,0,0,0.2)',flex:1,}}>
          <View>
               <View style = {styles.InputText}>
                <Icon  name='search' size={16}  iconStyle={{ marginLeft: 5,marginTop:5 }} />
                  <TextInput
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
        <TouchableHighlight onPress={() => {this.setModalVisible(true)}}>
          <Text style={{marginTop: 20 }}>收尋</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {

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

};
export default Seacher;