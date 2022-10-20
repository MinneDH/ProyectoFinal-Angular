import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.scss']
})
export class ListaSeriesComponent implements OnInit {
  @Input()
  dataSourceSeries:any[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSourceSeries)
  }

}
