import { Component, Input } from '@angular/core';
import product from "../../utilities/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() Item:product;
  textInputNumber:string[] = ["minimun", "amount", "maximun"]; 

  /**
   * 
   * @param e 
   * @description esta funcion envia a la base de datos los cambios al producto
   */
  sendUpdate(e:Event){
    e.preventDefault();
    let minimun = parseInt((<HTMLInputElement>document.getElementById("minimun-" + this.Item.id)).value);/*Se guarda el minimo que ingreso el administrador*/
    let amount = parseInt((<HTMLInputElement>document.getElementById("amount-" + this.Item.id)).value);/*Se guarda la cantidad que ingrso el administrador*/
    let maximun = parseInt((<HTMLInputElement>document.getElementById("maximun-" + this.Item.id)).value);/*Se guarda el maximo que ingreso el administrador*/
    if(minimun < 0){//se espera que el minimo sea positivo
      alert("minimo no puede ser menor a -1");
      return;
    }
    if(amount < 0){//se espera que la cantidad no puede ser negativa
      alert("cantidad no puede ser menor a -1");
      return;
    }
    if(maximun < 0){//se espera que el maximo no puede ser negativa
      alert("maximo no puede ser menor a -1");
      return;
    }
    console.log({id:this.Item.id, minimo: minimun, cantidad:amount, maximo:maximun});//se envia a la base de datos
  }
}
