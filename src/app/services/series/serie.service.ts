import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Series } from '../../models/series.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private url = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getSeries(): Observable<Series[]>{
    return this.http.get<Series[]>(`${this.url}series`)
  }

  saveSeries(serie:Series):Observable<any>{
    return this.http.post(`${this.url}series`,serie);
  }

  getSeriesById(id:number):Observable<Series>{
    return this.http.get<Series>(`${this.url}series/${id}`);
  }

  updateSeries(id:number, serie:Series){
    return this.http.put(`${this.url}series/${id}`, serie);
  }

  deleteSeries(id:number){
    return this.http.delete(`${this.url}series/${id}`);
  }

}
