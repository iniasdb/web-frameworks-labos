import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { HighScore, Question } from './types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private name: string = "";
  private questionsList: Question[] = [];
  private points: number = 0;

  constructor(private _http: HttpClient) {
    this.loadQuestions();
  }

  get Name(): string {
    return this.name;
  }

  async loadQuestions() {
    let questions = await this.getQuestionsFromAPI();
    this.questionsList = questions;
  }

  public getQuestionsFromAPI() : Promise<Question[]> {
    return lastValueFrom(this._http.get<Question[]>("http://localhost:3000/questions"));
  }

  getQuestionsByDifficulty(difficulty: string, amount: number): Question[] {
    let qByDiff:Question[] = this.questionsList.filter((q) => q.difficulty == difficulty);
    let usedIndexes: number[] = [];
    let questions: Question[] = [];
    
    // TODO: soms worden de vragen niet geladen (als je via de url navigeert en niet via de buttons op home component)
    if (qByDiff.length > 0) {
      for (let i = 0; i < amount; i++) {
        let index = Math.floor((Math.random()*qByDiff.length)+1);
        while (usedIndexes.find((p) => p == index)) {
          index = Math.floor((Math.random()*qByDiff.length)+1);
        }
        usedIndexes.push(index);
  
        questions.push(qByDiff[index]);
      }
    }

    return questions;
  }

  get HighScores(): Observable<HighScore[]> {
    return this._http.get<HighScore[]>("http://localhost:3000/high-scores");
  }


  async createHighscore(score: HighScore): Promise<HighScore> {
    return await lastValueFrom(this._http.post<HighScore>("http://localhost:3000/high-scores", score));
  }

  finish(points:number) {
    this.points = points;
  }

  get Points() {
    return this.points;
  }
}
