import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent {
  @Input() id:number;//get the product id
  @Input() type:string//get the input name
  @Input() number:number; //get input value

  /**
   * 
   * @param {string} name
   * @param {number} id 
   * @returns {string}
   * @description devulve un id unico enb todo el archivo
   */
  setId(name:string, id:number){
    return name + "-" + id;
  }
}
