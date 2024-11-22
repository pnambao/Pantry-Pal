import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: any;

  recipes = [
    {
      id: 1,
      title: 'Strawberry Shortcake',
      description: 'A delicious dessert with strawberries.',
      instructions: ['Step 1: Prepare...', 'Step 2: Bake...', 'Step 3: Serve!']
    },
    {
      id: 2,
      title: 'Caprese Salad',
      description: 'A fresh salad with mozzarella and basil.',
      instructions: ['Step 1: Slice...', 'Step 2: Arrange...', 'Step 3: Serve!']
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipe = this.recipes.find(r => r.id === +id); 
    } else {
      console.error('No recipe ID provided in the route.');
    }
  }
}