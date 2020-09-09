import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DrawerService {

  private isOpen = new BehaviorSubject(false);
  currentValue = this.isOpen.asObservable();

  constructor() { }

  changeValue(value: boolean) {
    this.isOpen.next(value);
  }
}
