import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module'; // Modulo de enrutamiento para rutas del login


// Cuerpo del modulo del Login
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule 
  ]
})

export class LoginModule { } // Exportacion del modulo del login para el modulo principal app module
