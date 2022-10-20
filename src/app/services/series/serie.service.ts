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
}
