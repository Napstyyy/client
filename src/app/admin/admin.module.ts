import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from "./products-list/products-list.component";
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProductComponent } from './product/product.component';
import { ChangeComponent } from './change/change.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { InputComponent } from './input-email/input.component'; 
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputTextComponent } from './input-text/input-text.component';
import {MatIconModule} from '@angular/material/icon';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { InputPaswordComponent } from './input-pasword/input-pasword.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    AdminPageComponent,
    ProductComponent,
    ChangeComponent,
    InputComponent,
    InputTextComponent,
    InputPhoneComponent,
    InputPaswordComponent,
    InputNumberComponent
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    AdminRoutingModule
  ],
  exports:[
    AdminPageComponent
  ]
})
export class AdminModule { }