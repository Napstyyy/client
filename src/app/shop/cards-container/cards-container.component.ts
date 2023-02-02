import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {
  testArray: object[]=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5}
  ]

}
