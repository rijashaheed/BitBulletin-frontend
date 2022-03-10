import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewsList from '../screens/NewsList/NewsList';
import NewsDescription from '../screens/NewsDescription/NewsDescription';
import { colors } from '../resources/colors';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: true,
};

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="SplashScreen">

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NewsList"
          component={NewsList}
          options={({ route }) => ({
            title: route.params.categoryTitle,
            headerStyle: {
              backgroundColor: colors.red,
            },
            headerTitleStyle: {
              textTransform: 'uppercase',
            },
            headerTintColor: colors.white
          })}
        />

        <Stack.Screen
          name="NewsDescription"
          component={NewsDescription}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.red,
            },
            headerTintColor: colors.white
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
