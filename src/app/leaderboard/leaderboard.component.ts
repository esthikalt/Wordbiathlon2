import { Component } from '@angular/core';

export interface leaderboard {
  position: number;
  name: string;
  cpm: number;
  date: string;
}

const ELEMENT_DATA: leaderboard[] = [
  {position: 1, name: 'Julius', cpm: 567, date: '24.01.2023'},
  {position: 2, name: 'Julius', cpm: 498, date: '24.01.2023'},
  {position: 3, name: 'Julius', cpm: 471, date: '24.01.2023'},
  {position: 4, name: 'Julius', cpm: 470, date: '24.01.2023'},
  {position: 5, name: 'Esther', cpm: 10, date: '24.01.2023'},
  {position: 6, name: 'Kiran', cpm: 9, date: '24.01.2023'},
  {position: 7, name: 'Esther', cpm: 9, date: '24.01.2023'},
  {position: 8, name: 'Esther', cpm: 9, date: '24.01.2023'},
  {position: 9, name: 'Kiran', cpm: 3, date: '24.01.2023'},
  {position: 10, name: 'Michael', cpm: 1, date: '24.01.2023'},
];

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  displayedColumns: string[] = ['position', 'name', 'cpm', 'date'];
  dataSource = ELEMENT_DATA;
}
