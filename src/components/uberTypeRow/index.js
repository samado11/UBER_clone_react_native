import React from 'react';
import { View, Image,Text } from 'react-native';
import styles from './styles'
import Ionicons from "react-native-vector-icons/Ionicons"

const UberTypeRow = (props) => {
    const getImg = ()=>{
        if(props.type.type == 'UberX'){
         return require("../../assets/images/UberX.jpeg")
        }
        if(props.type.type == 'Comfort'){
            return require("../../assets/images/Comfort.jpeg")
           }
           return require("../../assets/images/UberXL.jpeg")

}

return (
    <View style={styles.container}>

            <Image style={styles.image}  source={getImg()}
            />

            <View style={styles.middleContainer}>
<Text style={styles.type}>
    {props.type.type}
    <Ionicons name={'person'} size={16} />
    3
</Text>
<Text style={styles.time} >
    8:03PM drop off
</Text>
            </View>
            <View style={styles.rightContainer}>
              <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
              <Text style={styles.price}>
                  est. ${props.type.price}
              </Text>
            </View>

        
    </View>
  );
};


export default UberTypeRow;
