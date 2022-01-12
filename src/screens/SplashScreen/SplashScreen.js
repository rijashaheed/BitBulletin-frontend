import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {images} from '../../resources/images';
import styles from './Style';

export default class SplashScreen extends Component {
  render() {
    const {navigation} = this.props;

    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);

    return (
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={images.logo} />
      </View>
    );
  }
}
