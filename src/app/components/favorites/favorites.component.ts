import { Component, type OnInit } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, FormsModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  favoriteMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.favoriteMovies = this.movieService.getFavorites();
  }
}