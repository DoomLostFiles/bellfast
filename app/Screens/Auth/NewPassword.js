import React from 'react';
import {SafeAreaView, Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import { Input, FormControl, WarningOutlineIcon, Box, Button,HStack, Divider, NativeBaseProvider, Text as InputText } from "native-base";
import TopSign from '../components/auth/top';
import PhoneInput from 'react-native-phone-input'
const SetPasswordScreen = ({ navigation }) => {
    const {height : SCREEN_WIDTH} = Dimensions.get('window');
   
  return (
    
    <SafeAreaView style={styles.rootStyle}>
        <TopSign type={'flex'}/>
        <View style={styles.itemContainer}>
      <Text style={styles.itemText}>New Password</Text></View>
      
    <Box style={{left:26,  marginBottom:20, width:232}}>
        
      <Text style={styles.circleContainer}>New password must be different from previous passwords</Text>
    </Box>
    <Box style={{left:26,  marginBottom:20}}>
        
      <FormControl  w="85%" h='65px' >
        <FormControl.Label style={styles.subtitle}>New Password</FormControl.Label>
        <Input fontSize={18} borderRadius={10} variant="outline" focusOutlineColor='#513DB0'  style={{width:400,height:65, borderRadius:20}}placeholder="Enter password" w={{
        base: "100%",
        md: "100%"}} />
       
      </FormControl>
      
    </Box>
    <Box style={{left:26, top:30, marginBottom:40}}>
        
        <FormControl  w="85%" h='65px' >
          <FormControl.Label style={styles.subtitle}>Confirm New Password</FormControl.Label>
          <Input fontSize={18} borderRadius={10} variant="outline" focusOutlineColor='#513DB0'  style={{width:400,height:65, borderRadius:20}}placeholder="Enter password" w={{
          base: "100%",
          md: "100%"}} />
         
        </FormControl>
        
      </Box>
   
      
   
        
          <Box  style={{left:26, top:50}}>
        
        <Button  style={{width:360,height:58, backgroundColor:'#513DB0',fontSize:15,borderRadius:12,lineHeight:21,}} onPress={() => console.log("hello world")}>
          <InputText fontFamily={'Inter-Regular'} fontSize={15} color={'white'}>Set new password</InputText></Button>
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

export default SetPasswordScreen;