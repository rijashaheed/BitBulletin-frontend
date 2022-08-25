import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../resources/images'
import styles from './Style'
import { Searchbar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../resources/colors';

const data = [
  {
    id: 0,
    title: 'Sports',
    icon: images.sports,
  },
  {
    id: 1,
    title: 'Business',
    icon: images.business,
  },
  {
    id: 2,
    title: 'Tech',
    icon: images.tech,
  },
]

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  return (
    
    <View style={styles.safeArea}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInnerContainer}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={text => {
              setSearch(text);
            }}
            value={search} />
        </View>
      </View>

      {/* <LinearGradient colors={["white", "#c4adc0", "#ad93a8", ]}> */}
      <ScrollView contentContainerStyle={styles.categoryContainerBox}>
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
              <ImageBackground source={item.icon} style={styles.categoryImage} />
              <Text style={styles.categoryTitle}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      {/* </LinearGradient> */}
    </View>
    
  )
}

