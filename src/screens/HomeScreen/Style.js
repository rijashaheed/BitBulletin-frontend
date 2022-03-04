import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../resources/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  searchContainer: {
    marginBottom: 10,
    backgroundColor: colors.red,
    opacity: 0.8,
  },

  categoryContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },

  categoryInnerContainer: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  categoryItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'space-between'
  },

  categoryTitle: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: RFValue(15),
    fontWeight: 'bold',
    padding: RFValue(5),
    opacity: 0.8,
    textAlign: 'center',
  },

  categoryImage: {
    flex: 1,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },

  icon: {
    flex: 1,
    width: RFPercentage(20),
    height: RFPercentage(20),
  },


  searchInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: RFValue(10),
  },
});
