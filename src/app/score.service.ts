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
    this.http.get<{message: string, scores: any }>("http://localhost:3000/api/score/savedgames")
    .pipe(map((scoreData) => {
        return scoreData.scores.map(score => {
            return {
                name: score.name,
                cpm: score.cpm,
                title: score.title,
                date: score.date,
                id: score._id
            };
        });
    }))
    .subscribe(transformedScores => {
        this.scores = transformedScores;
        this.scoresUpdated.next([...this.scores]);
    });
  }

  getScoreUpdateListener(){
    return this.scoresUpdated.asObservable();
  }


  addScore(name: string, cpm: number, title: string, date: Date){
    const score: Score = {id: null, name: name, cpm: cpm, title: title, date: date};
    this.http.post<{message: string, scoreId: string}>("http://localhost:3000/api/score/savedgames", score)
    .subscribe((responseData) => {
      const id = responseData.scoreId;
      score.id = id;
      this.scores.push(score);
      this.scoresUpdated.next([...this.scores]);
      console.log(responseData.message);
    });
  }


}
