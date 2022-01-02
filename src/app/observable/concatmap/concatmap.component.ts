import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, concatAll, concatMap, delay, mergeMap } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {


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

    // Ex-02 | map + concatAll
    source.pipe(
      map(res => this.getVideoList(res)),
      concatAll()
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer2')

    })

    // Ex-03 | concatMap
    source.pipe(
      concatMap(res => this.getVideoList(res))
      // map(res => this.getVideoList(res)),
      // concatAll()
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer3')

    })

    // Ex-04 | mergeMap
    source.pipe(
      mergeMap(res => this.getVideoList(res))
      // map(res => this.getVideoList(res)),
      // concatAll()
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer4')

    })
  }

  getVideoList(Data) {
    return of(Data + ' Video uploaded').pipe(delay(2000));
  }

}
