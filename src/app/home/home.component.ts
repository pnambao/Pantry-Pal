import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  recipeOfTheDay = {
    title: 'Caprese Salad',
    description:'Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.',
    image: 'assets/images/caprese-salad.jpg'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('HomeComponent loaded');
  }

  navigateToRecipe(): void {
    this.router.navigate(['/recipe']);
  }
}
