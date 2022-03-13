import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import NewsCard from './NewsCard';
import { strings } from '../../resources/strings';
import styles from './Style'

function NewsList() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={strings.newsList.list}
        renderItem={({ item }) => <NewsCard news={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default NewsList;
