import React, { Component } from 'react';
import { ScrollView, View, Text, Modal, TextInput, Dimensions } from 'react-native';
import { Tile, List, Icon, Button } from 'react-native-elements';
import Myproject from '../json/Myproject.json';

const Modals = ({visible}) => {
    return (
            <Modal animationType={"none"} transparent={true} visible={visible} onRequestClose={() => {alert("Modal has been closed.")}}>
                <View style={{marginTop: 0,backgroundColor:'rgba(0,0,0,0.5)',flex:1,}}>
                    <View>
                        <View style = {styles.InputText}>
                            <Icon  name='search' size={16}  iconStyle={{ marginLeft:10,marginRight:5 }} />
                            <TextInput
                                //onChangeText={(text)=>this.search(text)} value={this.state.text}
                                style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0}}
                                placeholder={'Username'}
                                placeholderStyle={{ fontFamily: "Arial"}}
                                placeholderTextColor="gray"
                            />
                            <Icon name='cancel' size={16} iconStyle={{ marginRight:10}} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>
                        </View> 
                    </View>
                </View>
            </Modal>
        );
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
}
export default Modals;