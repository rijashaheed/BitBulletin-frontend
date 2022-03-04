import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../resources/images'
import Search from './Search'
import styles from './Style'

const data = [
  {
    id: 0,
    title: 'Sports',
    icon: <Image source={images.sports} style={styles.icon} />,
  },
  {
    id: 1,
    title: 'Business',
    icon: <Image source={images.business} style={styles.icon} />
  },
  {
    id: 2,
    title: 'Tech',
    icon: <Image source={images.tech} style={styles.icon} />
  },
]

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();
  return (
    <View style={styles.safeArea}>
      <View style={styles.searchContainer}>
        <Search value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.categoryContainer}>
        <View style={styles.categoryInnerContainer}>
          {data
            .sort((a, b) => a.title.localeCompare(b.title))
            .filter(list =>
              list.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.categoryItemView}
                onPress={() =>
                  navigation.navigate('NewsList', { categoryTitle: item.title })
                }>
                <View>
                  <View style={styles.categoryImage}>
                    {item.icon}
                  </View>
                  <Text style={styles.categoryTitle}>
                    {item.title}
                  </Text>
                </View>

              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  )
}

