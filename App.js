/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar,View, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen/>
      {/* <Text>hahahahahahahhahaha</Text> */}
    </>
  );
};


export default App;
