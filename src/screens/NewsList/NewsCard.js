import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import style from './Style';

function NewsCard({ news }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={news.id}
      onPress={() =>
        navigation.navigate('NewsDescription', { newsTitle: news.title, newsTime: news.time, newsAuthor: news.author, newsSource: news.source, newsImage: news.image, newsContent: news.content })
      }>
      <View style={style.overlay}>
        <View style={style.container}>
          <ImageBackground
            style={style.coverImage}
            source={news.image}
            // eslint-disable-next-line react-native/no-inline-styles
            imageStyle={{ opacity: 0.9, backgroundColor: 'red' }}>
            <View style={style.textView}>
              <Text style={style.imageTextHead}>{news.title}</Text>
              <Text style={style.imageTextTime}>Updated {news.time} ago</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>

  );
}

export default NewsCard;
