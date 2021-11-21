import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { WeatherModule } from './weather/weather.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    WeatherModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
