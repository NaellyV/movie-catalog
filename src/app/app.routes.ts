import type { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'favorites', component: FavoritesComponent}
];
