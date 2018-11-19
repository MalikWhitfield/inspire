import Weather from "../../models/weather.js"

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

// @ts-ignore
const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class WeatherService {

	getWeather(drawWeather) {
		console.log('Calling the Weatherman')
		weatherApi().then(res => {
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
			// res.data.temp is the temperature in Kelvin
			// You should probably convert the temperature data to either F or C
			// let theWeather = new Weather(res.data)
			// theWeather.convertedTemp = Math.round(((theWeather.temp - 273.15) * 1.8) + 32)
			drawWeather(res.data);
		})
	}
}
