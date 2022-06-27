import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, Text} from 'react-native';
import NewsCard from './NewsCard';
import {strings} from '../../resources/strings';
import styles from './Style';
import firestore from '@react-native-firebase/firestore';

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
        // console.log('Total users: ', snapshot.size);
        snapshot.forEach(doc => {
          data.push({
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            date: doc.data().date,
            time: doc.data().time,
            image: doc.data().image,
            summary: doc.data().summary,
            source: doc.data().source,
          });
          // console.log('User ID: ', doc.id, doc.data());
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
