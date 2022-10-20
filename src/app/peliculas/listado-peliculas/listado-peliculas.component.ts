import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/peliculas/pelicula.service';
import { Peliculas } from '../../models/peliculas.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas:Peliculas[]=[];
  mensaje = 'LISTA DE PELICULAS';
  displayedColumns: string[] = ['id', 'Nombre', 'Ano', 'Genero', 'Acciones'];

  constructor(private ServicioPeliculas:PeliculaService, private SnackBar:MatSnackBar, private dialog:MatDialog) {
  }

  ngOnInit(): void {

    this.cargarPantalla();

  }

  cargarPantalla(){
    this.ServicioPeliculas.getPeliculas().subscribe(res => {
      this.peliculas = res;
    })
  }

  EliminarPelicula(id:number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent,{
      width:'350px',
      data:{
        mensaje:`¿Está segur@ que desea eliminar la pelicula ${id}?`
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 'Si'){
        this.ServicioPeliculas.deletePelicula(id).subscribe( res => {
          this.SnackBar.open('La pelicula fue eliminada exitosamente','',{
            duration:3000
          });
          this.cargarPantalla();
        });
      }
    })
  }

}
