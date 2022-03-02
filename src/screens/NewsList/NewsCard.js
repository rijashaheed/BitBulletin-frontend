import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import style from './Style';

function NewsCard({news}) {
  return (
    <View style={style.overlay}>
      <View style={style.container}>
        <ImageBackground
          style={style.coverImage}
          source={{
            uri: `${news.image} `,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          imageStyle={{opacity: 0.9, backgroundColor: 'red'}}>
          <View style={style.textView}>
            <Text style={style.imageTextHead}>{news.title}</Text>
            <Text style={style.imageTextTime}>updated {news.time} ago</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

export default NewsCard;
