import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const getCitiesFromLocal = async () => {
    try {
        const cityName = await AsyncStorage.getItem('cityKey');
        return cityName !== null ? JSON.parse(cityName) : '';
    } catch (e) {
        return '';
    }
};

export const saveToLocalStorage = async (cityName : String) => {
    try {
        const jsonValue = JSON.stringify(cityName);
        await AsyncStorage.setItem('cityKey', jsonValue);
    } catch (e) {
        // saving error
        Alert.alert('Couldnt save data')
    }
};