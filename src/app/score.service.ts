import { Injectable } from '@angular/core';
import { Score } from './score.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scores: Score[] = [];
  private scoresUpdated = new Subject<Score[]>();

  constructor(private http: HttpClient) { }

  getScores(){
    this.http.get<{message: string, score: any }>("http://localhost:3000/api/score/savedgames")
    .pipe(map((scoreData) => {
      return scoreData.score.map(score => {
        return {
          id: score._id,
          name: score.name,
          cpm: score.cpm,
          title: score.title,
          date: score.date
        }
      })
    }))
    .subscribe(transformedScores => {
        this.scores = transformedScores;
        this.scoresUpdated.next([...this.scores]);
    });
  }

  getScoreUpdateListener(){
    return this.scoresUpdated.asObservable();
  }

  deleteScore(){
    this.http.delete("http://localhost:3000/api/score/savedgames")
    .subscribe(() => {
      this.scores = [];
      this.scoresUpdated.next([...this.scores]);
    });
  }

  addScore(name: string, cpm: number, title: string, date: Date){
    const score: Score = {_id: null, name: name, cpm: cpm, title: title, date: date};
    this.http.post<{message: string, scoreId: string}>("http://localhost:3000/api/score/savedgames", score)
    .subscribe((responseData) => {
      const id = responseData.scoreId;
      score._id = id;
      this.scores.push(score);
      this.scoresUpdated.next([...this.scores]);
      console.log(responseData.message);
    });
  }
}
