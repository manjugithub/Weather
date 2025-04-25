import React from 'react';
import {render} from '@testing-library/react-native';
import CityWeatherDetails from '../components/CityWeatherDetails';
import { WeatherInfo } from '../../../types/weatherInfo'; 

describe('CityWeatherDetails', () => {
  const mockWeather: WeatherInfo = {
    name: 'San Francisco',
    weather: [{ main: 'Cloudy' }],
    main: {
      temp: 18,
      feels_like: 16,
      temp_min: 12,
      temp_max: 21
    }
  };


  it('returns null when weather is null', () => {
    const {toJSON} = render(<CityWeatherDetails weather={null as any} />);
    expect(toJSON()).toBeNull();
  });
});
