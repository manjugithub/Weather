/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import CityList from './components/CityList';
import {CityContext} from '../../store/contextAPI/CityContext';


const WeatherListScreen = () => {

	const cityContextManager = useContext(CityContext);

	const [searchText, setSearchText] = useState('');
	const [cityName, setCityName] = useState < String >('');

	useEffect( () => {
		const getAllCities = async ()=>{
			await cityContextManager.getAllCities();
			setCityName(cityContextManager.cityName);
		};

		getAllCities();

	}, [cityContextManager]);

	return (
		<View>
			<View style={
				styles.sectionContainer
			}>
				<TextInput placeholder="Enter city name here ..."
					onSubmitEditing={
						() => {
							setCityName(searchText);
						}
					}
					returnKeyType="search"
					style={
						{
							width: '90%',
							height: '100%',
							marginHorizontal: '5%'
						}
					}
					value={searchText}
					onChangeText={
						(text) => {
							setSearchText(text);
						}
				} />
	</View>
	{
	cityName !== '' ? <CityList cityName={cityName}/> : <></>
	}

</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 64,
		height: 44,
		marginHorizontal: 5,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default WeatherListScreen;
