import React, {useEffect, useState} from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import NewsCard from './NewsCard';
import { strings } from '../../resources/strings';
import styles from './Style'
import firestore from '@react-native-firebase/firestore';


function NewsList({route}) {
  const category = route.params.categoryTitle ;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState();
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    firestore().collection('Category').doc('uLzkXth3HoYSWg9qF8VR').collection(category).get().then(snapshot => {
        // console.log('Total users: ', snapshot.size);
        snapshot.forEach(doc => {
          setTitle(doc.data().title)
          setAuthor(doc.data().author)
          setDate(doc.data().data)
          setTime(doc.data().time)
          setImage(doc.data().image)
          setSummary(doc.data().summary)
          setSource(doc.data().source)
          // console.log('User ID: ', doc.id, doc.data());
        });
      });
  }, []);

  let data = [{title:title, author:author, date:date, time:time, summary:summary, image:image, source:source}]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data= {data}
        renderItem={({ item }) => <NewsCard news={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default NewsList;
