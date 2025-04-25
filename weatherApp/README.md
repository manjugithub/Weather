This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

## Not configured for android
<!-- ```sh
# Using npm
npm run android

# OR using Yarn
yarn android
``` -->

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

### useDebounce 
 - Takes value (generic) and time interval to hold the refresh and also clears the timer if hook is invoked again.

### useWeatherInfo 
 - Responsible for making an API call and return the desired weather data.
 - gives control to handle the API invoking states and also error handling

 ### CustomSearchBar
 - Custom component, responsible for user input and debounce, 
 - handles the callback methods to return the searching string (city) to its parent component

### CityWeatherDetails
- Controller component, resposnsible for displaying the weather information passed from its parent component

 ### WeatherListScreen
- Main component, handles the two components Searchbar and city weather display 
- Also responsible for fething the city name from Context API and updating the same.
- Takes care of locally stored city name and invokes the API to fetch the weather details

### env 
- All API url and the Keys are secured in env

### urils
- All utility methods are implemented here