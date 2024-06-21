import React, { Component, useState} from 'react';
import {SafeAreaView, Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import { Input, FormControl, WarningOutlineIcon, Box, Button,HStack, Divider, NativeBaseProvider, Text as InputText } from "native-base";
import TopSign from '../components/auth/top';
import PhoneInput from 'react-native-phone-input'
const SetPhoneScreen = ({ navigation }) => {
    const {height : SCREEN_WIDTH} = Dimensions.get('window');
    const [phone, setPhone] = useState('')
  return (
    
    <SafeAreaView style={styles.rootStyle}>
        <TopSign type={'flex'}/>
        <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Phone Number</Text></View>
      
    <Box style={{left:26,  marginBottom:20, width:232}}>
        
      <Text style={styles.circleContainer}>Enter your phone number to verify your account</Text>
    </Box>
 
    <Box style={{left:26, top:30,marginBottom:20}}>
        
        <FormControl paddingTop={4} w="85%" h='65px' borderColor={'rgba(238, 238, 238, 1)'} borderWidth={1} >
        <PhoneInput
                  // ref={phoneInput}
                  defaultValue={phone}
                  defaultCode="NG"
                  layout="second"
                  onChangeText={(value) => setPhone(value)}
                  onChangeFormattedText={(formattedValue) => setPhone(formattedValue)}
                  withDarkTheme
                  withShadow={Platform.OS==="android"?true:false}
                  disableArrowIcon
                  
                  textInputStyle={styles.textInputStyle}
                  codeTextStyle={styles.codeTextStyle}
                  placeholder='Phone number'
                  textInputProps={{ placeholderTextColor: '#B2B2B2', fontSize: 15, lineHeight: 14.4, fontFamily: Platform.OS === 'android' ? 'Barlow-Regular' : undefined, fontWeight: '100' }}
            // textInputStyle={{color:"red",}}
                  textContainerStyle={styles.numberContainer}
                  containerStyle={styles.codeContainer}
                />
         
        </FormControl>
        
      </Box>
   
      
   
        
          <Box  style={{left:26, top:50}}>
        
        <Button  style={{width:360,height:58, backgroundColor:'#513DB0',fontSize:15,borderRadius:12,lineHeight:21,}} onPress={() => console.log("hello world")}>
          <InputText fontFamily={'Inter-Regular'} fontSize={15} color={'white'}>Send</InputText></Button>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop:50,
    left:26,
    marginBottom: 105,
  }, subtitle: {
    fontFamily: 'Overpass-Regular',
    fontSize: 16,
    color:'#3A3A3A',
  },
  itemText: { top:80,
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    color:'#3A3A3A',
    fontWeight: '600',fontStyle:'bold',
   // lineHeight: 43,
    textAlign:' center',
    
  },
  circleContainer: {
    fontFamily: 'Overpass-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'left'
    
  },
});

export default SetPhoneScreen;