import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { concatMap, map, mergeMap, shareReplay, take, toArray } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {

  public getAllProductList: Observable<any>;

  public electricItem: any;

  public menItemList: any;

  public womenItemList: any;

  constructor(private _common: CommonService) {
    let timeInterval = interval(100);
    // timeInterval = of(timeInterval);
    timeInterval.pipe(take(3)).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.getAllProductList = this._common.getAllProduct().pipe(shareReplay());

    this.menItemList = this.getAllProductList.pipe(
      map(item => item.filter(data => {
        return data['category'] === `men's clothing`;
      }))
    )

    this.womenItemList  = this.getAllProductList.pipe(
      map(data => data.filter(res => {
        return res['category'] === `women's clothing`;
      }))
    )

    // this.getFirstThreeItem();
  }

  getFirstThreeItem() {
    this._common.getAllProduct().subscribe((res: any) => {
      this.menItemList = res;
      // this.electricItem = from(res);
      // this.electricItem.pipe(take(3), toArray()).subscribe(item => {
      //   console.log(item);
      //   this.menItemList = item;
      // })

    })
  }

}
