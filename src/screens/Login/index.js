import React from 'react';
import { Image,View, Text,StyleSheet,Button,Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';
const {width,height}=Dimensions.get('window')
import {goToScreen} from '../../utils/navigation'
import Realm from 'realm';

async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(["email", "public_profile", "user_friends"]);
    // loginButton.setReadPermissions("email", "public_profile", "user_friends");
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    
    // Sign-in the user with the credential
    return firebase.auth().signInWithCredential(facebookCredential);
  }

function FacebookSignIn() {
  return (
    <View style={styles.container}>
      <Image style={styles.fixed} source={require('../../assets/images/taxi.jpg')}>

      </Image>
      <View style={{top:height*0.2}}>
    <Button
      title="Facebook Login"
      onPress={() => onFacebookButtonPress().then((d) =>{ 
                                                          Realm.open({
                                                          schema: [{name: 'Users', properties: {id: 'string',name: 'string',email: 'string'}}]
                                                          }).then(realm => {
                                                          realm.write(() => {
                                                          realm.create('Users', {id: d.additionalUserInfo.profile.id,name: d.additionalUserInfo.profile.first_name,email: d.additionalUserInfo.profile.email});
                                                          });
                                                          
                                                          });
                                                          
                                                          goToScreen('WelcomeScreen')})}
    />
    </View>
    </View>
  );
}

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


export default FacebookSignIn;