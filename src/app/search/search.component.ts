import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  recipes$!: Observable<any>;
  ingredients: string = ''; // User input for ingredients

  constructor(private dataService: RecipesService) {}

  // Fetch recipes and clear input field
  public fetchRecipes(form: any): void {
    if (this.ingredients.trim()) {
      this.recipes$ = this.dataService.getRecipes(this.ingredients.trim());
      this.ingredients = ''; // Clear input field
      form.resetForm(); // Reset the form
    }
  }
}
