import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabSelected = new EventEmitter<{selectedTab: string}>();

  constructor() { }

  ngOnInit() {
  }

  onRecipesClicked() {
    this.tabSelected.emit({selectedTab: 'recipes'});
  }

  onShoppingListClicked() {
    this.tabSelected.emit({selectedTab: 'shoppingList'});
  }

}
