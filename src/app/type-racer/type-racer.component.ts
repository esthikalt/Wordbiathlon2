import { Component } from '@angular/core';

@Component({
  selector: 'type-racer',
  templateUrl: './type-racer.component.html',
  styleUrls: ['./type-racer.component.css']
})

export class TypeRacerComponent{
  title = '';
  test = '';
  text = 'Funktioniert das eigentlich?';

  myArray:string[] = [];
  counter = 0;

  ngOnInit(){
    this.myArray = this.text.split(' ');
  }

  onEnter(x:string){
    if(x === this.myArray[this.counter]){
      this.test = this.test + ' ' + this.myArray[this.counter];
      this.myArray[this.counter] = "hallo";
      this.counter++;
    } else {
    }
    console.log(this.counter);
  }
}
