import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret: Boolean = false;
  clickDates: Array<Date> = new Array<Date>();

  onDisplayDetails() {
    this.showSecret = !this.showSecret;
    this.clickDates.push(new Date());
  }

  needsStyling(clickDate) {
    const index = this.clickDates.indexOf(clickDate);
    return index >= 4;
  }
}
