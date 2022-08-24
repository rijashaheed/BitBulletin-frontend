import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/loader';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import style from './Style';
import {colors} from '../../resources/colors';

function NewsCard({news}) {
  const navigation = useNavigation();
  return (
    <View>
    <TouchableOpacity
      key={news.id}
      onPress={() =>
        navigation.navigate('NewsDescription', {
          newsTitle: news.title,
          newsTime: news.time,
          newsAuthor: news.author,
          newsSource: news.source,
          newsImage: news.image,
          newsSummary: news.summary,
          newsLink: news.link,
        })
      }>
      <View style={style.overlay}>
        <View style={style.container}>
          <ImageBackground
            style={style.coverImage}
            source={{uri: news.image}}
            // eslint-disable-next-line react-native/no-inline-styles
            imageStyle={{opacity: 0.9, backgroundColor: colors.red}}>
            <View style={style.textView}>
              <Text style={style.imageTextHead}>{news.title}</Text>
              <Text style={style.imageTextTime}>Updated on {new Date(news?.time?.seconds*1000||news?.time?._seconds*1000).toDateString()}</Text>
            </View>


          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
    
    </View>
  );
}

export default NewsCard;
