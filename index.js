

import { Navigation } from "react-native-navigation";
import App from "./App";

import DestinationSearch from './src/screens/DestinationSearch'
import SearchResults from './src/screens/SearchResults'
import HomeMap from './src/components/HomeMap'
import Login from './src/screens/Login'
import UserTypes from './src/screens/userTypes'
import Driver from './src/screens/Driver'
import firebase from 'firebase';
import Realm from 'realm';
import Store from './src/utils/store'


var firebaseConfig = {
  apiKey: "AIzaSyBEBnY-mLtXbzEJP1326qIJoQcaxdSxOPg",
  authDomain: "uber-e1d9c.firebaseapp.com",
  databaseURL: "https://uber-e1d9c-default-rtdb.firebaseio.com",
  projectId: "uber-e1d9c",
  storageBucket: "uber-e1d9c.appspot.com",
  messagingSenderId: "948683507610",
  appId: "1:948683507610:web:07974658b8c001a86a1c23",
  measurementId: "G-S5W7QKG20K"
};

  firebase.initializeApp(firebaseConfig);

  

Navigation.registerComponent('WelcomeScreen', () => App);
Navigation.registerComponent('DestinationSearch', () => DestinationSearch);
Navigation.registerComponent('SearchResults', () => SearchResults);
// Navigation.registerComponent('HomeMap', () => HomeMap);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('UserTypes', () => UserTypes);
Navigation.registerComponent('Driver', () => Driver);

  
Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      backgroundColor: '#061114',
      style: 'white'
    },
    topBar: {
      drawBehind: true,
      visible: false,
      animate: false,
    },
    layout: {
      backgroundColor: 'white',
      orientation: ['portrait'],
    },
    animations: {
      push: {
        waitForRender: true,
      },
      showModal: {
        waitForRender: true,
      },
    },
  });
  let check_log,screen_name
  await Realm.open({
  schema: [{name: 'Users', properties: {id: 'string',name: 'string',email: 'string',type: 'string'}}]
  }).then(async realm => {
    check_log = await realm.objects('Users');
    console.log(check_log[0]);
    if(check_log.length>0){
      if(check_log.type=="USER"){
        screen_name='WelcomeScreen'
      }
      else{
        screen_name='Driver'
      }
      
   }
   else{
     screen_name='UserTypes'
   }
  });
  
   await Navigation.setRoot({
     root: {
       stack: {
        id:'AppStack',
         children: [
           {
             component: {
               name: screen_name,
               
            }
           }
         ]
       }
     }
  });
});