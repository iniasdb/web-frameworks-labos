import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  temps : number[] = new Array(5);
  places : String[] = ["Anchorage", "Brussel", "Osaka", "Auckland", "Kaapstad"];

  constructor() {
    this.getTemps();
    setInterval(()=> this.getTemps(), 2000);
  }

  getTemps() {
    for (let index = 0; index < this.temps.length; index++) {
      this.temps[index] = Math.floor(Math.random()*30);
    }
  }

}
