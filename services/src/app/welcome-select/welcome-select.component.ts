import { Component } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-welcome-select',
  templateUrl: './welcome-select.component.html',
  styleUrls: ['./welcome-select.component.css']
})
export class WelcomeSelectComponent {

  constructor(private welcomeSvc:WelcomeService) {}

  get pictures() {
    return this.welcomeSvc.pictures;
  }

  get RND() {
    return this.welcomeSvc.RND;
  }

  set RND(rnd) {
    this.welcomeSvc.RND = rnd;
  }
}
