import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  text: {
    textAlign: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    width: RFPercentage(65),
  },
});
