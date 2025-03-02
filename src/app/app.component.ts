import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], 
  template: `
    <app-navbar></app-navbar> 
    <router-outlet></router-outlet> 
  `
})
export class AppComponent {
  title = 'movie-catalog';
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]  // Fornecendo as rotas aqui
});
