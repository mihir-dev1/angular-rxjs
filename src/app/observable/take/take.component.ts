import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  arrayList = ['Mihir', 'Kumar', 'Trivedi', 'Ram', 'Krishna', 'Laskhman'];

  constructor(private _common: CommonService) {}

  ngOnInit(): void {
    // Ex- 01 | Take
    const nameSource = from(this.arrayList);

    nameSource.pipe(take(3)).subscribe((res) => {
      console.log(res, 'asd');
      this._common.addElement(res, 'eleContainer');
    });

    // Ex- 02 | TakeLast
    const takeLastOpt = from(this.arrayList);

    takeLastOpt.pipe(takeLast(3)).subscribe((res) => {
      console.log(res, 'asd');
      this._common.addElement(res, 'eleContainerTwo');
    });

    // Ex- 03 | TakeUtil

    const takeUtilOpt = interval(1000);
    const condition = timer(6000);
    const conditionTwo = fromEvent(document, 'click');

    takeUtilOpt.pipe(takeUntil(conditionTwo)).subscribe((res) => {
      console.log(res, 'asd');
      this._common.addElement(res, 'eleContainerThree');
    });
  }
}
