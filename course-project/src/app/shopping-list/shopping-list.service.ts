import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(i => {
      let theIngredient = this.ingredients.find(x => x.name === i.name);
      if (theIngredient == null) {
        theIngredient = i;
        this.ingredients.push(theIngredient);
      } else {
        theIngredient.amount += i.amount;
      }
    });
    this.ingredientsChanged.emit(this.ingredients);
  }

}
