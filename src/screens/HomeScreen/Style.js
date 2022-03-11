import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../resources/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
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
    padding: wp('1%'),
    marginBottom: wp('4%'),
  },

  categoryImage: {
    alignItems: 'flex-end',
    marginTop: wp('2%'),
    marginBottom: wp('1%'),
    marginLeft: wp('12%'),
    width: wp('60%'),
    height: hp('25%'),
  },

  categoryTitle: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: wp('4%'),
    textTransform: 'uppercase',
    padding: wp('2%'),
  },

  

  
});
