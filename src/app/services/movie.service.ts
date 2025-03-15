import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies'; 

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFavorites(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?isFavorite=true`);
  }

  toggleFavorite(movie: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${movie.id}`, {
      ...movie,
      isFavorite: !movie.isFavorite
    });
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
