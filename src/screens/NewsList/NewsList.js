import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, Text} from 'react-native';
import NewsCard from './NewsCard';
import {strings} from '../../resources/strings';
import styles from './Style';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

function NewsList({route}) {
  const category = route.params.categoryTitle;
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    firestore()
      .collection('Category')
      .doc('uLzkXth3HoYSWg9qF8VR')
      .collection(category)
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
          // console.log('ww:', moment.utc(doc.data().time).fromNow());
          // now = moment(doc.data().time.seconds).fromNow();
          // let duration = moment.duration(now.diff(doc.data().time))
          // console.log('hh:', now);
          data.push({
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            date: doc.data().date,
            // time: moment(doc.data().time.seconds).fromNow(),
            image: doc.data().image,
            summary: doc.data().summary,
            source: doc.data().source,
            link: doc.data().link,
          });
        });
        setDataList(data);
      });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={dataList}
        renderItem={({item}) => <NewsCard news={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default NewsList;
