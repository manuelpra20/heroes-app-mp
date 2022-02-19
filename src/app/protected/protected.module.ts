import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../auth/auth-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchHeroesComponent } from './search-heroes/search-heroes.component';
import { HeroesGuardadosComponent } from './heroes-guardados/heroes-guardados.component';
import { HeroesCardComponent } from './heroes-card/heroes-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SearchHeroesComponent,
    HeroesGuardadosComponent,
    HeroesCardComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ProtectedModule { }
