import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../resources/colors';


export default StyleSheet.create({
	fonts: {
	  fontSize: 20,
	  fontWeight: 'bold'
	},
	heading: {
	  margin: 12,
	  marginHorizontal: 16,
	},
	author: {
		margin: 1,
		marginHorizontal: 16,
	},
	content: {
		margin: 20,
		marginHorizontal: 16,
	  },
	  time:{
		marginBottom: 20,
		marginBottom: 0.5,
		marginHorizontal: 16
	},
	stretch: {
	  width: 400,
	  height: 250,
	  justifyContent: 'center',
	  alignItems: 'center',
	  opacity: 0.3,
	},
	button:{
		color: 'white',
		backgroundColor: '#D41515',
		marginTop: 5,
		marginBottom: 5,
		margin: 85,
		textAlign: 'center',
		width: '50%',
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	icon:{
		color: '#D41515',
		margin: 5 
	}
  });