import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  public userName: any;

  constructor(private _common: CommonService) { }

  ngOnInit(): void {
    this._common.userName.subscribe(res => {
      this.userName = res;
    })
  }

  changeUserName(item) {
    this._common.userName.next(item.value);
    item.value= '';
  }

}
