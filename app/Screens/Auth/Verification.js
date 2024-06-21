import React, { Component, useEffect, useRef, useState } from 'react'
import {SafeAreaView, Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import { Input, FormControl, WarningOutlineIcon, Box, Button,HStack, Divider, NativeBaseProvider, Text as InputText } from "native-base";
import TopSign from '../components/auth/top';
import { useNavigation } from '@react-navigation/native';
import { OTP } from 'react-native-otp-form';
const VerifyScreen = (props) => {
  const [otp, setOtp] = useState()
  const [timer, setTimer] = useState(30)
  const [email, setEmail] = useState()
  const [token , setToken] = useState()
  //const dispatch = useDispatch()
  //const token = useSelector(state => state.auth.token)
  let interval = useRef(null);
  const navigation = useNavigation()
  const percentageCalculation = (max, val) => max * (val / 100);
  const responsiveHeight = () => {
    const { height } = Dimensions.get("window");
    return percentageCalculation(height);
  };
  const onLoginPressed = () => {
    const { email } = props.route?.params
   // dispatch({ type: LOADING_STATE, payload: true })
    props.login({ email, otp })
  }



//useEffect(() => { 
  //setOtp(props.route.params?.otp) 
//}, [props.route.params])

useEffect(() => {
  otp?.length === 6 && onLoginPressed()
}, [otp])

useEffect(() => {
  if (token) {
    navigation.navigate('Dashboard')
  }
}, [token])

const onResend = () => {

  props.route.params?.onPress()
  startTimer()
}

useEffect(() => {
  emailMask = props.route?.params?.email?.replace(/^(.)(.*)(.@.*)$/,
    (_, a, b, c) => a + b.replace(/./g, '*') + c
  );
  setEmail(emailMask)
  startTimer()
  return () => {
    clearInterval(interval.current);
  }
}, [])


const startTimer = () => {
  setTimer(30)
  interval.current = setInterval(
    () => setTimer((timer) => { return timer - 1 }),
    1000
  );
}

useEffect(() => {
  if (timer <= 0) { 
    clearInterval(interval.current);
  }
}, [timer])

/*  */

const minutes = Math.floor(timer / 60);
const seconds = timer % 60;
 
    
  return (
    
    <SafeAreaView style={styles.rootStyle}>
        <TopSign type={'flex'}/>
        <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Verification Code</Text></View>
      
    <Box style={{left:26,  marginBottom:20, width:232}}>
        
      <Text style={styles.circleContainer}>Please type the verification code sent to prelookstudio@gmail.com</Text>
    
    </Box>
 
   
          <Box  style={{alignContent:'center',alignItems:'center',justifyContent:'center'}} >
        
          <Text pt={10} center size={14} type='hint'>{minutes || '00'}:{seconds < 10 ? '0' + seconds : seconds}</Text>
        </Box>
           
       
     
      <Box style={{left:26, top:30, marginBottom:40}}>
        
        <Text style={styles.circleContainer}>I did’nt recevie a code! Please resend</Text>
        <Button backgroundColor='#513DB0' title="clear">clear</Button>
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
  pinCodeText:{color:'#513DB0'},
  focusStick:{color:'#513DB0'},
  activePinCodeContainer:{ backgroundColor: '#ecf0f1'},

  itemContainer: {
    display: 'flex',
   position:'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top:10,
    left:26,
    marginBottom: 120,
  }, subtitle: {
    fontFamily: 'Overpass-Regular',
    fontSize: 16,
    color:'#3A3A3A',
  },
  itemText: { top:100,
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    color:'#3A3A3A',
    fontWeight: '600',fontStyle:'bold',
   // lineHeight: 43,
    textAlign:' center',
    
  },
  circleContainer: {
    fontFamily: 'Overpass-Bold',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'center',
    width:288
  },
});

export default VerifyScreen;