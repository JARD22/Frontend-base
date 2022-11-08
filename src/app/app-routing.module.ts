import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', //la ruta vacía siempre debe ir primero
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'**', //ruta comodín, si no encuentra la ruta escrita redirige al login o página principal o not Found.
    redirectTo:'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration:'enabled' //Restaura la posicion del ViewPort al inicio de la página
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
