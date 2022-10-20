import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';



@NgModule({
  declarations: [
    ListaPeliculasComponent,
    ListaSeriesComponent,
    MensajeConfirmacionComponent

  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    ListaPeliculasComponent,
    ListaSeriesComponent,
    MensajeConfirmacionComponent

  ]
})
export class SharedModule { }
