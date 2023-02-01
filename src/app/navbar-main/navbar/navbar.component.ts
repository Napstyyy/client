import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private route: Router) { //se crea un constructor con un campo que sera de tipo Router que usaremos para poder redirigir a difentes rutas dentro de la aplicacion
  }

  LoginNavigate():void{ //esta funcion es llamada desde el html del navbar para poder redirigir a la pagina del login en el momento de darle click al carrito
    this.route.navigate(['login']);//se utiliza el metodo navigate para poder redirigir a una pagina
  }

  ShopNavigate():void{//esta funcion es llamada en el momento de darle click al nombre de la tienda y permite redirigir a la pagina principal de la aplicacion
    this.route.navigate(['']);//la ruta dada es la ruta raiz ("/")
  }

}
