import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../resources/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },

  searchContainer: {
    backgroundColor: colors.red,
  },

  searchInnerContainer: {
    padding: wp('5%'),
  },

  searchBar: {
    borderRadius: wp('6%'),
  },

  categoryContainerBox: {
    padding: wp('5%'),
    alignItems: 'center',
  },

  categoryItemView: {
    borderWidth: 2,
    borderRadius: wp('5%'),
    borderColor: colors.red,
    marginBottom: wp('6%'),
  },

  categoryImage: {
    alignItems: 'flex-end',
    width: wp('52%'),
    height: hp('20%'),
  },

  categoryTitle: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: wp('4%'),
    textTransform: 'uppercase',
    padding: wp('2%'),
  },  
});
