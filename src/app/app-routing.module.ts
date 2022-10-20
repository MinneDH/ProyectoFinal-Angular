import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'peliculas',
    loadChildren:() => import('./peliculas/peliculas.module').then(m => m.PeliculasModule)
  },
  {
    path: 'series',
    loadChildren:() => import('./series/series.module').then(m => m.SeriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
