import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fav',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {
  favoriteMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.movieService.getFavorites().subscribe(
      (favorites) => {
        this.favoriteMovies = favorites;
      
      },
      
    );
  }

  

  
}
