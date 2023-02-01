import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component'; // Importacion del componente correspondiente a la Navbar
import {MatToolbarModule} from '@angular/material/toolbar'; // Importacion de la Navbar de Angular material
import {MatIconModule} from '@angular/material/icon'; // Importacion de iconos de Angular material
import { LoginModule } from '../login/login.module'; // Importacion del modulo correspondiente al login


@NgModule({
  declarations: [
    NavbarComponent
  ],
  // Importacion de cada modulo que se usara en el componente de la Navbar
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    
  ],
  // Exportacion del componente correspondiente a la Navbar
  exports: [
    NavbarComponent
  ]
})
export class NavbarMAINModule { } // Exportando todo el modulo correspondiente a la Navbar
