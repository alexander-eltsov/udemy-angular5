import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluepringCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // get input element ref from DOM
  @ViewChild('serverContentInput') anotherWayToGetInputElement: ElementRef;

  newServerName = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: serverContentInput.value
    });
  }

  onAddBlueprint() {
    this.bluepringCreated.emit({
      serverName: this.newServerName,
      serverContent: this.anotherWayToGetInputElement.nativeElement.value
    });
  }
}
