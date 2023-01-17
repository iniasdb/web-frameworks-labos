import { Component } from '@angular/core';
import { Carbrand } from './Carbrand';

@Component({
  selector: 'app-carbrands',
  templateUrl: './carbrands.component.html',
  styleUrls: ['./carbrands.component.css']
})
export class CarbrandsComponent {
  carbrands : Carbrand[] = [];

  constructor() {
    this.carbrands.push(new Carbrand("Ford", "Focus", "Transit"));
    this.carbrands.push(new Carbrand("Jaguar", "F-pace", "E-pace"));
    this.carbrands.push(new Carbrand("Mercedes", "GLA", "CLA", "EQA", "EQB"));
  }
}
