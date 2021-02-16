import {StyleSheet} from 'react-native';
import { Image,View, Text ,Dimensions,Button } from 'react-native';

const styles = StyleSheet.create({
  
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    fixed:{
        width: Dimensions.get("window").width,
    height: Dimensions.get("window").height, 
        zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
    },

   
});

export default styles;