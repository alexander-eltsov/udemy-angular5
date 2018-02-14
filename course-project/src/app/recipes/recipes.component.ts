import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = null;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipeService.selectedRecipe
    .subscribe( (recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  onSelectRecipe(recipe) {
    this.recipeService.selectedRecipe.emit();
    this.selectedRecipe = recipe;
  }

}
