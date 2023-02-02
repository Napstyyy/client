import { Component } from '@angular/core';
import product from 'src/app/utilities/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  /*Aca estan colocados los productos, con un contructor puedes llenarla*/
  DefaultArray:product[] = [
    new product(0, "pepe", 2, 4, 10, "https://canduran.com/wp/wp-content/uploads/2017/02/pimienta-alimentos-crudos-blanco-fresco_1203-5518.jpg"),
    new product(1, "german", 2, 4, 10, "https://i.blogs.es/8ceb02/pollo_entero/1366_2000.jpg")
    /*Otros productos...*/
  ];
}
