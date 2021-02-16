import React from 'react';
import { Image,View, Text ,Dimensions,Button } from 'react-native';
import styles from './styles'
import firebase from 'firebase';
import { createState, useState } from '@hookstate/core';
import {goToScreen} from '../../utils/navigation'

const {width,height}=Dimensions.get('window')
const globalState = createState('USER');
const UserTypes = (props) => {
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
      <Image style={styles.fixed} source={require('../../assets/images/taxi.jpg')}>

      </Image>
      <View style={{top:height*0.2}}>
    <Button
      
      title="Driver"
      onPress={() =>  {
          globalState.set("DRIVER")
          goToScreen('Login')
        
        }}
    />
    <Button
      title="Client"
      onPress={() =>  {
          goToScreen('Login')
        
        }}
    />
    </View>
    </View>
  );
};



export default UserTypes;
