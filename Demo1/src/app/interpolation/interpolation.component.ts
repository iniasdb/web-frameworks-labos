import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  initTime: Date = new Date();
  datum: Date = this.initTime;
  teller: number = 0;
  RNG: number = 0;
  startup: string = "";

  constructor() {
    setInterval(() => this.datum = new Date(), 1000)
    setInterval(() => this.teller++, 200);
    setInterval(() => this.RNG = Math.floor(Math.random()*10+1), 2000);
    setInterval(() => this.startup = moment(this.initTime).fromNow(), 1000);
  }
}
