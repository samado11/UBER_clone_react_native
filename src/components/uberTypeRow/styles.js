import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20
    },
    image:{
        height:70,
        width:80,
        resizeMode:'contain'
    },
    middleContainer:{
     flex:1,
     marginHorizontal:10,

    },
    time:{
       color:'#5d5d5d'
    },
    type:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:5
    },
    rightContainer:{
      width:100,
      alignItems:'flex-end',
      flexDirection:'row'

    },
    price:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:5
    }

   
});

export default styles;