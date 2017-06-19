import React, { Component } from 'react';
import { ScrollView, View, Image, Text, Dimensions, PanResponder } from 'react-native';
import { Tile, List, ListItem, Button, Avatar } from 'react-native-elements';
//設定螢幕大小配合手機大小，const是全域宣告，this position是物件
const { width, height } = Dimensions.get('window')
import Myproject from '../json/Myproject.json';
import DrggableItem from './DrggableItem';






// Make a component
class MyProjects extends Component {
  constructor(props) {
    super(props);
    //List設定
    this.state = { Myproject: [] }
    }  
    componentWillMount() {
      this.setState({ Myproject });
    }

  render() {

    return (
      <ScrollView style={styles.scrollView} >
        <List>
           {this.state.Myproject.map((val) => (       
            <DrggableItem
                key={val.title}
                Avatar
                avatar={val.avatar}
                subtitle={
                    <View style={styles.class_list}>
                        <Text style={styles.title} >{val.title}</Text>
                        <Text style={styles.subtitle}>{val.subtitle}</Text>
                        <Text style={styles.class_time}>{val.class_time}</Text>
                    </View>
                }
            />   
          ))}
        </List>
      </ScrollView>
    );
  }
}
const styles = {
  scrollView: {
    backgroundColor: '#F3F4F6',
    width: width,
  },
  block: {
    backgroundColor: '#fff',
    width: width,
    height: height * 0.132,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 0,
    paddingLeft: 0,

  },
  subtitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 3,
    marginLeft: 0,
    paddingLeft: 0,

  },
  class_time: {
    color: '#9B9B9B',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 3,
    marginLeft: 0,
    paddingLeft: 0,
  },
  class_list: {

    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: width * 0.053
  },
  image_icon: {
    width: width * 0.08,
    height: height * 0.045,
    //flexDirection: 'row',
    //alignSelf: 'flex-end',會往下跑
    //alignItems: 'flex-end', 
    marginLeft: width * 0.92
  }


}

export default MyProjects;
