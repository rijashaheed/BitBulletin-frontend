import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../resources/colors';

export default StyleSheet.create({
  categoryTitle: {
    backgroundColor: colors.red,
    opacity: 0.8,
    padding: wp('5%'),
    textAlign: 'center',
    fontSize: wp('5%'),
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
    flex: 1,
    width: wp('100%'),
    height: hp('30%'),
  },

  textView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },

  imageTextHead: {
    fontSize: wp('4%'),
    color: colors.white,
    fontWeight: 'bold',
    backgroundColor: colors.background,
    paddingLeft: wp('3%'),
    padding: wp('1%')
  },
  imageTextTime: {
    fontSize: wp('3%'),
    color: colors.white,
    backgroundColor: colors.background,
    paddingLeft: wp('3%'),
  },
});
