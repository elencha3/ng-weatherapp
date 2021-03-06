import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from '../forecast.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  @Input() forecasts: Array<Forecast>;

  constructor() { }

  ngOnInit(): void {
  }

}
