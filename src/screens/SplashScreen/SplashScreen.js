import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../resources/images';
import { colors } from '../../resources/colors';
import styles from './Style';

export default class SplashScreen extends Component {
  render() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 5000);

    return (
      <View style={styles.safeArea}>
        <LinearGradient colors={["white", "#c4adc0", "#ad93a8",]}>
          <ImageBackground
            style={styles.image}
            source={images.logo}
            resizeMode="contain"
          >
            <Text style={styles.text}>
              Different News - Single Platform
            </Text>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  }
}