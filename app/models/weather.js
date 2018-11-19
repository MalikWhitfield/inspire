export default class Weather {
  constructor(data) {
    this.humidity = data.humidity
    this.temp = data.temp
    this.high = data.max
    this.low = data.low
    this.convertedTemp = 0
    this.description = data.weather[0].description

  }
}