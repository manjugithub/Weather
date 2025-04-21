import { BASE_URL, API_KEY } from '@env';
import axios from 'axios';


export const getService = async (param: String) => {
    const queryString = BASE_URL + 'q=' + param + '&appid=' + API_KEY;
    let response = await axios.get(queryString);
    return response;

};
