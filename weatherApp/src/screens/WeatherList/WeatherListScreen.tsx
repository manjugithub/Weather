import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useWeatherInfo} from '../../hooks/useWeacthedInfo';
import CustomSearchBar from './components/searchBar/CustomSearchBar';
import CityWeatherDetails from './components/CityWeatherDetails';
import {getCitiesFromLocal, saveToLocalStorage} from '../../utils/utils';
import { styles } from '../WeatherList/styles';
import { CityContext } from '../../store/contextAPI/CityContext';

const WeatherListScreen = () => {

	const contxtObj = useContext(CityContext);

	const [searchQuery, setSearchQuery] = useState<String>(contxtObj.cityName);
	const {
		weather,
		loading,
		error,
		fetchWeather,
		lastSearched
	} = useWeatherInfo();
	
	const handleSearch = (city : string) => {
		if (lastSearched !== city) {
			contxtObj.updateCityName(city);
			fetchWeather(city);
			saveToLocalStorage(city);
		}
	};

	useEffect(() => {
		const getsavedCity = async () => {
			let city = await getCitiesFromLocal();
			if(city !== ''){
				setSearchQuery(city);
				handleSearch(city);
			}
		} 		
		getsavedCity();
	}, [])


	return (
		<View>
			<CustomSearchBar value={searchQuery}
				onChangeText={setSearchQuery}
				onSubmit={handleSearch}
				placeholder="Search for a city..."/> {
			loading ? <View style={
				styles.errorDisplay
			}>
				<Text>Loading …</Text>

			</View> : error ? <View style={
				styles.errorDisplay
			}>
				<Text>{error}</Text>

			</View> : <CityWeatherDetails weather={weather}/>
		} </View>
	);
};


export default WeatherListScreen;
