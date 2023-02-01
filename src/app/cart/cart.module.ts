import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component'; // CartComponent debidamente  importado para ser exportado en el MODULO general
import { CartRoutingModule } from './cart-routing.module'; // Modulo de enrutamiento para rutas del carrito


// Cuerpo del modulo Cart
@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { } // Exportacion del modulo cart para el modulo principal app module
