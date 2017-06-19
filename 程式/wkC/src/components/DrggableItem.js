import React, { Component } from 'react';
import { ScrollView, View, Image, Text, Dimensions, Animated, PanResponder } from 'react-native';
import { Tile, List, ListItem, Button, Avatar } from 'react-native-elements';
//設定螢幕大小配合手機大小，const是全域宣告，this position是物件
const { width, height } = Dimensions.get('window')

class DrggableItem extends Component {
  constructor(props) {
    super(props);
    //動畫
    const position = new Animated.ValueXY();
    this.state = {position,}
    //List設定
  }  
    componentWillMount() {
      this._panResponder = PanResponder.create({
        //onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: (this.onShouldDrag),//nPanResponderMove的父元件，換先處理onMoveShouldSetPanResponderCapture再處理onPanResponderMove
        onPanResponderMove: (event, gesture) => {
          this.state.position.setValue({ x: gesture.dx });
          console.log('gesture')
        },

        onPanResponderRelease: this.onReleaseItem,
        //onPanResponderTerminate: this.onReleaseItem,
      });
    }

    onShouldDrag = (event, gesture) => {
        const { dx } = gesture;
        return Math.abs(dx) > 2;
    }
    //當放開按鈕時，終點是原點，移動時間經歷500
    onReleaseItem = (event, gesture) => {
        let config = {
            toValue: { x: 0, y: 0 },
            duration: 500,
        };
        //設定移動起點到終點
        Animated.spring(
            this.state.position,
            config,
        ).start();
    }


  render() {
    const {avatar,title,subtitle,class_time} = this.props;
    const { position } = this.state;
    return (
        <Animated.View style={position.getLayout()} {...this._panResponder.panHandlers}>
            <ListItem
                Avatar
                avatar={avatar}
                title={title}
                subtitle={subtitle}
                avatarStyle={{ width: width * 0.176, height: height * 0.099 }}
                containerStyle={{ backgroundColor: '#fff', width: width, height: height * 0.132, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            />
        </Animated.View>


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

export default DrggableItem;
