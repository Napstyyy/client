import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';//Importing the navbar from angular materials
import {MatIconModule} from '@angular/material/icon';//Importing Icons from Material Icons
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  //Importing each module that will be used in the navbar component
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    
  ],
  //Exporting each module that will be used in the navbar component
  exports: [
    NavbarComponent
  ]
})
export class NavbarMAINModule { }//Exporting the whole module
