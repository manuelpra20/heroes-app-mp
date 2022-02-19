import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


//  Rutas para navegacion en el modulo protegido

const routes: Routes = [
   
  {
    path: '',
    children: [
      { path: '', component: DashboardComponent},
     
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
