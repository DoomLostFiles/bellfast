import React from 'react';
import {View, Text, Image} from 'react-native';
import {  Box, Pressable} from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native';
import { faAngleDown,faAngleLeft} from '@fortawesome/free-solid-svg-icons/'
const TopSign= ({type,show}) => {
  const navigation = useNavigation()
  return (
    <View
      style={{position: 'fixed',top: -4,zIndex: 1,justifyContent: 'space-between', alignItems: 'center',flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/side.png')}/>
      <Image style={{zIndex:2,left:-50, display:type}} source={require('./assets/top.png')}/></View>
      <View ></View><Pressable  style={{left:-240,top:20, display:show,alignContent:'center',alignItems:'center',justifyContent:'center'}} borderRadius={12} backgroundColor={'#FFFFFF'} zIndex={3} onPress={() => navigation.goBack()}>
      <Box w='38' h='38' style={{ display:show,alignContent:'center',alignItems:'center',justifyContent:'center'}} borderRadius={12} backgroundColor={'#FFFFFF'}>
      <FontAwesomeIcon size={22} icon ={faAngleLeft} />
      </Box></Pressable>
      <View>
      <Image source={require('./assets/right.png')}/></View>
    </View>
  );
};

export default TopSign;/* Ellipse 131 */
