import { NgModule } from '@angular/core';
import  {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  {path:'',
    component:PagesComponent,
    children: [
      {path:'dashboard',component:DashboardComponent},
      {path:'grafica1',component:Grafica1Component}, 
      {path:'progress',component:ProgressComponent},
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    ]},  

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  
  {path:'**',component:NopagefoundComponent},
];



@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
