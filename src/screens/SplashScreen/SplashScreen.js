import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../resources/images';
import { colors } from '../../resources/colors';
import styles from './Style';

export default class SplashScreen extends Component {
  render() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);

    return (
      <LinearGradient colors={[colors.white, colors.darkGray]}>
        <ImageBackground
          style={styles.image}
          source={images.logo}
          resizeMode="contain"
        />
      </LinearGradient>
    );
  }
}
