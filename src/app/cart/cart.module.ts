import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component'; // CartComponent debidamente  importado para ser exportado en el MODULO general
import { CartRoutingModule } from './cart-routing.module'; // Modulo de enrutamiento para rutas del carrito


import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

// Cuerpo del modulo Cart
@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    BrowserModule
  ]
})
export class CartModule { } // Exportacion del modulo cart para el modulo principal app module