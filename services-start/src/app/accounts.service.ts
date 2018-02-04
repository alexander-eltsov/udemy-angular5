import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from 'app/logging.service';

@Injectable()
export class AccountsService {
  statusChanged = new EventEmitter<string>();
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(
    private loggingService: LoggingService
  ) { }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.onStatusChanged(status);
  }

  changeStatus(id: number, newStatus: string) {
    this.statusChanged.emit(newStatus);
    this.accounts[id].status = newStatus;
    this.loggingService.onStatusChanged(status);
  }
}
