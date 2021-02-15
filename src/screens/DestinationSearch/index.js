import React, {useState,useEffect} from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationSearch = (props) => {
    const [fromText,setFromText] = useState( '');
    const [destinationText,setDestinationText] = useState( '');
    useEffect ( ()=>{
        
     if(fromText && destinationText){
         console.warn("Redirect to results");
     }
    },[fromText,destinationText])
    return (
      <SafeAreaView>
        <View style={styles.container}>
        <GooglePlacesAutocomplete
      placeholder='from'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setFromText(data,details);
      }}
      styles={{
          textInput:styles.textInput
      }}
    //   fetchDetails={true}
      query={{
        key: 'AIzaSyDp2O17ip5_-WxAQRhPAqkL61bZya1A0tQ',
        language: 'en',
      }}
      
    />
<GooglePlacesAutocomplete
      placeholder='where to?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setDestinationText(data,details);
      }}
      styles={{
          textInput:styles.textInput
      }}
    //   fetchDetails={true}
      query={{
        key: 'AIzaSyDp2O17ip5_-WxAQRhPAqkL61bZya1A0tQ',
        language: 'en',
      }}
      
    />
        </View>
      </SafeAreaView>
    
  );
};


export default DestinationSearch;
