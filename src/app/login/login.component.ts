import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //funcion constructor que se ejecuta al inicio e instancia una variable private de tipo Router
  //que se usara para dar la ruta a la cual se va a redireccionar
  //resive como argumentos una variable de tipo router y no retorna nada (void)
  constructor (private route:Router) { }

  CREDENTIALS = {
    username: "hola",
    password: "1234"
  }


  //funcion register que se ejecuta al dar click en el boton de login, usada para loguearse en la pagina web
  //resive un user y pass que son de tipo string, estos seran usados para validar si el usuario y la contraseña coinciden con alguna de la base de datos
  //resive un event de tipo Event, esta se usara para evitar que la pagina se recargue al terminar el registro
  //no retorna nada (void)
  login(user:string, pass:string, event:Event) {
    event.preventDefault(); //usado para no recargar la pagina al dar click al boton
    if(this.CREDENTIALS.username == user && this.CREDENTIALS.password == pass){
      alert(` ${user}  -  ${pass}`);
      // this.route.navigate(["Register"])
    }
    else
      alert("NO COINCIDEN")
  }

  //funcion registerNavigate usada para redireccionar a la pagina de register al darle click a la palabra Sign In
  //No resive parametros ni returna nada
  registerNavigate() {
    this.route.navigate(["register"])
  }
}
