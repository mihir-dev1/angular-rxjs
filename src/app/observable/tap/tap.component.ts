import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  public colorName = '';
  constructor(private _common: CommonService) { }

  ngOnInit(): void {
    const dataSource = interval(1000);

    // Ex 01

    const arrayList = ['Mihir', 'Kumar', 'Trivedi', 'Ram', 'Krishna', 'Laskhman'];

    let sub = dataSource.pipe(
      //  take(6),
      tap(res => {
        console.log('tap before =>', res);
        if (res == 6) {
          sub.unsubscribe();
        }
      }
      ),
      map(data => arrayList[data]),
      tap(res => console.log('tap after=>', res))

    ).subscribe(res => {
      this._common.addElement(res, 'elContainer')
    })

    // Ex 02

    const colorList = ['Red', 'Yellow', 'Green', 'Blue', 'Black', 'Orange', 'Purple'];

    let subTwo = dataSource.pipe(
      take(7),
      tap(res => {
        this.colorName = colorList[res];
        // console.log('tap before =>', res);
        if (res == 7) {
          subTwo.unsubscribe();
        }
      }
      ),
      map(data => colorList[data]),
    ).subscribe(res => {
      this._common.addElement(res, 'elContainerColor')
    })
  }

}
