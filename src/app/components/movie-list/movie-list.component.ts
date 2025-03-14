import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent implements OnInit {
  filteredMovies: { title: string; year: number; isFavorite: boolean; poster: string }[] = [];
  searchTerm = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.filteredMovies = this.movieService.getMovies();
  }

  toggleFavorite(movie: any): void {
    this.movieService.toggleFavorite(movie);
  }

  search(): void {
    console.log('Termo de pesquisa:', this.searchTerm); // Debug
    const allMovies = this.movieService.getMovies();
    this.filteredMovies = allMovies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Filmes filtrados:', this.filteredMovies); // Debug
  }

  trackByMovie(index: number, movie: any): string {
    return movie.title;
  }
}