import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Search } from '../interface/search';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  public exclusiveBadge = new Subject<boolean>();
  public userName = new BehaviorSubject<any>('Mihir');
  public videoList = new ReplaySubject<any>(6, 5000);
  public asyncSubjectEx = new AsyncSubject();

  public baseUrl = "https://my-json-server.typicode.com/Uxtrendz/apis/videoList";

  constructor(private http:HttpClient) { }

  addElement(str: any, containerId: any) {
    let addNewElement = document.createElement('li');
    addNewElement.innerText = str;
    document.getElementById(containerId)?.appendChild(addNewElement);
  }

  notification(str: any, containerId: any) {
    let addNewElement = document.createElement('div');
    addNewElement.setAttribute('class','item')
    addNewElement.innerHTML = str;
    document.getElementById(containerId)?.prepend(addNewElement);
  }

  getSearchResult(term):Observable<Search> {
   return this.http.get<Search>(this.baseUrl+'?q='+term)
  }
}
