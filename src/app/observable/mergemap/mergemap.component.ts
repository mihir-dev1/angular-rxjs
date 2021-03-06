import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor(private _common: CommonService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex-01
    source.pipe(
      map(res => this.getVideoList(res))
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer')
      // res.subscribe(res2 => {
      //   this._common.addElement(res2, 'elContainer')
      // }
      // )
    })

    // Ex-02 | map + mergeAll
    source.pipe(
      map(res => this.getVideoList(res)),
      mergeAll()
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer2')

    })

    // Ex-03 | mergeMap
    source.pipe(
      mergeMap(res => this.getVideoList(res))
      // map(res => this.getVideoList(res)),
      // mergeAll()
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer3')

    })
  }

  getVideoList(Data) {
    return of(Data + ' Video uploaded');
  }

}
