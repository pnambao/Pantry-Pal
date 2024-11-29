import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  //Setting up our connection to the api service
  private baseURL: string = 'https://api.edamam.com/api/recipes/v2'; //base URL
  private appID: string = 'c9061186'//app ID
  private appKey: string = '5347bfac99d99c84cedb00b7cdd815ff'//app key

  constructor(private http: HttpClient) {}

  //Method to get recipes based on ingredients
  getRecipes(ingredients: string): Observable<any> {
    const params = new HttpParams()
    .set('type','public')
    .set('q', ingredients)
    .set('app_id', this.appID)
    .set('app_key', this.appKey);

    return this.http.get(this.baseURL,{params}); 
  }
}
