import React from 'react';
import {View, Text, Image} from 'react-native';
const TopSign= ({type}) => {
  return (
    <View
      style={{position: 'fixed',top: -4,zIndex: 1,justifyContent: 'space-between', alignItems: 'center',flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/side.png')}/>
      <Image style={{zIndex:2,left:-50, display:type}} source={require('./assets/top.png')}/></View>
      <View>
      </View>
      <View>
      <Image source={require('./assets/right.png')}/></View>
    </View>
  );
};

export default TopSign;/* Ellipse 131 */
