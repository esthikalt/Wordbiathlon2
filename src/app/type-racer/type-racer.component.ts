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
  test = '';
  text = 'Funktioniert das eigentlich?';
  x = '';

  myArray:string[] = [];
  counter = 0;

  ngOnInit(){
    this.myArray = this.text.split(' ');
  }

  onEnter(form:NgForm){
    this.x = form.value.title;
    if(this.x === this.myArray[this.counter]){
      this.test = this.test + ' ' + this.myArray[this.counter];
      this.myArray[this.counter] = "hallo";
      this.counter++;
    } else {
    }
    console.log(this.counter);
    form.resetForm();
  }
}
