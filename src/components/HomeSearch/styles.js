import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   inputBox: {
    backgroundColor:'#e7e7e7',
    padding:10,
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   inputText:{
   color:'#434343',
   fontSize:20,
   fontWeight:'600'
   },
   timeContainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       width:100,
       backgroundColor:'#fff',
       padding:10,
       borderRadius:20

   },
   row:{
       flexDirection:'row',
       alignItems:'center',
       padding:15,
       borderBottomWidth:1,
       borderColor:"#b3b3b3"
   },
   iconContainer:{
       backgroundColor:"#b3b3b3",
       padding:10,
       borderRadius:25
   },
   destinationText:{
     marginLeft:10,
     fontWeight:"500",
     fontSize:16
   }

   
});

export default styles;