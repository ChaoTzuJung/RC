import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    Text,
    View,
    Dimensions,
    TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';

//import ImageElement from './ImageElement ';



export default class Search extends Component  {

    state = {
        image: [
            {title:'音樂賞析', img: require('../Class_img/music.png' )},
            {title:'跨平台APP設計', img: require('../Class_img/Bitmap.png' )},
            {title:'程式設計(上)', img: require('../Class_img/C.png' )},
            {title:'使用者經驗設計', img: require('../Class_img/Ai.png' )},
            {title:'網站前端設計與開發', img: require('../Class_img/network.png' )},
        ],
        imagesReferance: [],
        text:'',  
    }
  
    componentDidMount(){
        this.setState({imagesReferance: this.State.images });
    }

    render() {
            let images = this.State.images.map((val,key) => {
                 return <View key ={key} style={styles.imagewrap}>
                            <ImageElement imgsource={val.img} />
                        </View>
            });

        return (
            <View style={styles.container}> 
                 <View style={styles.photogrid}> 
                    {images }
                </View>
            </View>
        );    
    };
};

const styles = {

    container: {
       flex:1,
       backgroundColor: '#252525'  
    },
    photogrid:{
       flex:1,
       padding: 2,
       flexDirection:'row',
       flexWrap: 'wrap'
    }
};

AppRegistry.registerComponent('Search',() =>Search)