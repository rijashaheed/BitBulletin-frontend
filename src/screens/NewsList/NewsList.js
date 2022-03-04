import React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import NewsCard from './NewsCard';
import { strings } from '../../resources/strings';
import styles from './Style'

function NewsList(props) {
  const { route } = props;
  const { categoryTitle } = route.params
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.categoryTitle}>{categoryTitle}</Text>
      <FlatList
        data={strings.newsList.list}
        renderItem={({ item }) => <NewsCard news={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default NewsList;
