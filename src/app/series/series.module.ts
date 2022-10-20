import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { ModalSeriesComponent } from './modal-series/modal-series.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoSeriesComponent,
    ModalSeriesComponent,
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class SeriesModule { }
