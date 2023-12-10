import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Movie } from '../models/movie';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
 

  

  constructor(private movieService: MovieService, private authService: AuthService) {}

  ngOnInit(): void {
    const userId = this.authService.getCurrentUserId()

    this.movieService.recupera().subscribe((movies) => {
      this.movies = movies;
    })
  }
toggleFavorite(movie: Movie, ): void {
  const userId = this.authService.getCurrentUserId();

  const isFavorite = !movie.favorite;
  this.movieService.updateFavoriteStatus(userId, movie.id, isFavorite).subscribe(() => {
    movie.favorite = isFavorite
  })
}
}
