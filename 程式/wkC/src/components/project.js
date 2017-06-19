//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
//  example row data (see for json structure)
import rows from './data';
//  example styles
import styles from './styles';
import { Tile, List, ListItem, Button, Avatar } from 'react-native-elements';
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ListView, Text, View, TouchableWithoutFeedback, ScrollView,Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window')

//  example swipout app
class project extends Component {

  constructor() {
    super();

    //指定什麽時候重新繪制一行，就是在這個時候 (r1, r2) => r1 !== r2} 重繪。
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    //rows就是section，在state內的dataSource發生改變就會重新繪製
    this.state = {
      dataSource: ds.cloneWithRows(rows),
      sectionID: null,
      rowID: null,
    };
  }

//_renderRow內負責製作element並return出去
  _renderRow(rowData, sectionID, rowID) {
    //  製作delete btn
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      //onPress: () => { this.deleteNote(rowData) }
    }];
    //  製作可滑的設定
    return (
      <Swipeout
        right={swipeBtns}
        autoClose={rowData.autoClose}
        backgroundColor={rowData.backgroundColor}
        close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        rowID={rowID}
        sectionID={sectionID}
        onOpen={(sectionID, rowID) => {
          this.setState({
            sectionID,
            rowID,
          })
        }} 
      >
       <ScrollView style={styles.scrollView} >
        <TouchableWithoutFeedback >
        <ListItem
                avatarStyle={{ width: width * 0.176, height: height * 0.099 }}
                containerStyle={{ backgroundColor: '#fff', width: width, height: height * 0.132, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                key={rowData.title}
                Avatar
                avatar={rowData.avatar}
                subtitle={
                    <View style={styles.class_list}>
                        <Text style={styles.title} >{rowData.title}</Text>
                        <Text style={styles.subtitle}>{rowData.subtitle}</Text>
                        <Text style={styles.class_time}>{rowData.class_time}</Text>
                    </View>
                }
            /> 
        </TouchableWithoutFeedback>
         </ScrollView>
      </Swipeout>
    );
  }
  //onpress後的delete功能
  viewNote(rowData) {
    this.props.navigator.push({
      title: 'The Note',
      component: ViewNote,
      passProps: {
        noteText: rowData,
        noteId: this.noteId(rowData),
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>    
            <ListView
                scrollEnabled
                //引入資料
                dataSource={this.state.dataSource}
                //renderRow就是把每行的數據繪制在 Text 裏
                renderRow={this._renderRow.bind(this)}
                //renderRow={(rowData) => <Text>{rowData}</Text>} />
            />   
      </View>
    );
  }

}


export default project;

       