import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { SerieService } from '../../services/series/serie.service';
import { Series } from '../../models/series.model';

@Component({
  selector: 'app-modal-series',
  templateUrl: './modal-series.component.html',
  styleUrls: ['./modal-series.component.scss']
})
export class ModalSeriesComponent implements OnInit {

  formularioSeries:FormGroup;
  id!:number;



  constructor(private fb:FormBuilder, private router:Router,  private SerieService:SerieService, private ActivatedRoute:ActivatedRoute, private SnackBar:MatSnackBar,) { 
    this.formularioSeries = this.fb.group({
      Nombre: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      Ano:    ['',[Validators.required]],
      Genero: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]]
    })
  }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'] ?
            + this.ActivatedRoute.snapshot.params['id'] : 0 ;

    if(this.id!==0 ){
      this.llenarDatosSerie(this.id);
    }
  }

  llenarDatosSerie(id:number){
    this.SerieService.getSeriesById(id).subscribe((serie:Series)=>{
      this.formularioSeries.patchValue({...serie});
    });
  }

  guardarFormulario(){
    const serie:Series={
      ...this.formularioSeries.value
    };
    if(this.id===0){
      this.agregarSerie(serie);
    }else{
      this.actualizaSerie(serie);
    }
  }

  agregarSerie(serie:Series){
    this.SerieService.saveSeries(serie).subscribe(res => {
      this.SnackBar.open('La serie fue agregada exitosamente','',{
        duration:3000
      })
      this.router.navigate(['/series']);
    })
  }

  actualizaSerie(serie:Series){
    this.SerieService.updateSeries(this.id, serie).subscribe(res => {
      this.SnackBar.open('La serie fue actualizada exitosamente', '',{
        duration:3000
      });
      this.router.navigate(['/series']);
    })
  }

  getControlFormulario = (valor:string) => this.formularioSeries.get(valor);
  get nombre(){return this.getControlFormulario('Nombre');}
  get genero(){return this.getControlFormulario('Genero');}
  get ano(){return this.getControlFormulario('Ano');}

}
