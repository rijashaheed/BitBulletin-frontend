import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import NewsCard from './NewsCard';
import {strings} from '../../resources/strings';

function NewsList() {
  return (
    <SafeAreaView>
      <FlatList
        data={strings.newsList.list}
        renderItem={({item}) => <NewsCard news={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default NewsList;
