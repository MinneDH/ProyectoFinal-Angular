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

  getPeliculaById(id:number):Observable<Peliculas>{
    return this.http.get<Peliculas>(`${this.url}peliculas/${id}`);
  }

  updatePelicula(id:number, pelicula:Peliculas){
    return this.http.put(`${this.url}peliculas/${id}`, pelicula);
  }

  deletePelicula(id:number){
    return this.http.delete(`${this.url}peliculas/${id}`);
  }
}
