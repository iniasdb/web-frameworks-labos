import { Component, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  rand:number = 0;
  @Input() maxBound:number=100;
  @Input() minBound:number=0;

  constructor() {
    setInterval(()=> this.rand = _.random(this.minBound, this.maxBound, false), 2000);
  }
}
