import React from 'react';
import { View, Text ,Pressable } from 'react-native';
import styles from './styles'
import UberTypeRow from '../uberTypeRow'
import typesData from '../../assets/data/types'
import firebase from 'firebase';

const UberTypes = (props) => {
    const writeUserData=(id,lang,lat)=>{
        firebase.database().ref('Locs/').set({
            id,
            lang,
            lat
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }
    const confirm = ()=>{
        console.warn('confirmed')
    }
  return (
    <View style={styles.container}>
        {typesData.map(type=><UberTypeRow type={type}/>)}
        
        <Pressable onPress={writeUserData(1,31.233334,30.033333)}  style={{
            backgroundColor:'black',
            padding:10,
            margin:10,
            alignItems:'center'
        }}>
            <Text style={{
                color:'#fff',fontWeight:'bold'
            }}>
                Confirm Uber
            </Text>
        </Pressable>
    </View>
  );
};


export default UberTypes;
