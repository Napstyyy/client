import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path:"register", component:RegisterComponent //se crea la ruta para usar el componente del registro
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { } //se exporta el el routing del modulo del register para poder ser usado fuera
