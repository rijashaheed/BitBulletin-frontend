import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import NewsList from '../screens/NewsList/NewsList';

function RootNavigation() {
  return (
    <View>
      {/* <SplashScreen /> */}
      <NewsList />
    </View>
  );
}

export default RootNavigation;
