import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';
import { ModalSeriesComponent } from './modal-series/modal-series.component';

const routes: Routes = [
  {
    path: '',
    component:ListadoSeriesComponent
  },
  {
    path: ':id',
    component: ModalSeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
