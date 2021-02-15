import React ,{ useState } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
  
const LATITUDE = 30.03825;
const LONGITUDE = 31.2422;
const LOCS = [
  { id: 1, latitude: LATITUDE, longitude: LONGITUDE }
]
const HomeMap = (props) => {
  const [ loc_lat, setLat] = useState(LATITUDE);
  const [ loc_long, setLong] = useState(LONGITUDE);
  const [ locs, setLocs] = useState(LOCS);
 
  return (
    <View style={{height:430,backgroundColor:'#a0abff',justifyContent:'center',alignItems:'center'}}>
         <MapView
         style={{
           height:'100%',
           width:'100%',
         }}
         provider={PROVIDER_GOOGLE}
         region={{
          latitude: loc_lat,
          longitude: loc_long,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        }}
        >
         {locs.map(marker => (
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
              description={marker.description}
              >
              <Image
              source={require('../../assets/images/top-UberX.png')}
              style={{width:70,height:70}}
              />
              </Marker>
              
            
         ))}
  </MapView>
    </View>
  );
};


export default HomeMap;
