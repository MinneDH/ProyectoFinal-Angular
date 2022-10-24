import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistroComponent
  },
  {
    path: 'peliculas',
    loadChildren:() => import('./peliculas/peliculas.module').then(m => m.PeliculasModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path: 'series',
    loadChildren:() => import('./series/series.module').then(m => m.SeriesModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
