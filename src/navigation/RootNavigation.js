import React from 'react';
import {View, Image, Text} from 'react-native';
import NewsDescription from '../screens/NewsDescription/NewsDescription';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function RootNavigation() {
  return (
    <View>
      <NewsDescription />
      {/* <Text>hii</Text>  */}
    </View>
    
 );
    }
