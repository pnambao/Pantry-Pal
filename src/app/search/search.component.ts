import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  ingredients = {
    carbonhydrate: '',
    protein: '', 
    vegetables: '', 
    spices: '', 
    others: ''
  };

  constructor(private router: Router) {}

  searchRecipes() {
    this.router.navigate(['/results'], {queryParams: this.ingredients});
  }
}
