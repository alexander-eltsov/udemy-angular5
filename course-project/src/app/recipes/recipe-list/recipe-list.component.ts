import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'lorem ..... bla', 'http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/06/main/creole-shrimp-creamed-corn-1708p110.jpg?itok=VRNFsss0'),
    new Recipe('Some Recipe', '...', 'https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg')
  ];

  selectedRecipe: Recipe;

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe) {
    this.selectedRecipe = recipe;
    this.recipeSelected.emit(this.selectedRecipe);
  }

}
