import { Routes } from '@angular/router';
import { AtasComponent } from './components/atas/atas.component';
import { WorkshopDetailComponent } from './components/workshop-details/workshop-details.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../app/services/auth.guard';
import { ParticipationChartsComponent } from './components/participation-charts/participation-charts.component';

export const routes: Routes = [
  { path: 'workshop/:id', component: WorkshopDetailComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'atas', component: AtasComponent, canActivate: [AuthGuard] },
  { path: 'atas', component: AtasComponent },
  { path: 'graficos', component: ParticipationChartsComponent },
  // { path: '**', redirectTo: 'login' },
  { path: '**', redirectTo: 'atas'}
];
