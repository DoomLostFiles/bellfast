import React from 'react';
import {SafeAreaView, Text,View,StyleSheet,Image} from 'react-native';
import { Input,Icon, FormControl, Divider, Box, Button,HStack, Checkbox, Pressable } from "native-base";
import TopSign from './components/auth/top';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons/'


const HomeScreen = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView style={styles.rootStyle}>
        <TopSign type={'flex'}/>
        <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Sign Up</Text></View>
      <Box style={{left:26, top:20, marginBottom:40}}>
        
      <FormControl  w="85%"  h='65px'>
        <FormControl.Label style={{fontSize:16}}>Full Name</FormControl.Label>
        <Input fontFamily={'Overpass-Bold'}  fontSize={17} borderRadius={10} focusOutlineColor='#513DB0' placeholder="Enter Name"  style={{width:400,height:65, borderRadius:20}} />
       
      </FormControl>
    </Box>
    <Box style={{left:26, top:30, marginBottom:50}}>
        
      <FormControl  w="85%"  h='65px'>
        <FormControl.Label style={styles.rootStyle}>E-mail</FormControl.Label>
        <Input fontFamily={'Overpass-Bold'} fontSize={17} borderRadius={10} variant="outline" focusOutlineColor='#513DB0' style={{width:400,height:65, borderRadius:20}} placeholder="Enter email" />
       
      </FormControl>
    </Box>
    <Box style={{left:26, top:30, marginBottom:40}}>
        
      <FormControl  w="85%" h='65px' >
        <FormControl.Label>Password</FormControl.Label>
               <Input fontFamily={'Overpass-Bold'} fontSize={17} borderRadius={10} variant="outline" focusOutlineColor='#513DB0'  style={{width:400,height:65, borderRadius:20}}placeholder="Enter password" w={{
        base: "100%",
        md: "100%"}} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
        <Icon as={<FontAwesomeIcon icon ={show ? faEye : faEyeSlash} />} size={5} mr="2" color="muted.400" />
      </Pressable>}  />
       
      </FormControl>
    </Box>
    <Box style={{left:26, top:50,marginBottom:40}}>
        
    <Checkbox shadow={2} value="test" accessibilityLabel="Terms" defaultIsChecked>
    I Agree with BellFast’s terms & conditions
      </Checkbox>
      </Box>
      <Box style={{left:26, top:50}}>
        
      <Button style={{width:360,height:58, backgroundColor:'#513DB0',borderRadius:12,fontSize:15,lineHeight:21}} onPress={() => navigation.navigate('verify')} >Sign Up</Button>
      </Box>
      <HStack style={{ marginTop:70,marginBottom:40,textAlign:'center',justifyContent:'center',fontSize:14,fontWeight:'500'}}>
        
    <Text style={styles.subtitle}> Already have an account?  </Text>  
    <Text onPress={() => navigation.navigate('Login')} style={{color:'#513DB0', fontFamily: 'Overpass-Regular',fontWeight:'500',
    fontSize: 14,}} >
   Login
      </Text>
      </HStack>
      <HStack  space={3} style={{ marginTop:40,marginBottom:40,textAlign:'center',justifyContent:'center',fontSize:14,fontWeight:'500'}}>
      <Divider my="2" color={'#B3B3B3'} />
        <Text style={styles.bottomContainer}> Sign up with  </Text>  
        <Divider my="2" color={'#B3B3B3'} />
          </HStack>
          <HStack style={{ marginTop:0,marginBottom:40,textAlign:'center',justifyContent:'center',fontSize:14,fontWeight:'500'}}>
        
        <Image style={{width:'50%'}} source={require('./components/auth/assets/fb.png')}/>
        <Image source={require('./components/auth/assets/goo.png')}/>
            </HStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootStyle:{
    fontFamily:'Overpass-Black',fontSize:16,backgroundColor:'white'
  },
  itemContainer: {
    display: 'flex',
   position:'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top:15,
    left:26,
    marginBottom: 10,
  }, subtitle: {
    fontFamily: 'Overpass-Regular',
    fontSize: 14,
    color:'#3A3A3A',
  },
  itemText: {
    fontFamily: 'Overpass-Bold',
    fontSize: 36,
    color:'#3A3A3A',
    fontWeight: '600',fontStyle:'bold',
   // lineHeight: 43,
    textAlign:' center',
    
  },
 bottomContainer: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color:'#3A3A3A',
  },
});

export default HomeScreen;