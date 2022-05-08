import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
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

  // const users = firestore().collection('Category');

  useEffect(() => {
    const authorsCollection = firestore()
      .collection('Category')
      .get()
      .then(snapshot => {
        console.log('Total users: ', snapshot.size);

        snapshot.forEach(doc => {
          console.log('User ID: ', doc.id, doc.data());
        });
      });
    // firebase
    //   .firestore()
    //   .collection('Category')
    //   // .doc(userId)
    //   .get()
    //   .onSnapshot(documentSnapshot => {
    //     console.log('User data: ', documentSnapshot.data());
    //   });
  }, []);

  return (
    <TouchableOpacity
      key={news.id}
      onPress={() =>
        navigation.navigate('NewsDescription', {
          newsTitle: news.title,
          newsTime: news.time,
          newsAuthor: news.author,
          newsSource: news.source,
          newsImage: news.image,
          newsContent: news.content,
        })
      }>
      <View style={style.overlay}>
        <View style={style.container}>
          <ImageBackground
            style={style.coverImage}
            source={news.image}
            // eslint-disable-next-line react-native/no-inline-styles
            imageStyle={{opacity: 0.9, backgroundColor: colors.red}}>
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
