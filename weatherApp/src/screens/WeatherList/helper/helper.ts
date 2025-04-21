/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from 'react';
import { getService } from '../../../webServiceManager/api';
import { Alert } from 'react-native';

const useCityDataFetch = (city: String) => {
    const [cityData, setCityData] = useState(null);
    const [cityName, setCityName] = useState<String>('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getService(city);
                let data = response.data;
                setCityData(data);
            }
            catch (e: any) {
                Alert.alert('Please entery valid cisty / country / state');
            }
        };

        if (cityName !== city) {
            setCityName(city);
            fetchData();
        }
    }, [city]);

    return cityData;
};

export default useCityDataFetch;
