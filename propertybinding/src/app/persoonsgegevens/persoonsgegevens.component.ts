import { Component } from '@angular/core';

@Component({
  selector: 'app-persoonsgegevens',
  templateUrl: './persoonsgegevens.component.html',
  styleUrls: ['./persoonsgegevens.component.css']
})
export class PersoonsgegevensComponent {
  p = {} as Person;
  saved:boolean = false;
  
  save() {
    this.saved = true;
  }
}

interface Person {
  fname:string;
  lname:string;
  street:string;
  number:string;
  city:string;
}
