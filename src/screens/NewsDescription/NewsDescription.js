import React from 'react';
import { Text, Image, View, Button, Linking, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../resources/colors';
import styles from './Style';

const NewsDescription = (props) => {
  const { route } = props;
  const { newsTitle, newsTime, newsAuthor, newsSource, newsImage, newsSummary } = route.params
  return (
    <ScrollView>
      <Image
        style={styles.newsImage}
        source={{uri: newsImage}}
      />
      <View style={styles.newsBox}>
        <Text style={[styles.newsTitle]}>{newsTitle}</Text>
        <View style={styles.newsMetadata}>
          <View style={styles.metaData}>
            <Text style={[styles.text]}>{newsAuthor}</Text>
            <Text style={[styles.text]}>|</Text>
            <Text style={[styles.text]}>{newsSource}</Text>
          </View>
          <Text style={[styles.newsTime]}>Updated {newsTime} ago</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={[styles.newsContent]}>{newsSummary}</Text>
        </View>
      </View>
      <View style={[styles.button]}>
        <Button
          title='Read Full Article'
          color={colors.red}
          onPress={() => Linking.openURL('https://www.dawn.com/')}
        />
      </View>
    </ScrollView>
  );
};
export default NewsDescription;
