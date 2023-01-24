import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { elementAt } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

import { WikiService } from '../wiki.service';

@Component({
  selector: 'type-racer',
  templateUrl: './type-racer.component.html',
  styleUrls: ['./type-racer.component.css']
})

export class TypeRacerComponent{

  constructor(private authService: AuthService, private wiki: WikiService){}

  title = 'TypeRacer';
  text = '';
  x = '';
  test = '';
  state = 0;
  time = 0;
  textArray: string[] = [];
  wordArray: any[] = [];
  characterCounter = 0;
  result = 0;
  counter = 0;
  interval: any;
  timerText: string = " Seconds";
  pretimerText: string = "Played: ";
  currentSpan: any;
  currentWord: any;
  wordSpan: any;
  tryyy: any;
  counterString: string = "0";
  textp: any;
  i = 0;
  playStatus = true;
  userIsAuthenticated = false;



  async ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();

    while(true){
    const titleRes:any = await this.wiki.getRandomTitle().toPromise();
    var randoms = titleRes.query.random;
    this.title = randoms[0].title;

    const textRes:any = await this.wiki.getContentFromPage(this.title).toPromise();
    var content = textRes.query.pages;
    this.text = content[0].extract;

    //Komische Zeichen rausfiltern + üöä ersetzten
    this.text = this.text.replace(/\s{2,}/g, ' ');
    this.text= this.text.replace(/[–]/g,'-');
    this.text = this.text.replace(/[^a-zA-Z0-9 ().,-:;]/g, '');

    //Zu lange und zu kurze Texte rausfiltern
    if(this.text.split(' ').length > 99 && this.text.split(' ').length < 200){
      break;
    //}
    }
    this.textArray = this.text.split(' ');

    for (this.i = 0; this.i < this.textArray.length; this.i++) {
      this.wordArray = this.textArray[this.i].split('');
      this.characterCounter += this.wordArray.length;
      this.tryyy = this.textArray[this.i] + " ";
      this.currentSpan = document.createElement("span" + this.i);
      this.currentSpan.setAttribute("id", this.i);
      this.currentWord = document.createTextNode(this.tryyy);
      this.currentSpan.appendChild(this.currentWord);
      this.textp = document.getElementById("hi");
      this.textp.appendChild(this.currentSpan);
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.playStatus == true) {
        this.time++;
      } else {
      }
    }, 1000)
  }


  onEnter(form: NgForm) {
if(this.counter == 0){
  this.startTimer();
}

    this.x = form.value.title;
    while (this.x.charAt(0) === ' ') {
      this.x = this.x.substring(1);
    }
    this.wordSpan = document.getElementById(this.counter.toString());
    if (this.x === this.textArray[this.counter]) {
      if(this.counter >= this.textArray.length - 1){
        this.playStatus = false;
        this.result = Math.round(this.characterCounter * (60 / this.time));
      }
      this.test = this.test + ' ' + this.textArray[this.counter];
      this.wordSpan.setAttribute("style", "color:green");
      this.counter++;
      form.resetForm();
    } else {
      this.wordSpan.setAttribute("style", "color:red");
    }
  }

}
