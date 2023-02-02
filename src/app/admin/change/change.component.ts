import { Component } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {
  /**
   * 
   * @param {Event}
   * @returns {void}
   * @description send the new personal data to backend, be careful if a field is clear, it will send ""
   */ 
  sendData(e:Event){
    e.preventDefault();//prevent others events
    let email = (<HTMLInputElement>document.getElementById("email")).value;//set email with input value
    let password = (<HTMLInputElement>document.getElementById("password")).value;//set password with input value
    let phone = (<HTMLInputElement>document.getElementById("phone")).value;//set phone with input value
    let address = (<HTMLInputElement>document.getElementById("address")).value;//set address with input value
    if(email == ""){//the email field can't be ""
      alert("be careful, the email field is void");
      return;
    }
    if(password == ""){//the password field can't be ""
      alert("be careful, the password field is void");
      return;
    }
    console.log({coreo:email, contraseña: password, telefono:phone, direccion: address});//send the new data
  }
}
