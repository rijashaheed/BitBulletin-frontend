import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../resources/images'
import styles from './Style'
import { Searchbar } from 'react-native-paper';

const data = [
  {
    id: 0,
    title: 'Sports',
    // icon: <ImageBackground source={images.sports} style={styles.icon} />,
    icon: images.sports,
  },
  {
    id: 1,
    title: 'Business',
    // icon: <ImageBackground source={images.business} style={styles.icon} />
    icon: images.business,
  },
  {
    id: 2,
    title: 'Tech',
    // icon: <ImageBackground source={images.tech} style={styles.icon} />
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
            placeholder="Search"
            onChangeText={text => {
              setSearch(text);
            }}
            value={search} />
        </View>
      </View>

      {/* <View style={styles.categoryContainerBox}> */}
      <ScrollView contentContainerStyle={styles.categoryContainerBox}>
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
                {/* <View> */}
                {/* <View style={styles.categoryImage}> */}
                <ImageBackground source={item.icon} style={styles.categoryImage}>
                  <Text style={styles.categoryTitle}>
                    {item.title}
                  </Text>
                </ImageBackground>
                {/* </View> */}

                {/* </View> */}

              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
      {/* </View> */}
    </View>
  )
}

