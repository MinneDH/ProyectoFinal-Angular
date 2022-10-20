import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalPeliculasComponent } from './modal-peliculas/modal-peliculas.component';


@NgModule({
  declarations: [
    ListadoPeliculasComponent,
    ModalPeliculasComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    SharedModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class PeliculasModule { }
