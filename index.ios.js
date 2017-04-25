import React, { Component } from 'react';
import { 
  AppRegistry,
  View 
} from 'react-native';
import App from './src/App'


AppRegistry.registerComponent('RC', () => App);



/*import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    Text,
    View,
    Dimensions,
    TextInput,
    ScrollView
    
} from 'react-native';




import ImageElement from './src/components/ImageElement';



export default class Search extends Component  {

    state = {
        images: [
            {title:'100304', img: require('./src/Class_img/music.png' )},
            {title:'200204', img: require('./src/Class_img/Bitmap.png' )},
            {title:'500204', img: require('./src/Class_img/C.png' )},
            {title:'400N06', img: require('./src/Class_img/Ai.png' )},
            {title:'400204', img: require('./src/Class_img/network.png' )},
        ],
        imagesReferance: [],
        text: '',  
    }

  
    componentDidMount(){
        this.setState({imagesReferance: this.state.images });
        
    }

    search(text){
      this.setState({text:text})
      let imArr = this.state.images; 

      for(var i = 0; i < imArr.length; i++){
        if(text === imArr[i].title){
          this.setState( { images : [ imArr[i] ] } )
        }
      }
       if(!text){
         //resetSearch
           this.setState({images : this.state.imagesReferance})
       }
    }

  
    render() {
            let images = this.state.images.map((val,key) => {
                 return <View key ={key} style={styles.imagewrap}>
                            <ImageElement imgsource={val.img} />
                        </View>
            });

        return (
            <ScrollView>
            <View style={styles.container}> 
                  
                 <TextInput style={styles.textinput}  underlineColorAndroid='transparent'  placeholder='search class' onChangeText={(text)=>this.search(text)} value={this.state.text}  />
                 <View style={styles.photogrid}> 
                    {images }
                </View>
                 <KeyboardSpacer/>
            </View>
            </ScrollView>
        );    
    };
};

const styles = {

    container: {
       flex:1,
       backgroundColor: '#252525'  
    },
    textinput:{
        width:375,
        height:40,

      textAlign: 'center',
      marginTop: 20,
      marginBottom: 0,
      padding: 0,
      backgroundColor: 'white' ,
      flex:1 
      


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
};

AppRegistry.registerComponent('RC',() =>Search)
*/



