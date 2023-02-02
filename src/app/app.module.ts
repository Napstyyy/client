import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarMAINModule } from './navbar-main/navbar-main.module'; //Importacion del navbar modulo completo para ser compaginado junto a el modulo app
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Importacion simple para animaciones por defecto de angular
import { LoginModule } from './login/login.module';//Importacion del login modulo completo para ser compaginado junto a el modulo app
import { RegisterModule } from './register/register.module';//Importacion del register modulo completo para ser compaginado junto a el modulo app
import { CartModule } from './cart/cart.module';//Importacion del cart modulo completo para ser compaginado junto a el modulo app
import { ShopModule } from './shop/shop.module';//Importacion del shop modulo completo para ser compaginado junto a el modulo app
import {AdminModule} from "./admin/admin.module";

//cuerpo del modulo app PRINCIPAL MODULO 
@NgModule({
  declarations: [
    AppComponent,
  ],
  //importaciones de todos sus componentes
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarMAINModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule,
    CartModule,
    ShopModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Exportando el modulo principal para ser usado en main.ts
