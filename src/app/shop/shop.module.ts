import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop.component';

//Materials
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';

//Components
import { ProductCardComponent } from './product-card/product-card.component';
import { CardsContainerComponent } from './cards-container/cards-container.component'

@NgModule({
  declarations: [
    ShopComponent,
    ProductCardComponent,
    CardsContainerComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
   
  ],
  exports: [

  ]
})
export class ShopModule { }
