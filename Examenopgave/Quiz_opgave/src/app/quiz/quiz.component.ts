import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../services/types';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [];
  answered: boolean[] = [];
  completed: boolean = false;
  points: number = 0;
  qAnswered: number = 0;
  myRecentAnswer: string = "";
  recentAnswerCorrect: string[] = [];

  constructor(private quizSvc: QuizService, private route: ActivatedRoute) {}

  async ngOnInit() {
    let difficulty = "";
    this.route.paramMap.subscribe(params => {
      difficulty = params.get("diff")!;
    });

    this.questions = this.quizSvc.getQuestionsByDifficulty(difficulty, 10);

    for (let i = 0; i < 10; i++) {
      this.answered.push(false);
    }

    for (let i = 0; i < 10; i++) {
      this.recentAnswerCorrect.push(" ");
    }
  }

  answer(index:number, ans: string) {
    let q = this.questions[index];
    this.myRecentAnswer = ans;
    
    if (q.correct_answer == ans) {
      this.points++;
      this.recentAnswerCorrect[index] = "correct";
    } else {
      this.recentAnswerCorrect[index] = "incorrect";
    }

    this.answered[index] = true;
    this.qAnswered++;

    if (this.qAnswered == this.questions.length) {
      this.completed = true;
      this.quizSvc.finish(this.points)
    }
  }
}
