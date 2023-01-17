import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { HighScore } from '../services/types';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css'],
})
export class HighScoreComponent implements OnInit {

  points: number = 0;
  highscores: HighScore[] = [];
  success: string = "";
  error: string = "";
  bewaard: boolean = false;

  constructor(private quizSvc: QuizService) {}

  ngOnInit() {
    this.points = this.quizSvc.Points;
    this.quizSvc.HighScores.subscribe(d => this.highscores = d);
  }

  saveScore(fName: string, lName: string) {
    if (fName && lName) {
      this.error = "";
      let name = fName + " " + lName;
      let score: HighScore = {
        name: name,
        score: this.points,
        date: Date.now().toString()
      }

      if (this.highscores.push(score)) {
        this.error = "";
        this.success = "Score bewaard";
        this.bewaard = true;
        this.quizSvc.createHighscore(score);
        this.sort();
      } else {
        this.success = "";
        this.error = "Er ging iets mis";
      }
    } else {
      this.error = "Vul je voor en achternaam in";
    }
  }

  sort() {
    this.highscores.sort((h1, h2) => {
      let score: number = h2.score - h1.score;

      // TODO: sorteer op datum als de scores gelijk zijn
      let d1 = new Date(h1.date).getTime();
      let d2 = new Date(h2.date).getTime();
      let date: number = d2 - d1;

      return score;
    });
    this.highscores = this.highscores.slice(0,10);
  }
}
