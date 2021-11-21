import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(private _router:ActivatedRoute) {
    // console.log(this._router.component?.toString(),'this._router.component');
    
    
    // console.log(this._router.pathFromRoot,'this._router.pathFromRoot');
    
  }

  ngOnInit(): void {
  }

}
