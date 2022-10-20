import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaService } from '../../services/peliculas/pelicula.service';
import { Peliculas } from '../../models/peliculas.model';

@Component({
  selector: 'app-modal-peliculas',
  templateUrl: './modal-peliculas.component.html',
  styleUrls: ['./modal-peliculas.component.scss']
})
export class ModalPeliculasComponent implements OnInit {

  formularioPeliculas:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private PeliculaService:PeliculaService) {
    this.formularioPeliculas = this.fb.group({
      Nombre:[''],Ano:[''],Genero:['']
    })
  }

  ngOnInit(): void {
  }

  guardarFormulario(){
    const pelicula: Peliculas = {
      ...this.formularioPeliculas.value
    };
    this.agregarPelicula(pelicula);
  }

  agregarPelicula(pelicula:Peliculas){
    this.PeliculaService.savePeliculas(pelicula).subscribe(res => {
      console.log('Se ha agregado una pelicula');
      this.router.navigate(['/peliculas']);
    });
  }
}
