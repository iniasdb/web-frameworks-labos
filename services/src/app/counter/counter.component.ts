import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})

export class CounterComponent {

  constructor(private countService:CounterService) {}

  setCounter(value:number) {
    this.countService.value = value;
  }

  get value() {
    return this.countService.value;
  }

}
