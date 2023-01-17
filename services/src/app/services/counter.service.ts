import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  private _value:number = 0;

  constructor() { }

  get value() {
    return this._value;
  }

  set value(val:number) {
    this._value = val;
  }
}
