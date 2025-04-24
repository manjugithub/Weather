import { createContext, useState } from 'react';
import { saveToLocalStorage, getCitiesFromLocal } from '../../utils/utils';

import { WeatherInfo } from '../../types/weatherInfo'; 

export const CityContext = createContext({
    cityName: String | undefined,
    updateCityName: (city) => { },
});

export const CityContextProvider = ({ children }) => {
    const [cityName, setCityName] = useState('');

    const updateCityName = (city) => {
        if (city !== null) {
            setCityName(city.name);
        }
    };

    const value = {
        cityName: cityName,
        updateCityName: updateCityName,
    };

    return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};
