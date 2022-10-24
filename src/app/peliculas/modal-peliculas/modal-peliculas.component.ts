import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../../services/peliculas/pelicula.service';
import { Peliculas } from '../../models/peliculas.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-peliculas',
  templateUrl: './modal-peliculas.component.html',
  styleUrls: ['./modal-peliculas.component.scss']
})
export class ModalPeliculasComponent implements OnInit {

  formularioPeliculas!:FormGroup;
  id!:number;

  constructor(private fb:FormBuilder, private router:Router, private PeliculaService:PeliculaService, private SnackBar:MatSnackBar, private ActivatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.formularioPeliculas = this.fb.group({
      Nombre: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      Ano:    ['',[Validators.required]],
      Genero: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]]
    });

    this.id = this.ActivatedRoute.snapshot.params['id'] ?
            + this.ActivatedRoute.snapshot.params['id'] : 0 ;

    if(this.id!==0 ){
      this.llenarDatosPelicula(this.id);
    }
  }

  llenarDatosPelicula(id:number){
    this.PeliculaService.getPeliculaById(id).subscribe((pelicula:Peliculas)=>{
      this.formularioPeliculas.patchValue({...pelicula});
    })
  }

  guardarFormulario(){
    const pelicula: Peliculas = {
      ...this.formularioPeliculas.value
    };
    if(this.id===0){
      this.agregarPelicula(pelicula);
    }else{
      this.actualizaPelicula(pelicula);
    }
  }

  agregarPelicula(pelicula:Peliculas){
    this.PeliculaService.savePeliculas(pelicula).subscribe(res => {
      this.SnackBar.open('La pelicula fue agregada exitosamente','',{
        duration:3000
      });
      this.router.navigate(['/peliculas']);
    });
  }

  actualizaPelicula(pelicula:Peliculas){
    this.PeliculaService.updatePelicula(this.id, pelicula).subscribe(res => {
      this.SnackBar.open('La pelicula fue actualizada exitosamente', '',{
        duration:3000
      });
      this.router.navigate(['/peliculas']);
    })
  }

  getControlFormulario = (valor:string) => this.formularioPeliculas.get(valor);
  get nombre(){return this.getControlFormulario('Nombre');}
  get genero(){return this.getControlFormulario('Genero');}
  get ano(){return this.getControlFormulario('Ano');}
}
