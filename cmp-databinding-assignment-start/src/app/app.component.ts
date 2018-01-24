import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  current: number;

  onNumberChanged(value) {
    this.current = value;
  }

  isOdd(): Boolean {
    return this.current % 2 === 1;
  }

  isEven(): Boolean {
    return this.current % 2 === 0;
  }
}
