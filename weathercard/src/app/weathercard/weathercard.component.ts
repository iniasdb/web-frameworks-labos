import { Component, OnInit } from '@angular/core';
import { RootObject, WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css']
})
export class WeathercardComponent implements OnInit {

  weather: RootObject = {} as RootObject;
  temp: number = 0;
  sunset: string = "";
  sunrise: string = "";

  constructor(private WeatherSvc: WeatherService) {}

  ngOnInit(): void {
    this.WeatherSvc.Weather.subscribe(d => this.getWeatherData(d));
  }

  getWeatherData(d:RootObject) {
    this.weather = d;
    this.temp = Math.round(this.weather.main.temp-273.15);
    let sunriseTimestamp = new Date(this.weather.sys.sunrise*1000);
    this.sunrise = sunriseTimestamp.getHours() + ":" + sunriseTimestamp.getMinutes();
    let sunsetTimestamp = new Date(this.weather.sys.sunset*1000);
    this.sunset = sunsetTimestamp.getHours() + ":" + sunsetTimestamp.getMinutes();
  }
}