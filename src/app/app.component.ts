import { Component } from '@angular/core';
import { PeliculaService } from './services/peliculas/pelicula.service';
import { SerieService } from './services/series/serie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoApp';

  constructor(private ServicioPeliculas:PeliculaService, private ServiciosSeries:SerieService){

    this.ServicioPeliculas.getPeliculas().subscribe(peliculas => {
      console.log(peliculas);
    });

    this.ServiciosSeries.getSeries().subscribe(series => {
      console.log(series);
    });

  }
}


