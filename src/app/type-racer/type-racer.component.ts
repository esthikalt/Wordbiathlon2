import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { elementAt } from 'rxjs';

import { WikiService } from '../wiki.service';

@Component({
  selector: 'type-racer',
  templateUrl: './type-racer.component.html',
  styleUrls: ['./type-racer.component.css']
})

export class TypeRacerComponent{

  constructor(private wiki: WikiService) { }

  title = 'TypeRacer';
  text = '';
  x = '';
  test = '';
  state = 0;
  timeLeft = 180;
  textArray: string[] = [];
  counter = 0;
  interval: any;
  timerText: string = " Seconds left...";
  currentSpan: any;
  currentWord: any;
  wordSpan: any;
  tryyy: any;
  counterString: string = "0";
  textp: any;
  i = 0;

  async ngOnInit() {
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
    if(this.text.split(' ').length > 99 && this.text.split(' ').length < 200){
      break;
    }
    }

    //TODO: bugfix
    this.textArray = this.text.split(' ');
    this.startTimer();
    for (this.i = 0; this.i < this.textArray.length; this.i++) {
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
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timerText = " Seconds left, your time is over!";
      }
    }, 1000)
  }


  onEnter(form: NgForm) {
    this.x = form.value.title;
    while (this.x.charAt(0) === ' ') {
      this.x = this.x.substring(1);
    }
    this.wordSpan = document.getElementById(this.counter.toString());
    /*console.log(this.wordSpan);
    console.log('I' + form.value.title + 'I');
    console.log('I' + this.textArray[this.counter] + 'I');*/
    if (this.x === this.textArray[this.counter]) {
      this.test = this.test + ' ' + this.textArray[this.counter];
      this.wordSpan.setAttribute("style", "color:green");
      this.counter++;
      form.resetForm();
    } else {
      this.wordSpan.setAttribute("style", "color:red");
    }
  }

  WordCount(str: string) {
    var totalSoFar = 0;
    for (var i = 0; i < str.length; i++){
      if (str.charAt(i) === " ") { // if a space is found in str
        totalSoFar = +1; // add 1 to total so far
    }
    }
    return totalSoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
  }
}
