import { Component } from '@angular/core';//importacion de component para poder reconocer este componente literalmente como uno

// Cuerpo del componente incluyendo html, css
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// Exportacion del componente completo para ser usado dentro del cuerpo del modulo principal del cart, como una clase
export class CartComponent {
  title = "Cart"
}
