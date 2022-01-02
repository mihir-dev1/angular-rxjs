import { Component, OnInit } from '@angular/core';
import { from, interval, merge, of } from 'rxjs';
import { map, switchAll, mergeMap, take, delay, switchMap, concatMap } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

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

    // Ex-02 | map + switchAll
    source.pipe(
      map(res => this.getVideoList(res)),
      switchAll()
    ).subscribe(res => {
      console.log(res, 'switchall');
      this._common.addElement(res, 'elContainer2')

    })

    // Ex-03 | switchMap
    source.pipe(
      switchMap(res => this.getVideoList(res))
      // map(res => this.getVideoList(res)),
      // switchAll()
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer3')
      this._common.addElement(res, 'elContainer6')


    })

    // Ex-04 | mergeMap
    source.pipe(
      mergeMap(res => this.getVideoList(res))
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer4')

    })

    // Ex-05 | concatMap
    source.pipe(
      concatMap(res => this.getVideoList(res))
    ).subscribe(res => {
      // console.log(res);
      this._common.addElement(res, 'elContainer5')

    })
  }

  getVideoList(Data) {
    return of(Data + ' Video uploaded').pipe(delay(1000));
  }

}
