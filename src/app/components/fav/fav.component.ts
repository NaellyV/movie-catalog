import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fav',
  imports: [CommonModule, FormsModule],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.scss'
})
export class FavComponent implements OnInit{
  favoriteMovies: any[] = [];
  
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.favoriteMovies = this.movieService.getFavorites();
  }
 
}
