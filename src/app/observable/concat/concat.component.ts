import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map(video => 'Tech Video#' + (video + 1)),
      take(5)
    )

    const sourceComedy = interval(1000).pipe(
      map(video => 'Comedy Video#' + (video + 1)),
      take(3)
    )

    const sourceNews = interval(1000).pipe(
      map(video => 'News Video#' + (video + 1)),
      take(4)
    )

    const finalData = concat(sourceTech, sourceComedy, sourceNews)

    finalData.subscribe(res => {
      console.log(res)
      this._common.addElement(res, 'elementContainer');
      // elementContainer
    })
  }

}
