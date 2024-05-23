import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ComponentGaleria1Component } from './component/component-galeria1/component-galeria1.component';
import { ComponentGaleria2Component } from './component/component-galeria2/component-galeria2.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboar', component: DashboardComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'galeria1', component: ComponentGaleria1Component},
  {path: 'galeria2', component: ComponentGaleria2Component},
];
