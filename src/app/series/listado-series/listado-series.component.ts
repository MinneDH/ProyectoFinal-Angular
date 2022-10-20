import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../services/series/serie.service';
import { Series } from '../../models/series.model';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.scss']
})
export class ListadoSeriesComponent implements OnInit {

  series:Series[]=[];
  mensaje = 'LISTA DE PELICULAS';
  displayedColumns: string[] = ['id', 'Nombre', 'Ano', 'Genero'];

  constructor(private ServiciosSeries: SerieService) {

  }

  ngOnInit(): void {
    this.ServiciosSeries.getSeries().subscribe(res => {
      this.series = res;
    });
  }

}
