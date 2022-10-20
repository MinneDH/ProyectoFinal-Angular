import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { ModalPeliculasComponent } from './modal-peliculas/modal-peliculas.component';

const routes: Routes = [
  {
    path: '',
    component:ListadoPeliculasComponent
  },
  {
    path: ':id',
    component: ModalPeliculasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
