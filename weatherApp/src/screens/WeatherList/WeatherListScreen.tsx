/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, {useContext, useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import CityList from './components/CityList';
import {CityContext} from '../../store/contextAPI/CityContext';
import { styles } from './styles'


const WeatherListScreen = () => {

	const cityContextManager = useContext(CityContext);
	const [searchText, setSearchText] = useState('');
	const [cityName, setCityName] = useState < String >('');

	useEffect( () => {
		const getLastCityName = async ()=>{
			await cityContextManager.getLastCityName();
			setCityName(cityContextManager.cityName);
		};
		getLastCityName();

	}, [cityContextManager]);

	return (
		<View>
			<View style={styles.sectionContainer}>
				<TextInput placeholder="Enter city name here ..."
					onSubmitEditing={
						() => {setCityName(searchText);}
					}
					returnKeyType="search"
					style={	styles.textField}
					value={searchText}
					onChangeText={
						(text) => {setSearchText(text);}
				} />
	</View>
	{cityName !== '' ? <CityList cityName={cityName}/> : <></>}

</View>
	);
};


export default WeatherListScreen;
