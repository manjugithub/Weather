/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import WeatherListScreen from '../src/screens/WeatherList/WeatherListScreen';
import { CityContextProvider } from './store/contextAPI/CityContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <CityContextProvider>
        <WeatherListScreen />
      </CityContextProvider>

    </SafeAreaView>
  );
}
export default App;
