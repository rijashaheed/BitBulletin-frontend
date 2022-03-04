import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../resources/colors';

export default StyleSheet.create({
  categoryTitle: {
    backgroundColor: colors.red,
    opacity: 0.8,
    padding: RFValue(20),
    textAlign: 'center',
    fontSize: RFValue(30),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.white
  },

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
