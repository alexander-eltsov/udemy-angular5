import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  private _toActive: number = 0;
  private _toInactive: number = 0;

  constructor() { }

  get ToActive() {
    return this._toActive;
  }
  set ToActive(val) {
    this._toActive = val;
  }

  get ToInactive() {
    return this._toInactive;
  }
  set ToInactive(val) {
    this._toInactive = val;
  }
}
