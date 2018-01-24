import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private current = 0;
  private intervalId: NodeJS.Timer;
  private running = false;
  @Output() numberChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.intervalId = setInterval(
      () => {
        this.running = true;
        this.current++;
        this.numberChanged.emit(this.current);
      },
      1000);
  }

  stop() {
    this.running = false;
    clearInterval(this.intervalId);
  }

}
