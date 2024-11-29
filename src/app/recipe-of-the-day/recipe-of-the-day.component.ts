import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-of-the-day',
  templateUrl: './recipe-of-the-day.component.html',
  styleUrl: './recipe-of-the-day.component.scss'
})
export class RecipeOfTheDayComponent {


  salad = 
    {
      id: 1,
      title: 'Caprese Salad',
      ingredients: 'Tomatoes, Mozzarella, Basil, Balsamic Glaze, Olive Oil, Salt & Pepper',
      instructions: ['Slice a few ripe tomatoes into ¼ inch slices.', 'Do the same size slice for a few balls of fresh mozzarella.', 'Start by layering slices of tomatoes on a serving platter. Tuck slices of cheese between each tomato so both are visible then tuck whole basil leaves between the cheese and tomatoes. Arrange the slices so you can see every layer.', 'Season generously with salt and pepper, drizzle all over with extra virgin olive oil and drizzle with 2 tablespoon balsamic glaze or add it to taste.']
    }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.salad = this.salad 
    } else {
      console.error('No recipe ID provided in the route.');
    }
  }
  
}
