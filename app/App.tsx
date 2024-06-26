/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {useEffect }from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, 
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './Screens/OnboardingScreen'
import HomeScreen from './Screens/Homescreen';
import LoginScreen from './Screens/Auth/Login';
import ForgotPassword from './Screens/Auth/ForgotPassword';
import VerifyScreen from './Screens/Auth/Verification';
import SetPasswordScreen from './Screens/Auth/NewPassword';
import JoinScreen from './Screens/AccountSetup/join';
import SetPhoneScreen from './Screens/AccountSetup/phonenumber';
import { Input,  NativeBaseProvider } from "native-base";
const Stack = createStackNavigator();




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState<boolean>();

  useEffect(() => {(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  })()
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched ==true && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
         
          <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
            />
             <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              name="reset"
              component={ForgotPassword}
            />
             <Stack.Screen
              name="erify"
              component={VerifyScreen}
            />
             <Stack.Screen
              name="SetPassword"
              component={SetPasswordScreen}
            />
              <Stack.Screen
              name="JoinAs"
              component={JoinScreen}
            />
                 <Stack.Screen
              name="SetPhoneScreen"
              component={SetPhoneScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
