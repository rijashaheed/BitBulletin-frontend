import React from 'react';
import { Text, Image, View, StyleSheet, Button, Pressable, Linking } from 'react-native';
import { images } from '../../resources/images';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './Style';

const NewsDescription = (props) => {
  const { route } = props;
  const { newsTitle, newsTime, newsAuthor, newsSource, newsImage, newsContent } = route.params
  return (
    <>
      <View>
        <Image
          style={styles.stretch}
          source={newsImage}
        />
      </View>
      <View>
        <Text style={[styles.fonts, styles.heading]}>{newsTitle}</Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.author]}>{newsAuthor}</Text>
          <Text style={[styles.author]}>|</Text>
          <Text style={[styles.author]}>{newsSource}</Text>
        </View>
        <Text style={[styles.time]}>Updated {newsTime} ago</Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={[styles.content]}>{newsContent}</Text>
      </View>
      <View style={[styles.button]}>
        <Pressable
          onPress={() => Linking.openURL('https://www.dawn.com/')}>
          <Text style={[styles.button]}>Read More</Text>
        </Pressable>
      </View>
    </>
  );
};
export default NewsDescription;
