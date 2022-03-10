import React, { Component } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { images } from '../../resources/images';
import styles from './Style';

export default class SplashScreen extends Component {
  render() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);

    return (
      <ImageBackground
        style={styles.image}
        source={images.logo}
        resizeMode="contain"
      />
    );
  }
}
