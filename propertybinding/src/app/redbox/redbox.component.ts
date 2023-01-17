import { Component } from '@angular/core';

@Component({
  selector: 'app-redbox',
  templateUrl: './redbox.component.html',
  styleUrls: ['./redbox.component.css']
})
export class RedboxComponent {
  coords:string = "";

  DoSomething(ev : MouseEvent) {
    this.coords = ev.clientY + "/" + ev.clientX;
  }
}
