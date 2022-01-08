import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  public isMainPage: boolean = true;

  constructor(private _router: Router) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/observable') {
          this.isMainPage = false;
        } else {
          this.isMainPage = true;
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
