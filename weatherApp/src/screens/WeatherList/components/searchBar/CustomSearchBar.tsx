import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {styles} from "./styles";
import {useDebounce} from "../../../../hooks/useDebaounce";


interface SearchBarProps {
	value: string;
	onChangeText: (text : string) => void;
	onSubmit: (text : string) => void;
	placeholder?: string;
}

const CustomSearchBar =  ({
	value,
	onChangeText,
	onSubmit,
	placeholder = 'Search...'
} : SearchBarProps) => {
    const [searchText, setSearchText] = useState(value);
	const debouncedValue = useDebounce(searchText, 2000);

	useEffect(() => {
		onChangeText(debouncedValue);
		if (debouncedValue.trim()) { 
             onSubmit(debouncedValue);
		}
	}, [debouncedValue]);

	const handleChangeText = (text : string) => {
		setSearchText(text);
	};

	const handleClear = () => {
		setSearchText('');
		onChangeText('');
	};

	const handleSubmit = () => {
		if (searchText.trim()) {
			onSubmit(searchText);
		}
	};

	return (
		<View style={
			styles.sectionContainer
		}>
			<TextInput style={
					styles.textField
				}
				value={searchText}
				onChangeText={handleChangeText}
				onSubmitEditing={handleSubmit}
				placeholder={placeholder}
				returnKeyType="search"
				autoCapitalize="words"
				autoCorrect={false}/>
                <TouchableOpacity style ={styles.clearButton}
                onPress={handleClear}
                ><Text>{'clear'}</Text></TouchableOpacity>
		</View>
	)
}

export default CustomSearchBar;
