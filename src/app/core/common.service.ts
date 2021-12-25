import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  public exclusiveBadge = new Subject<boolean>();
  public userName = new BehaviorSubject<any>('Mihir');
  public videoList = new ReplaySubject<any>(6,5000);
  public asyncSubjectEx = new AsyncSubject();
  constructor() { }

  addElement(str: any, containerId: any) {
    let addNewElement = document.createElement('li');
    addNewElement.innerHTML = str;
    document.getElementById(containerId)?.appendChild(addNewElement);
  }
}
