import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewsList from '../screens/NewsList/NewsList';
import NewsDescription from '../screens/NewsDescription/NewsDescription';


export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewsList" component={NewsList} />
        <Stack.Screen name="NewsDescription" component={NewsDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
