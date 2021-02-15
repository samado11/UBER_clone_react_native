import React ,{ useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const RouteMap = (props) => {

 
  return (
    <View style={{height:430,backgroundColor:'#a0abff',justifyContent:'center',alignItems:'center'}}>
         <MapView
         style={{
           height:'100%',
           width:'100%',
         }}
         provider={PROVIDER_GOOGLE}
         region={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        }}
        >
            <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={"AIzaSyBUswkcxO-i4unY_zs5ATeLmHpPpFoyry8"}
  />
  </MapView>
    </View>
  );
};


export default RouteMap;
