import WeatherService from "./weather-service.js";

let weatherService = new WeatherService()

function drawWeather(weather) {
	console.log('This is the weather today', weather)
	let template = ''
	template += `<div class="col-12 d-flex justify-content-end weatherStyle">
	<h4 class="font-shadow">${Math.round((weather.main.temp - 273.15) * 1.8) + 32}°F ${weather.weather[0].description}</h4>
	</div>`
	document.getElementById('weather').innerHTML = template
}


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		weatherService.getWeather(drawWeather)
	}
}
// 	getWeather(drawWeather) {
// 		weatherService.getWeather(weather => {
// 			console.log(weather);
// 			//What can you do with this weather object?

// 		})
// 	}
// }
