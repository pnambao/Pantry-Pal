import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  recipes = [
    {
      id: 1,
      title: 'Strawberry Shortcake',
      description: 'A sweet dessert with fresh strawberries.',
      image: 'assets/images/shortcake.jpg'
    },
    {
      id: 2,
      title: 'Caprese Salad',
      description: 'A fresh Italian salad with mozzarella and basil.',
      image: 'assets/images/caprese-salad.jpg'
    },
    {
      id: 3,
      title: 'Pasta Primavera',
      description: 'A healthy vegetable-packed pasta dish.',
      image: 'assets/images/pasta.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('Ingredients:', params);
    });
  }
}