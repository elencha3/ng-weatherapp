import { LayoutModule } from './../layout/layout.module';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherService } from './services/weather.service';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WeatherCardComponent,
    WeatherForecastComponent,
    WeatherSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeatherRoutingModule,
    LayoutModule
  ],
  exports: [
    WeatherCardComponent,
    WeatherSearchComponent,
    WeatherForecastComponent
  ],
  providers: [WeatherService]
})
export class WeatherModule { }
