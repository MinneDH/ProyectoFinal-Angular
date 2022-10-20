import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { MaterialDesignModule } from './material-design/material-design.module';



@NgModule({
  declarations: [
    ListaPeliculasComponent,
    ListaSeriesComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    ListaPeliculasComponent,
    ListaSeriesComponent
  ]
})
export class SharedModule { }
