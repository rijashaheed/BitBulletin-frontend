import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
import styles from './Style'

export default function Search(props) {
  const { onChangeText, value } = props;
  return (

    <View style={styles.searchInnerContainer}>
      <SearchBar
        inputStyle={{ color: 'black' }}
        containerStyle={{
          width: '90%',
          borderRadius: 10,
        }}
        searchIcon={{ color: 'black', 
        // size: RFValue(20)
         }}
        placeholderTextColor={'black'}
        placeholder={'Search'}
        onChangeText={onChangeText}
        value={value}
        clearIcon={{
          iconStyle: { color: 'black' }
        }}
        lightTheme={true}
      />
    </View>
  );
}
