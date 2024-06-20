import React,  { useRef }from 'react';
import {SafeAreaView, Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import { Input, FormControl, WarningOutlineIcon, Box, Button,HStack, Divider, NativeBaseProvider, Text as InputText } from "native-base";
import TopSign from '../components/auth/top';
import { OtpInput } from 'react-native-otp-entry';
const VerifyScreen = ({ navigation }) => {
    const {height : SCREEN_WIDTH} = Dimensions.get('window');
   const clearText = () => {
        this.otpInput.clear();
    }
    
    const setText = () => {
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
 
   
  
          <Box paddingX='16' style={{left:26, top:30, marginBottom:40,paddingHorizontal: 16,}}>
          <FormControl  w="85%" h='65px' >
      
          <OtpInput
  numberOfDigits={4}
  focusColor="green"
  focusStickBlinkingDuration={500}
  onTextChange={(text) => console.log(text)}
  onFilled={() => navigation.navigate('Home')}
  textInputProps={{
    accessibilityLabel: "One-Time Password",
  }}
  theme={{
    containerStyle: styles.container,
    pinCodeContainerStyle: styles.pinCodeContainer,
    pinCodeTextStyle: styles.pinCodeText,
    focusStickStyle: styles.focusStick,
    focusedPinCodeContainerStyle: styles.activePinCodeContainer,
  }}
/> 
           
       
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
  container:{  flex: 1,
    justifyContent: 'center'
},
  pinCodeContainer:{},
  pinCodeText:{},
  focusStick:{},
  activePinCodeContainer:{ backgroundColor: '#ecf0f1'},

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