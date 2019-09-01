import { EscenariosComponent } from './components/escenarios/escenarios.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent 
  },
  {
    path: 'Herramientas/Escenario',
    component:EscenariosComponent // only user auth
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
