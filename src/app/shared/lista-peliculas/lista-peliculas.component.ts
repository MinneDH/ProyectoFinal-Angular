import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.scss']
})
export class ListaPeliculasComponent implements OnInit {
  @Input()
  dataSourcePeliculas:any[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSourcePeliculas)
  }

}
