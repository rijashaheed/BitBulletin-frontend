import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colors } from '../../resources/colors';


export default StyleSheet.create({
	fonts: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	heading: {
		margin: 12,
		marginHorizontal: 16,
		color: colors.black,
	},
	author: {
		margin: 1,
		marginHorizontal: 16,
	},
	content: {
		color: colors.black,
		margin: 20,
		marginHorizontal: 15,
		textAlign: "justify",
		alignContent: "center",


	},
	time: {
		marginBottom: 20,
		marginBottom: 0.5,
		marginHorizontal: 16
	},
	stretch: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		color: colors.white,
		backgroundColor: colors.red,
		marginTop: 5,
		marginBottom: 5,
		margin: 85,
		textAlign: 'center',
		width: '50%',
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		borderColor: colors.red,
		fontWeight: "bold",
		borderRadius: 3,
	},
	icon: {
		color: colors.red,
		margin: 5
	},
	contentBox: {
		minHeight: "40%",
	}
});