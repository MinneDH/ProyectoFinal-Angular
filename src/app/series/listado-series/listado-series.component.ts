import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../services/series/serie.service';
import { Series } from '../../models/series.model';
import { MensajeConfirmacionComponent } from '../../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.scss']
})
export class ListadoSeriesComponent implements OnInit {

  series:Series[]=[];
  mensaje = 'LISTA DE PELICULAS';
  displayedColumns: string[] = ['id', 'Nombre', 'Ano', 'Genero', 'Acciones'];

  constructor(private ServiciosSeries: SerieService, private SnackBar:MatSnackBar, private dialog:MatDialog) {


  }

  ngOnInit(): void {
    this.cargarPantalla();
  }


  cargarPantalla(){
    this.ServiciosSeries.getSeries().subscribe(res => {
      this.series = res;
    })
  }

  EliminarSerie(id:number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width:'350',
      data:{
        mensaje:`¿Está segur@ que desea eliminar la pelicula ${id}?`
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res==='Si'){
        this.ServiciosSeries.deleteSeries(id).subscribe(res => {
          this.SnackBar.open('La pelicula fue eliminada exitosamente','',{
            duration:3000
          });
          this.cargarPantalla();
        })
      }
    });
  }

}
