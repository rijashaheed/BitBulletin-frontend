import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import NewsCard from './NewsCard';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../components/loader';

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
          data.push({
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            date: doc.data().date,
            time: doc.data().time,
            image: doc.data().image,
            summary: doc.data().summary,
            source: doc.data().source,
            link: doc.data().link,
          });
        });
        console.log("data", data);
        setDataList(data);
      });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      {dataList.length < 1? <Loader/>: <FlatList
        data={dataList}
        renderItem={({item}) => <NewsCard news={item} />}
        keyExtractor={item => item.id}
      /> }
    </SafeAreaView>
  );
}

export default NewsList;
