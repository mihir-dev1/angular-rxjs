import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  public userName;
  constructor(private _common: CommonService) {}

  ngOnInit(): void {
    this._common.exclusiveBadge.next(true);
    this._common.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnDestroy(): void {
    this._common.exclusiveBadge.next(false);
  }
}
