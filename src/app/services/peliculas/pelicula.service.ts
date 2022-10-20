import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peliculas } from 'src/app/models/peliculas.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
    private url = environment.apiUrl;

  constructor( private http:HttpClient) { }

  getPeliculas(): Observable<Peliculas[]>{
      return this.http.get<Peliculas[]>(`${this.url}peliculas`)
  }

  savePeliculas(pelicula:Peliculas):Observable<any>{
    return this.http.post(`${this.url}peliculas`,pelicula);
  }
}
