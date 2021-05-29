import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private messageSource = new BehaviorSubject({ type: '', data: {} });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    console.log('got msg in data service===>    ', message);
    this.messageSource.next(message)
  }
}
