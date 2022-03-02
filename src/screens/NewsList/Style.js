import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  textView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageTextHead: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#00000087',
    paddingLeft: 6,
  },
  imageTextTime: {
    fontSize: 13,
    color: 'white',
    backgroundColor: '#00000087',
    paddingLeft: 6,
  },
});
