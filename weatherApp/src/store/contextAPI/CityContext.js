import { createContext, useState } from 'react';
import { saveToLocalStorage, getCitiesFromLocal } from '../../utils/utils';
export const CityContext = createContext({
    cityList: [],
    cityName: String,
    addCity: (city) => { },
    getAllCities: () => { },
});

export const CityContextProvider = ({ children }) => {

   
    const [cityList, setCityList] = useState([]);
const [cityName, setCityName] = useState('');

   
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
