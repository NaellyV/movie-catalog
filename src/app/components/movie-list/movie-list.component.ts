import { Component, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// biome-ignore lint/style/useImportType: <explanation>
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  filteredMovies: { title: string; year: number; isFavorite: boolean; poster: string }[] = [];
  searchTerm = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.filteredMovies = this.movieService.getMovies();
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  toggleFavorite(movie: any) {
    this.movieService.toggleFavorite(movie);
  }

  search() {
    this.filteredMovies = this.movieService.getMovies().filter(movie => 
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}