import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() value: number;

  constructor() {
    console.log('[even] ctor');
  }

  ngOnInit() {
  }

}
