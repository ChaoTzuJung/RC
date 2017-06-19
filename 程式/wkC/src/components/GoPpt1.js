import React, { Component } from 'react';
import { ScrollView,View,Image,Text,TouchableHightLight,Modal,TextInput,ImageElement,Dimensions, Animated} from 'react-native';
import { Tile, List, Icon,Button } from 'react-native-elements';

// Make a component
class GoPpt1 extends Component {
  setModalVisible(visible){this.setState({modalVisible: visible});};
  state = {
    images: [
      {title:'100304', img: require('../Class_img/music.png' )},
      {title:'200204', img: require('../Class_img/Bitmap.png' )},
      {title:'500204', img: require('../Class_img/C.png' )},
      {title:'400N06', img: require('../Class_img/Ai.png' )},
      {title:'400204', img: require('../Class_img/network.png' )},
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
        this.setState({ images : [ imArr[i] ] })
      }
    }
    if(!text){
    //resetSearch
      this.setState({images : this.state.imagesReferance})
    }
  }

  render(){

    let images = this.state.images.map((val,key) => {
      return <View key ={key} style={styles.imagewrap}>
              <ImageElement imgsource={val.img} />
             </View>
    });

    const {image_icon,TextStyle,TextStyle1,AddButton,container} = styles;
    return (
      <ScrollView style={{backgroundColor:'#252525'}}>
        <View style={{marginTop: 0,flex:1,}}>
          <View>
            <View style = {styles.InputText}>
              <Icon  name='search' size={16}  iconStyle={{ marginLeft: 5,marginTop:5 }} />
                <TextInput
                  onChangeText={(text)=>this.search(text)} value={this.state.text}
                  style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0,}}
                  placeholder={'ClassName'}
                  placeholderStyle={{ fontFamily: "Arial"}}
                  placeholderTextColor="gray"
                 />
                <Icon  name='cancel' size={16}  iconStyle={{ marginRight:10,marginTop:5 }} />
            </View> 
          </View>
            <View style={styles.photogrid}> 
              {images }
            </View>
        </View>
      </ScrollView>
    );
  }
}
//------------------------------------------------------------------------------------------------------------------------CSS Style
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
      borderWidth:1,
      borderColor:'#979797',
      borderRadius: 0,
      zIndex: 5,
      width: 375,
      height: 30,
      marginLeft:0,
      marginTop:0,
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

export default GoPpt1;

