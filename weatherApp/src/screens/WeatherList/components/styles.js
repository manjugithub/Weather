import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	boldText: {
		fontWeight: '900',
		textAlign: 'right',
	},
	container: {
		borderRadius: 10,
		margin: 10,
		borderColor: 'black',
		borderWidth: 1,
	},
	innerContainer: {
		height: 40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		marginTop: 5,
	},
	tempStyle: {
		height: 30,
		paddingHorizontal: 10,
		flexDirection: 'row',
		marginTop: 5,
		justifyContent: 'space-between',
	},
	lightText: {
		fontWeight: '300',
		textAlign: 'right',
	},
    listStyle:{
        width: '100%',
        height: '100%',
        backgroundColor: 'lightblue'},
});
