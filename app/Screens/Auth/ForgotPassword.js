import React, { Component, useState} from 'react';
import {SafeAreaView, Text,View,StyleSheet,Image,Dimensions,Platform,} from 'react-native';
import { Input, FormControl, WarningOutlineIcon, Box, Button,HStack, Divider, NativeBaseProvider, Text as InputText } from "native-base";
import TopSign from '../components/auth/top';
import PhoneInput from 'react-native-phone-input'
const ResetScreen = ({ navigation }) => {
    const {height : SCREEN_WIDTH} = Dimensions.get('window');
    const [phone, setPhone] = useState('')
 
 
  return (
    
    <SafeAreaView style={styles.rootStyle}>
        <TopSign type={'flex'}/>
        <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Reset Password</Text></View>
      
    <Box style={{left:26, top:30, marginBottom:50, width:232}}>
        
      <Text style={styles.circleContainer}>Please enter your email or phone number to request a password reset</Text>
    </Box>
    <Box style={{left:26, top:30, marginBottom:40}}>
        
      <FormControl  w="85%" h='65px' >
        <FormControl.Label style={styles.subtitle}>E-mail</FormControl.Label>
        <Input fontSize={18} borderRadius={10} variant="outline" focusOutlineColor='#513DB0'  style={{width:400,height:65, borderRadius:20}}placeholder="Enter password" w={{
        base: "100%",
        md: "100%"}} />
       
      </FormControl>
    </Box>
   
   
      
    <Box  w='340'marginTop={20} marginRight={20} marginLeft={10} backgroundColor={'white'} flexDirection={'row'}> 
      
      <Divider style={{width:'30%'}} my="2" color={'#B3B3B3'} />
        <Text style={{fontFamily:'Inter-Regular',fontWeight:'500',fontSize:14,lineHeight:16}}> Or reset with  </Text>  
        <Divider style={{width:'30%'}} my="2" color={'#B3B3B3'} />
        
          </Box>
          <Box style={{left:26, top:30, marginBottom:40}}>
          <FormControl  w="85%" h='65px' >
        <FormControl.Label style={styles.subtitle}>Phone number</FormControl.Label>
       
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
      </FormControl></Box>
          <Box  style={{left:26, top:50}}>
        
        <Button  style={{width:360,height:58, backgroundColor:'#513DB0',fontSize:15,borderRadius:12,lineHeight:21,}} onPress={() => navigation.navigate('SetPassword')}>
          <InputText fontFamily={'Inter-Regular'} fontSize={15} color={'white'}>Send new password</InputText></Button>
        </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  numberContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
    //   maxHeight:60,
    //   paddingBottom:0,
    //   paddingTop:0,
  },
  codeContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 1,
    elevation: 0,
    width: '100%',
    // paddingBottom:5,
    // paddingTop:6
  },
  textInputStyle: {
    // borderBottomColor: color.border,
    // borderBottomWidth: 1,
    // marginBottom: -20,
    width: '100%',
    // marginBottom: -20,
    // paddingBottom:5,
    padding:0,
    // fontWeight:'200',
    // fontSize: 15,
    marginLeft:-30
  },
  codeTextStyle: {
    // borderBottomColor: color.text,
    // borderBottomWidth: 0.6,
    // paddingBottom: 7,  
    // marginBottom: -20,
    // marginLeft: -50,
    // width: 60,
    fontWeight: '400',
    fontFamily: Platform.OS === 'android' ? 'Barlow-Regular' : undefined,
  },
  rootStyle:{
    fontFamily:'Overpass-Black',fontSize:16 ,backgroundColor:'white',
  },
  itemContainer: {
    display: 'flex',
   position:'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top:10,
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

export default ResetScreen;