import { Component } from '@angular/core';

@Component({
  selector: 'app-test-scores',
  templateUrl: './test-scores.component.html',
  styleUrls: ['./test-scores.component.css']
})
export class TestScoresComponent {

  score : Number = 0;
  
  constructor() {
    setInterval(() => this.generateScore(), 2000);
  }

  generateScore() {
    this.score = Math.floor((Math.random()*10)+1);
  }
}
