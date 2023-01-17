import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = "";

  constructor(private quizSvc: QuizService) { }

  ngOnInit(): void {
    if (this.quizSvc.Name) {
      this.name = this.quizSvc.Name;
    }
  }

}
