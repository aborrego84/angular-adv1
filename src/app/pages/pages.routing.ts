import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

export const routes: Routes = [
    {path:'dashboard',
    component:PagesComponent,
    children: [
      {path:'',component:DashboardComponent},
      {path:'grafica1',component:Grafica1Component}, 
      {path:'progress',component:ProgressComponent},      
    ]},  
]

@NgModule({
    declarations: [],
    imports: [
     RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class PagesRoutingModule { }