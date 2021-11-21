import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  addElement(str:any,containerId:any) {
    let addNewElement = document.createElement('li');
    addNewElement.innerHTML = str;
    document.getElementById(containerId)?.appendChild(addNewElement);
  }
}
