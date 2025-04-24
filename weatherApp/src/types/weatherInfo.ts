export interface WeatherInfo {
    coord: {
        lon: number;
        lat: number;
    };
    weather: Array<{
        id: number;
        main: string; // Clear, Clouds, Rain, etc.
        description: string;
        icon: string;
    }>;
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    type: number;
    country: string;
    sunrise: number;
    sys: {
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}