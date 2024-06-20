import React from 'react';
import {SafeAreaView, Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import { Input, FormControl, WarningOutlineIcon, Box, Button,HStack, Divider, NativeBaseProvider, Text as InputText } from "native-base";
import TopSign from '../components/auth/top';

const LoginScreen = ({ navigation }) => {
    const {height : SCREEN_WIDTH} = Dimensions.get('window');
   
  return (
    
    <SafeAreaView style={styles.rootStyle}>
        <TopSign type={'flex'}/>
        <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Login</Text></View>
      
    <Box style={{left:26, top:30, marginBottom:50}}>
        
      <FormControl  w="85%"  h='65px'>
        <FormControl.Label style={styles.rootStyle}>E-mail</FormControl.Label>
        <Input fontFamily={'Inter-Bold'} fontSize={17} borderRadius={10} variant="outline" focusOutlineColor='#513DB0' style={{width:400,height:65, borderRadius:20}} placeholder="Enter email" />
       
      </FormControl>
    </Box>
    <Box style={{left:26, top:30, marginBottom:40}}>
        
      <FormControl  w="85%" h='65px' >
        <FormControl.Label style={styles.rootStyle}>Password</FormControl.Label>
        <Input fontSize={17} fontFamily={'Inter-Bold'} borderRadius={10} variant="outline" focusOutlineColor='#513DB0'  style={{width:400,height:65, borderRadius:20}}placeholder="Password" w={{
        base: "100%",
        md: "100%"}} />
       
      </FormControl>
    </Box>
    <HStack justifyContent={'left'} space={3} style={{ left:26,marginTop:40,marginBottom:40,fontSize:14,fontWeight:'500'}}>
    <Text onPress={() => navigation.navigate('reset')} style={{color:'#513DB0', fontFamily: 'Overpass-Bold',fontWeight:'500',
    fontSize: 14,}} >
  Forgot Password ?
      </Text>
          </HStack>
      <Box  style={{left:26, top:50}}>
        
      <Button  style={{width:360,height:58, backgroundColor:'#513DB0',fontSize:15,borderRadius:12,lineHeight:21,}} onPress={() => console.log("hello world")}>
        <InputText fontFamily={'Inter-Regular'} fontSize={15} color={'white'}>Login</InputText></Button>
      </Box>
      
      <HStack style={{ marginTop:70,marginBottom:40,textAlign:'center',justifyContent:'center',fontSize:14,fontWeight:'500'}}>
        
    <Text style={styles.subtitle}> Don't have an account?  </Text>  
    <Text onPress={() => navigation.navigate('HomeScreen')} style={{color:'#513DB0'}} >
  Sign Up
      </Text>
      </HStack>
      <HStack  space={3} style={{ marginTop:40,marginBottom:0,textAlign:'center',justifyContent:'center',fontSize:14,fontWeight:'500'}}>
      <Divider my="2" color={'#B3B3B3'} />
        <Text> Login with  </Text>  
        <Divider my="2" color={'#B3B3B3'} />
          </HStack>
      <HStack style={{ marginTop:0,marginBottom:40,textAlign:'center',justifyContent:'center',fontSize:14,fontWeight:'500'}}>
        
      <Image source={require('../components/auth/assets/fb.png')}/>
      <Image source={require('../components/auth/assets/goo.png')}/>
          </HStack>
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
    fontSize: 14,
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
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default LoginScreen;