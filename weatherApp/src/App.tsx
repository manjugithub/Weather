/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import WeatherListScreen from '../src/screens/WeatherList/WeatherListScreen';
import { CityContextProvider } from './store/contextAPI/CityContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =   createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
      <CityContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="weatherList" component={WeatherListScreen}/>
      </Stack.Navigator>
      </CityContextProvider>
      </NavigationContainer>
    </>
  );
}
export default App;
