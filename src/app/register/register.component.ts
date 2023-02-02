import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  //funcion constructor que se ejecuta al inicio e instancia una variable private de tipo Router
  //que se usara para dar la ruta a la cual se va a redireccionar
  //resive como argumentos una variable de tipo router y no retorna nada (void)
  constructor( private route:Router ) { }


  //funcion register que se ejecuta al dar click en el boton de register, usada para crear un nuevo usuario mandando los datos a una base de datos
  //resive un user, email, adress, phonenumber y pass que son de tipo string, estos seran usados para ser enviados a la base de datos y crear un nuevo registro
  //resive un event de tipo Event, esta se usara para evitar que la pagina se recargue al terminar el registro
  //no retorna nada (void)
  register(user:string, email:string, adress:string, phonenumber:string, pass:string, event:Event):void
  {
      event.preventDefault(); //usado para no recargar la pagina al dar click al boton
      alert(` ${user}  -  ${email}  -  ${adress}  -  ${phonenumber}  -  ${pass}`); 
  }

  //funcion loginNavigate usada para redireccionar a la pagina de login al darle click a la palabra Sign In
  //No resive parametros ni returna nada
  loginNavigate () 
  {
    this.route.navigate(['login']);
  }
}
