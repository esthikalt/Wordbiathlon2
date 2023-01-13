import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  tryyy:any;

  ngOnInit(){
    this.textArray = this.text.split(' ');
    this.startTimer();
    for(var i = 0; i < this.textArray.length; i++ ){
      this.tryyy = this.textArray[i] + " ";
      this.currentSpan = document.createElement("span" + i);
      this.currentWord = document.createTextNode(this.tryyy);
      this.currentSpan.appendChild(this.currentWord);
      document.body.appendChild(this.currentSpan);
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
    if(this.x === this.textArray[this.counter] + ' '){
      this.test = this.test + ' ' + this.textArray[this.counter];
      this.counter++;
      form.resetForm();
      this.state = 1;
    } else {
      this.state = 2;
    }
    console.log(this.counter);
    }

    changeColor(){
      if(this.state == 0){
        return 'black';
      } else if(this.state == 1) {
        return 'green';
      } else {
        return 'red';
      }
    }
}
