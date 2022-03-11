import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../resources/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  searchContainer: {
    // marginBottom: wp('2%'),
    backgroundColor: colors.red,
    // opacity: 0.8,
  },

  categoryContainerBox: {
    padding: wp('5%'),
    alignItems: 'flex-start',
  },

  categoryContainer: {
    // flexGrow: 1,
    // alignItems: 'flex-start',
  },

  categoryInnerContainer: {
    // alignItems: 'center',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  categoryItemView: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    borderWidth: 1,
    borderRadius: wp('3%'),
    borderColor: colors.red,

    // shadowColor: colors.red,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 1.84,
    // elevation: 2,

    padding: wp('4%'),
    marginBottom: wp('4%'),
    marginHorizontal: wp('2%'),
    // paddingHorizontal: wp('3%'),
    // paddingEnd: wp('3%'),
    // alignItems: 'center',
    // paddingVertical: 15,
    // justifyContent: 'space-between'
  },

  categoryTitle: {
    fontWeight: 'bold',
    color: colors.red,
    // fontSize: RFValue(15),
    fontSize: wp('4%'),
    // fontWeight: 'bold',
    // padding: RFValue(5),
    // padding: wp('1%'),
    // opacity: 0.8,
    // textAlign: 'center',
  },

  categoryImage: {
    // flex: 1,
    // shadowColor: colors.red,
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.39,
    // shadowRadius: 8.30,
    // elevation: 13,
    width: wp('32%'),
    // height: RFPercentage(20),
    height: hp('20%'),
    // zIndex: '-1',
  },

  // icon: {
  //   // flex: 1,
  //   // width: RFPercentage(20),
  //   width: wp('25%'),
  //   // height: RFPercentage(20),
  //   height: hp('20%'),
  // },


  searchInnerContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: wp('0.5%'),
    padding: wp('2%'),
  },
});
