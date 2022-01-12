/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
// import {SplashScreen} from '../screens/SplashScreen';

import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <SplashScreen />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={screenOptions}
    //     initialRouteName="SplashScreen">
    //     <Stack.Screen name="SplashScreen" component={SplashScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
