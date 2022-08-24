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
// import firestore from '@react-native-firebase/firestore';
// import app from '../../resources/firebase';
// import {firebase} from '../../resources/firebase';
import firestore from '@react-native-firebase/firestore';

function NewsCard({news}) {
  const navigation = useNavigation();
  const newsSaved = useState({})

  // const users = firestore().collection('Category');
  return (
    // <Loader/>
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
              <Text style={style.imageTextTime}>Updated {new Date(news?.time?.seconds*1000||news?.time?._seconds*1000).toDateString()} ago</Text>
            </View>


          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
    
    </View>
  );
}

export default NewsCard;
