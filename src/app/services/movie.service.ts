import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    { title: "Oppenheimer", year: 2023, isFavorite: false, poster: 'assets/images/openheimer.jpeg' },
    { title: "Interestelar", year: 2014, isFavorite: false, poster: "assets/images/interestelar.jpg" },
    { title: "Central do Brasil", year: 1998, isFavorite: false, poster: "assets/images/centraldobrasil.jpg" },
    { title: "A Origem", year: 2010, isFavorite: false, poster: "assets/images/origem.jpg" },
    { title: "Clube da Luta", year: 1999, isFavorite: false, poster: "assets/images/clube-da-luta.jpeg" },
    { title: "Vingadores: Ultimato", year: 2019, isFavorite: false, poster: "assets/images/vingadores-ultimato.jpeg" },
    { title: "Pulp Fiction", year: 1994, isFavorite: false, poster: "assets/images/pulpfiction.jpg" },
    { title: "Coringa", year: 2019, isFavorite: false, poster: "assets/images/coringa.jpg" },
    { title: "O Senhor dos Anéis: O Retorno do Rei", year: 2003, isFavorite: false, poster: "assets/images/senhor-dos-aneis.jpg" },
    { title: "Matrix", year: 1999, isFavorite: false, poster: "assets/images/matrix.jpg" },
    { title: "Django Livre", year: 2012, isFavorite: false, poster: "assets/images/django.jpg" },
    { title: "Cidade de Deus", year: 2002, isFavorite: false, poster: "assets/images/cidade-de-deus.jpg" }
  ];

  getMovies() {
    return this.movies;
  }

  toggleFavorite(movie: any) {
    movie.isFavorite = !movie.isFavorite;
  }

  getFavorites() {
    return this.movies.filter(movie => movie.isFavorite);
  }
}