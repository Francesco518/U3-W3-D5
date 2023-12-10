import { Inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class MovieService {

  apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  // recupera() {
  //   return this.http.get<Movie[]>(`${this.apiUrl}/movies-popular`);
  // }
  recupera(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this,this.apiUrl}/movies-popular`)
  }

  updateFavoriteStatus(userId: number, movieId: number, isFavorite: boolean) : Observable<any> {
    const favoritesUrl = `${this.apiUrl}/favorites`;
    const favoriteData = {userId, movieId, isFavorite};
    return this.http.post(favoritesUrl, favoriteData)
    
  }
  
}