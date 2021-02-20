
import { Image,View, Text,StyleSheet,Button,Dimensions } from 'react-native';
import React from 'react';
import FacebookSignIn from './FacebookSignIn';
import  {StateProvider}   from '../../utils/store'

function Des() {
  return (
  <StateProvider>
    <FacebookSignIn />
  </StateProvider>
)};

export default Des;