import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestScoresComponent } from './test-scores/test-scores.component';
import { WeatherComponent } from './weather/weather.component';
import { PeopleComponent } from './people/people.component';
import { CarbrandsComponent } from './carbrands/carbrands.component';
import { DivisionComponent } from './division/division.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    WelcomeComponent,
    TestScoresComponent,
    WeatherComponent,
    PeopleComponent,
    CarbrandsComponent,
    DivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
