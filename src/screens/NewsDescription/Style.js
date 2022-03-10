import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../resources/colors';


export default StyleSheet.create({
	newsImage: {
		width: wp('100%'),
		height: hp('30%'),
		justifyContent: 'center',
		alignItems: 'center',
	},

	newsBox: {
		margin: wp('5%'),
	},

	newsTitle: {
		fontSize: wp('6%'),
		fontWeight: 'bold',
		color: colors.black,
	},

	newsMetadata: {
		padding: wp('1%'),
		paddingBottom: wp('2%'),
	},

	metaData: {
		flexDirection: 'row',
	},

	text: {
		padding: wp('1%'),
	},

	newsTime: {
		padding: wp('0.5%'),
	},

	contentBox: {
		minHeight: hp('30%'),
	},

	newsContent: {
		color: colors.black,
		textAlign: "justify",
	},

	button: {
		marginHorizontal: wp('20%'),
		padding: wp('2%'),
		paddingBottom: wp('5%'),
	},

});