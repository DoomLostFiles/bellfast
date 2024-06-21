import React, { Component, useEffect, useRef, useState } from 'react'
import {SafeAreaView, Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import { Input, FormControl, WarningOutlineIcon, Box, Button,HStack, Text as InputText, VStack } from "native-base";
import TopSign from '../components/auth/top';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faCheckCircle,faCircleCheck} from '@fortawesome/free-solid-svg-icons/'
const JoinScreen = ({ navigation }) => {
    const {height : SCREEN_WIDTH} = Dimensions.get('window');
    const [select, setSelect] = useState()
   

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }



  return (
    
    <SafeAreaView style={styles.rootStyle}>
        <TopSign type={'none'} show={'none'}/>
        <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Join Bellfast as</Text></View>
      
    <Box onPress={()=> setSelect(true)} borderColor={select?'rgba(0, 84, 165, 0.15)':'white'} style={{left:26,  justifyContent: 'space-around',width:'85%',height:152,
      borderStyle: 'solid',borderColor:'rgba(0, 84, 165, 0.15)',flexDirection:'row',
     
    alignItems: 'center', display: 'flex',  borderWidth:1,borderRadius:6,
    position:'relative', marginBottom:20,}}><></>
       <VStack>
       <Text style={styles.subtitle}>Service Provider</Text>
      <Text style={styles.circleContainer}>I want to offer home services.</Text>
      </VStack> 
      <FontAwesomeIcon color={'rgba(0, 84, 165, 0.15)'} size={12} icon ={faCheck} />
    </Box>
    <Box style={{left:26,  justifyContent: 'space-around',width:'85%',height:152,flexDirection:'row',
      borderStyle: 'solid',borderColor:'rgba(0, 84, 165, 0.15)',
     
    alignItems: 'center', display: 'flex',  borderWidth:1,borderRadius:6,
    position:'relative', marginBottom:20,}}>
        
    <VStack>
       <Text style={styles.subtitle}>Customer</Text>
      <Text style={styles.circleContainer}>I'm looking for home services.</Text>
      </VStack> 
      <FontAwesomeIcon color={'rgba(0, 84, 165, 0.15)'} size={12} icon ={faCheck} />
    </Box>
  
     
   
        
          <Box  style={{left:26, top:50}}>
        
        <Button   style={{width:360,height:58, backgroundColor:'#513DB0',fontSize:15,borderRadius:12,lineHeight:21,}} onPress={() => navigation.navigate('SetPhoneScreen')}>
          <InputText fontFamily={'Inter-Regular'} fontSize={15} color={'white'}>Next</InputText></Button>
        </Box>
        <Box  style={{left:26,  marginTop:100, width:260,marginBottom:90 ,alignSelf:'center'}}>
        
        <Text style={{fontSize:15,fontFamily:'Inter-Regular',alignSelf:'center',fontWeight:'500',color:'rgba(83, 87, 99, 1)'}}>You can always switch to any track
        from your profile</Text>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootStyle:{
    fontFamily:'Overpass-Black',fontSize:16 ,backgroundColor:'white',
  },
  itemContainer: {
    display: 'flex',
   position:'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    
    marginBottom: 65,
  }, subtitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 26,
    color:'#3A3A3A',
    fontWeight: '600',fontStyle:'bold',
   // lineHeight: 43,
    textAlign:' center',
  },
  itemText: { 
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    color:'#3A3A3A',
    fontWeight: '600',fontStyle:'bold',
   // lineHeight: 43,
    textAlign:' center',
    
  },
  circleContainer: {
    marginTop:10,
    fontFamily: 'Overpass-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'left'
    
  },
});

export default JoinScreen;