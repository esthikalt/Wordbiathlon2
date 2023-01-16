import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'type-racer',
  templateUrl: './type-racer.component.html',
  styleUrls: ['./type-racer.component.css']
})

export class TypeRacerComponent{
  title = '';
  text = 'Chameleons or chamaeleons (family Chamaeleonidae) are a distinctive and highly specialized clade of Old World lizards with 202 species described as of June 2015.';
  x = '';
  test = '';
  state = 0;
  timeLeft = 180;
  textArray:string[] = [];
  counter = 0;
  interval: any;
  timerText:string = " Seconds left...";
  currentSpan: any;
  currentWord:any;
  wordSpan:any;
  tryyy:any;
  counterString:string = "0";
  textp:any;
  i = 0;

  ngOnInit(){
    this.textArray = this.text.split(' ');
    this.startTimer();
    for(this.i; this.i < this.textArray.length; this.i++ ){
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
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timerText = " Seconds left, your time is over!";
      }
    },1000)
  }


  onEnter(form:NgForm){
    this.x = form.value.title;
   while(this.x.charAt(0) === ' ')
    {
    this.x = this.x.substring(1);
    }
    this.wordSpan = document.getElementById(this.counter.toString());
    if(this.x === this.textArray[this.counter]){
      this.test = this.test + ' ' + this.textArray[this.counter];
      this.wordSpan.setAttribute("style", "color:green");
      this.counter++;
      form.resetForm();
    } else {
      this.wordSpan.setAttribute("style", "color:red");
    }
  }
}
