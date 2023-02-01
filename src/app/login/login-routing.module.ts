import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component'; // Importacion del componente del login para que sea asociado a una respectiva url (path)


const routes: Routes = [ // Se declara una constante 'routes' de tipo 'Routes'
  {
    path:"login", component: LoginComponent 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
