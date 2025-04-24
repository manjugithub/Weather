
import {  Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { WeatherInfo } from '../../../types/weatherInfo'


interface WeatherDisplayProps {
	weather: WeatherInfo;
  }
const CityWeatherDetails =({ weather }: WeatherDisplayProps) =>{
		

	const WrappedTextComponent = ({ text , value }) => {
		return (
			<Text style={styles.lightText}>{text + '   '}
			<Text style={styles.boldText}>{value}
			<Text style={styles.lightText}>{' deg'} </Text>
			</Text>
			</Text>
		)
	}

	const WeatherTextComponent = ({ text , value }) => {
		return (
			<Text style={styles.lightText}>{text + '   '}
			<Text style={styles.boldText}>{value} </Text>
			</Text>
		)
	}

	if(weather === null) { return null;}

	return (
		<TouchableOpacity style={styles.container}>
				<View style={styles.innerContainer}>
					<View>
						<Text style={styles.boldTextLeftAlign}>
							{weather.name}</Text>
							<WeatherTextComponent text={'Weather: '} value={weather.weather[0]?.main} />

					</View>
					<View>
						<WrappedTextComponent text={'Current Temp'} value={weather.main.temp} />
						<WrappedTextComponent text={'Feels Like:'} value={weather.main.feels_like} />
					</View>
				</View>

				<View style={styles.tempStyle}>
					<WrappedTextComponent text={'Minimum:'} value={weather.main.temp_min} />
					<WrappedTextComponent text={'Maximum:'} value={weather.main.temp_max} />
				</View>
			</TouchableOpacity>)
		}

export default CityWeatherDetails
