import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/peliculas/pelicula.service';
import { Peliculas } from '../../models/peliculas.model';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas:Peliculas[]=[];
  mensaje = 'LISTA DE PELICULAS';
  displayedColumns: string[] = ['id', 'Nombre', 'Ano', 'Genero'];

  constructor(private ServicioPeliculas:PeliculaService) {
  }

  ngOnInit(): void {

    this.ServicioPeliculas.getPeliculas().subscribe(res => {
      this.peliculas = res;
    })
  }

}
