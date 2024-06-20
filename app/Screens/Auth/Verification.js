import React,  { useRef }from 'react';
import {SafeAreaView, Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import { Input, FormControl, WarningOutlineIcon, Box, Button,HStack, Divider, NativeBaseProvider, Text as InputText } from "native-base";
import TopSign from '../components/auth/top';
import OTPTextInput from 'react-native-otp-textinput';
const VerifyScreen = ({ navigation }) => {
    const {height : SCREEN_WIDTH} = Dimensions.get('window');
    clearText = () => {
        this.otpInput.clear();
    }
    
    setText = () => {
        this.otpInput.setValue("1234");
    }
  return (
    
    <SafeAreaView style={styles.rootStyle}>
        <TopSign type={'flex'}/>
        <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Verification Code</Text></View>
      
    <Box style={{left:26, top:30, marginBottom:50, width:232}}>
        
      <Text style={styles.circleContainer}>Please type the verification code sent to prelookstudio@gmail.com</Text>
    </Box>
 
   
  
          <Box style={{left:26, top:30, marginBottom:40}}>
          <FormControl  w="85%" h='65px' >
      
        <OTPTextInput ref={e => (otpInput = e)} />
           
       
      </FormControl></Box>
      <Box style={{left:26, top:30, marginBottom:40}}>
        
        <Text style={styles.circleContainer}>I did’nt recevie a code! Please resend</Text>
        <Button title="clear" onClick={clearText} >clear</Button>
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

export default VerifyScreen;