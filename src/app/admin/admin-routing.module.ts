import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Importando libreria de rutas para generar la ruta del cart
import { AdminPageComponent } from './admin-page/admin-page.component';


// Se define el objeto routes de tipo Routes para ser usado en el modulo de rutas
const routes: Routes = [
  {
    path:"admin", component:AdminPageComponent
  }
]
// Cuerpo del modulo rutas
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { } // Se exporta la ruta del carrito