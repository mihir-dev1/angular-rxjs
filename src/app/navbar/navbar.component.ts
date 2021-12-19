import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public badgeShow:boolean;
  constructor(private _common:CommonService) { }

  ngOnInit(): void {
    this._common.exclusiveBadge.subscribe(res => {
      this.badgeShow = res;
    })
  }

}
