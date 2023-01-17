import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  datum: Date = new Date();

  constructor() {
    setInterval(()=> this.datum = new Date(), 1000);
  }

  get isMorning() {
    if (this.datum == null) return false;
    return this.datum.getHours() < 12;
  }

  get isEvening() {
    if (this.datum == null) return false;
    return this.datum.getHours() >= 18;
  }
}
