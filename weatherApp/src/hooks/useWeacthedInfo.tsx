import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { WeatherInfo } from '../types/weatherInfo'; 
import { BASE_URL, API_KEY } from '@env';


export function useWeatherInfo() {
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearched, setLastSearched] = useState<string | null>(null);

  // Load last searched city on mount

  const fetchWeather = async (city: string) => {
  
    // If not in cache or cache expired, make the API call
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });

      const weatherData = response.data;
      // Update the state with the new data
      setWeather(weatherData);    
      // Save to recent searches
      setLastSearched(city);

    } catch (err) {
      let errorMessage = 'Failed to fetch weather data';
      
      if (axios.isAxiosError(err)) {
          errorMessage = `City "${city}" not found.`;
      }
      
      setError(errorMessage);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    weather,
    loading,
    error,
    fetchWeather,
    lastSearched,
  };
}