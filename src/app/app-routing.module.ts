import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RecipeOfTheDayComponent } from './recipe-of-the-day/recipe-of-the-day.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'recipeOfTheDay', component: RecipeOfTheDayComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
