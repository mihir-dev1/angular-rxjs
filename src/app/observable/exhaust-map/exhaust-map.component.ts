import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, fromEvent } from 'rxjs';
import { concatMap, exhaust, exhaustMap, tap } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  @ViewChild('saveBtn') saveBtn: ElementRef

  count: any = 0;

  loader = false;

  reqCount: any;

  constructor(private _common: CommonService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.saveBtn.nativeElement, 'click').pipe(
      tap(() => this.loader = true),
      exhaustMap(() => this._common.putCountAdd(this.count++))
    )
      .subscribe(res => {
        console.log(res);
        this.fetchData();
      })
  }

  fetchData() {
    this._common.getReqCount().subscribe(res => {
      // console.log(res)
      this.reqCount = res['data'];
      this.loader = false;
    })
  }

  // addNumber(num) {
  //  let data = {}
  //  data['data'] = num;
  //   this._common.getCountAdd(data).subscribe(res => {
  //     console.log(res);

  //   })
  // }

}
