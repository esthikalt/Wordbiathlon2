import { Component } from '@angular/core';

@Component({
  selector: 'type-racer',
  templateUrl: './type-racer.component.html',
  styleUrls: ['./type-racer.component.css']
})

export class TypeRacerComponent{
  title = '';
  test = '';

  onEnter(x:string){
    this.test = x;
    return;
  }
}
