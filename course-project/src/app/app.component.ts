import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedTab = 'recipes';

  selectTab(event: {selectedTab: string}) {
    this.selectedTab = event.selectedTab;
  }
}
