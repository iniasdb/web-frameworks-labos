import { Component } from '@angular/core';

@Component({
  selector: 'app-random-boundaries',
  templateUrl: './random-boundaries.component.html',
  styleUrls: ['./random-boundaries.component.css']
})
export class RandomBoundariesComponent {
  maxBound:number=100;
  minBound:number=0;

  editMin(min:number) {
    this.minBound = min;
  }

  editMax(max:number) {
    this.maxBound = max;
  }
}
