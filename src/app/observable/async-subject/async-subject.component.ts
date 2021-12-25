import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  public dataEmit: any;
  constructor(private _common: CommonService) { }

  ngOnInit(): void {
    this._common.asyncSubjectEx.subscribe(res => {
      this.dataEmit = res;
    })
  }

  addVideoName(item) {
    if (item.value) {
      this._common.asyncSubjectEx.next(item.value);
      item.value = '';
    }
  }

  completeSub() {
    this._common.asyncSubjectEx.complete();
  }

}
