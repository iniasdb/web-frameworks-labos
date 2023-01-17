import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})

export class CounterComponent {

  counter:number = 0;
  value:number = 0;

  increment() {
    this.counter++;
  }

  setCounter(value:number) {
    this.value = value;
  }

}
