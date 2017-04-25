import React, { Component } from 'react';
import {
    AppRegistry,
    Image,

} from 'react-native';

 class ImageElement extends Component  {
  
    render() {
        return (
            <Image source={this.props.imgsource} style = {styles.image}/> 
        );    
    };
};

const styles = {
    image: {
       flex:1,
       width: null,
       alignSelf:'stretch',
    },
};

export default ImageElement;

