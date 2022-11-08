import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path:'',
    component: PublicComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'404',
        component: NotFoundComponent
      },
      {
      path:'**', 
      redirectTo:'login'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
