import { Component } from '@angular/core';
import { FavComponent } from '../../components/fav/fav.component';

@Component({
  selector: 'app-favorites',
  imports: [FavComponent],
  template: `
  <app-fav></app-fav>
   `,
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

}
