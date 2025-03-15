import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: { title: string; year: number; isFavorite: boolean; poster: string }[] = [];
  filteredMovies: { title: string; year: number; isFavorite: boolean; poster: string }[] = [];
  searchTerm = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(
      (movies) => {
        this.movies = movies;
        this.filteredMovies = movies;
       
      }
    );
  }

  toggleFavorite(movie: any): void {
    this.movieService.toggleFavorite(movie).subscribe(() => {
      this.loadMovies(); 
    });
  }
  
  search(): void {
    console.log('Termo de pesquisa:', this.searchTerm);
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Filmes filtrados:', this.filteredMovies);
  }

  trackByMovie(index: number, movie: any): string {
    return movie.title;
  }

}

