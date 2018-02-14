import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'lorem ..... bla',
      'http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/06/main/creole-shrimp-creamed-corn-1708p110.jpg?itok=VRNFsss0',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Bread', 1)
      ]
    ),
    new Recipe(
      'Some Recipe',
      '...',
      'https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg',
      [
        new Ingredient('Milk', 3)
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
