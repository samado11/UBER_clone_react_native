
import { Image,View, Text,StyleSheet,Button,Dimensions } from 'react-native';
import React from 'react';
import FacebookSignIn from './FacebookSignIn';
import  {Context}   from '../../utils/store'

function Des() {
  return (
  <Context>
    
    <FacebookSignIn />
  </Context>
)};

export default Des;