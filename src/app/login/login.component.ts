import { Component } from '@angular/core';

@Component({
  selector: 'app-login', // Etiqueta con la que se identifica el componente de la tienda
  templateUrl: './login.component.html', // URL de la plantilla HTML con la que se identifica el componente del login
  styleUrls: ['./login.component.css'] // Esta es la URL del documento HTML con el que se identifica el componente de la tienda
})
export class LoginComponent {
  title = "Login"
}
