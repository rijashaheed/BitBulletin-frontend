import React from 'react';
import {Text,Image, View,StyleSheet} from 'react-native';

const NewsDescription =()=>{
	return(
		<>
		<View>
			<Text>News Description</Text>
	</View>
		<View>
		<Image
	  source={{ uri: 'asset:/news.jpg' }}
	  style={{ width: 250, height: 250 }}/>
	</View>
	<View>
		<Text style={[styles.fonts]}>Something News</Text>
	</View>
	<View>
		<Text style={[styles.margins]}>Ali Ahmed | Dawn.com</Text>
		<Text style={[styles.margins]}>Updated 3 hours ago</Text>
	</View>	
	</>
	)
}
const styles = StyleSheet.create({
	fonts:{
		fontSize: 20,
		fontWeight: 'bold',
		backgroundColor: 'blue'
	},
	margins:{
		margin: 10,
		backgroundColor: 'yellow'
	}
})
export default NewsDescription;