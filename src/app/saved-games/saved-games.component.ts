import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Score } from '../score.model';
import { ScoreService } from '../score.service';
import { AuthService } from '../auth/auth.service';

export interface leaderboard {
  position: number;
  cpm: number;
  title: string;
  date: string;
}

/*
const DUMMY_DATA: leaderboard[] = [
  {position: 1, cpm: 567, title: 'Wurm', date: '24.01.2023'},
  {position: 2, cpm: 498, title: 'Wurmunos', date: '24.01.2023'},
  {position: 3, cpm: 471, date: '24.01.2023'},
  {position: 4, cpm: 470, date: '24.01.2023'},
  {position: 5, cpm: 10, date: '24.01.2023'},
  {position: 6, cpm: 9, date: '24.01.2023'},
  {position: 7, cpm: 9, date: '24.01.2023'},
  {position: 8, cpm: 9, date: '24.01.2023'},
  {position: 9, cpm: 3, date: '24.01.2023'},
  {position: 10, cpm: 1, date: '24.01.2023'},
];*/

@Component({
  selector: 'app-saved-games',
  templateUrl: './saved-games.component.html',
  styleUrls: ['./saved-games.component.css']
})
export class SavedGamesComponent {

  constructor(private score: ScoreService, private auth: AuthService){}

  displayedColumns: string[] = ['position', 'cpm', 'title', 'date'];
  dataSource;
  scores: Score[] = [];
  private scoresSub: Subscription;

  onDelete(){
    this.score.deleteScore();
  }

  ngOnInit(){
    this.score.getScores();
    this.scoresSub = this.score.getScoreUpdateListener().subscribe((scores: Score[]) => {
      this.dataSource = scores.filter(p => p.name.includes(this.auth.getName())).sort((firstItem, secondItem) => secondItem.cpm - firstItem.cpm);
    });
  }
}
