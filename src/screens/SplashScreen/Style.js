import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../resources/colors';

export default StyleSheet.create({
  image: {
    width: wp('100%'),
    height: hp('100%'),
  },
  safeArea: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: colors.black,
    marginTop: wp('125%'),
    opacity: 0.8, 
    fontStyle: 'italic',
  }
});
