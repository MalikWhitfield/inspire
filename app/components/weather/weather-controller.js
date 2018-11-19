import WeatherService from "./weather-service.js";

let weatherService = new WeatherService()

function drawWeather(weather) {
	console.log('This is the weather today', weather)
	let template = ''
	template += ``
}


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			//What can you do with this weather object?

		})
	}
}
