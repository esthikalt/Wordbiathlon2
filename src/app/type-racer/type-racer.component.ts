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

  myArray:string[] = [];
  counter = 0;

  ngOnInit(){
    this.myArray = this.text.split(' ');
  }

  onEnter(form:NgForm){
    this.x = form.value.title;
    if(this.x === this.myArray[this.counter] + ' '){
      this.test = this.test + ' ' + this.myArray[this.counter];
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
