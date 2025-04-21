import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CityContext = createContext({
    cityList: [],
    cityName: String,
    addCity: (city) => { },
    getAllCities: () => { },
});

export const CityContextProvider = ({ children }) => {

    const getCitiesFromLocal = async () => {
        try {
            const cityName = await AsyncStorage.getItem('cityKey');
            return cityName !== null ? JSON.parse(cityName) : '';
        } catch (e) {
            return '';
        }
    };
    const [cityList, setCityList] = useState([]);
const [cityName, setCityName] = useState('');

    const saveToLocalStorage = async (cityName) => {

        try {
            const jsonValue = JSON.stringify(cityName);
            await AsyncStorage.setItem('cityKey', jsonValue);
        } catch (e) {
            // saving error
            console.log('Saving failed');
        }



    };
    const addCity = (city) => {
        if (city !== null) {
            setCityList([city, ...cityList]);
            setCityName(city.name);
            saveToLocalStorage(city.name);
        }
    };

    const getAllCities = async () => {
        setCityName(await getCitiesFromLocal());
    };

    const value = {
        cityList: cityList,
        cityName: cityName,
        addCity: addCity,
        getAllCities: getAllCities,
    };

    return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};
