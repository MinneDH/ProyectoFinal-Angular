import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SerieService } from '../../services/series/serie.service';

@Component({
  selector: 'app-modal-series',
  templateUrl: './modal-series.component.html',
  styleUrls: ['./modal-series.component.scss']
})
export class ModalSeriesComponent implements OnInit {

  formularioSeries:FormGroup;



  constructor(private fb:FormBuilder, private router:Router,  private SerieService:SerieService) { 
    this.formularioSeries = this.fb.group({
      Nombre:[''],Ano:[''],Genero:['']
    })
  }

  ngOnInit(): void {
  }

  guardarFormulario(){
    
  }

}
