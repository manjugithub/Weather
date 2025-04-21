/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable semi */
import { useContext, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import useCityDataFetch from '../helper/helper'
import { CityContext } from '../../../store/contextAPI/CityContext'
import { convertToDegree } from '../../../utils/utils'
import { styles } from './styles'
const CityList = ({ cityName }) => {

	const cityContextManager = useContext(CityContext);
	const cityData =  useCityDataFetch(cityName)
	useEffect(() => {
		cityContextManager.addCity(cityData)
	}, [cityData])


	const WrappedTextComponent = ({ text , value }) => {
		return (
			<Text style={styles.lightText}>{text + '   '}
			<Text style={styles.boldText}>{convertToDegree(value)} </Text>
			</Text>
		)
	}

	const renderItem = ({ item }) => {
		return (
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<View>
						<Text style={{
								...styles.boldText,
								textAlign: 'left',
								fontSize: 20}}>
							{item.name}</Text>
					</View>
					<View>
						<WrappedTextComponent text={'Current Temp'} value={item.main.temp} />
						<WrappedTextComponent text={'Feels Like:'} value={item.main.feels_like} />
					</View>
				</View>

				<View style={styles.tempStyle}>
					<WrappedTextComponent text={'Minimum:'} value={item.main.temp_min} />
					<WrappedTextComponent text={'Maximum:'} value={item.main.temp_max} />
				</View>
			</View>
		)
	}

	return (
		<FlatList data={cityContextManager.cityList}
			horizontal={false}
			keyExtractor={item => item.id}
			style={styles.listStyle}
			renderItem={renderItem} />)
		}

export default CityList
