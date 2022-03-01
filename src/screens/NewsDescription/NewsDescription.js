import React from 'react';
import {Text, Image, View, StyleSheet, Button,Pressable,Linking} from 'react-native';
import {images} from '../../resources/images';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style';

const NewsDescription = () => {
  return (
    <>
    <View>
      <Icon name ="arrow-left" size={20}
      style={styles.icon}
      >
      </Icon>
    </View>
      <View >
        <Image
          style={styles.stretch}
          source={images.coronavirus}
          // eslint-disable-next-line react-native/no-inline-styles
        />
      </View>
      <View>
        <Text style={[styles.fonts,styles.heading]}>CORONAVIRUS PANDEMIC</Text>
      </View>
      <View>
        <Text style={[styles.author]}>Ali Ahmed | Dawn.com</Text>
        <Text style={[styles.time]}>Updated 38 minutes ago</Text>
      </View>
      <View>
        <Text style={[styles.content]}>The World Health Organisation has said that UN-backed programme shipping coronavirus vaccines to many poor countries has now delivered 1 billion doses, but that milestone is only a reminder of the work that remains after hoarding and stockpiling in rich countries, AP reports.
A shipment of 1.1 million Covid-19 vaccine doses to Rwanda on Saturday included the billionth dose supplied via the Covax programme. The World Health Organisation has said that UN-backed programme shipping coronavirus vaccines to many poor countries has now delivered 1 billion doses, but that milestone is only a reminder of the work that remains after hoarding and stockpiling in rich countries, AP reports.
</Text>
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
