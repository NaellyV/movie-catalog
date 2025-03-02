import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';


@Component({
  selector: 'app-home',
  imports: [MovieListComponent],
  styleUrl: './home.component.scss',
  template: `
    <app-movie-list></app-movie-list>`
    
})
export class HomeComponent {


}
